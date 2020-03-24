'use strict'
const Url = require('url-parse')
const http = require('http')
const https = require('https')
const crypto = require('crypto')
const os = require('os')

const collector = require('../../generated_proto/collector_pb')
const metrics = require('../../generated_proto/metrics_pb')
const googleProtoBufTimestampPB = require('google-protobuf/google/protobuf/timestamp_pb.js')
const now = require('./now')
const log = require('../../log')

class Client {
  constructor (options) {
    options = options || {}
    this._start = now()
    this._lastTime = this._start
    this._url = options.lsMetricsUrl || new Url(options.hostname)

    if (options.lsMetricsUrl) {
      this._host = this._url.hostname
      this._port = this._url.port
      this._path = this._url.pathname
    } else {
      this._host = options.hostname || 'localhost'
      this._port = options.port || (this._url.protocol === 'https' ? 443 : 80)
      this._path = ''
    }

    this._prefix = options.prefix || ''
    this._tags = options.tags || []
    this._accessToken = this._accessTokenFromTags(this._tags)
    this._componentName = options.service || ''
    this._points = []
  }

  _accessTokenFromTags (tags) {
    for (const tag of tags) {
      if (tag.startsWith('lightstep.access_token:')) return tag.split(':')[1]
    }
    return ''
  }

  gauge (name, value, tags) {
    tags = tags ? this._tags.concat(tags) : this._tags
    const point = {
      kind: 2,
      metricName: name,
      start: this._lastTime,
      duration: 0,
      labels: tags.filter(tag => tag !== undefined),
      value
    }
    this._points.push(point)
  }

  increment (name, value, tags) {
    tags = tags ? this._tags.concat(tags) : this._tags
    const point = {
      kind: 1,
      metricName: name,
      start: this._lastTime,
      duration: now() - this._lastTime,
      labels: tags,
      value
    }
    this._points.push(point)
  }

  flush () {
    this._lastTime = now()
    let points
    if (this._mergePoints) {
      this._mergePoints = false
      points = mergePoints(this._points.slice())
    } else {
      points = this._points.slice()
    }
    this._points = []
    const report = createProtoReport(points, this._componentName)
    log.debug('generated machine metrics report in', now() - this._lastTime, 'milliseconds')
    if (!this._skipped) {
      log.debug('skipping initial machine metrics report to be able to calculate delta correctly')
      this._skipped = true
      return
    }

    this._send(report, () => {
      log.debug('successfully reported machine metrics')
    }, (error) => {
      log.error(error)
      // restore points to be sent with next cycle
      this._mergePoints = true
      this._points.unshift(...points)
    })
  }

  _send (buffer, onSuccess, onError, retryCount = 0) {
    const self = this
    const options = {
      hostname: this._host,
      port: this._port,
      path: this._path,
      method: 'POST',
      headers: {
        Accept: 'application/octet-stream',
        'Content-Length': buffer.byteLength,
        'Content-Type': 'application/octet-stream',
        'Lightstep-Access-Token': this._accessToken
      }
    }
    const request = this._url.protocol === 'http:' ? http.request : https.request

    function retryRandomly (from, to) {
      const howMany = to - from
      const time = Math.floor((from + Math.random() * howMany) * 1000)
      log.debug('retrying -> ', retryCount, ` in ${time}ms`)
      setTimeout(() => {
        self._send(buffer, onSuccess, onError, retryCount)
      }, time)
    }

    function retry (statusCode) {
      retryCount++
      switch (retryCount) {
        case 1:
          retryRandomly(1, 2)
          break
        case 2:
          retryRandomly(2, 4)
          break
        case 3:
          retryRandomly(4, 8)
          break
        default:
          onError(statusCode)
      }
    }

    const req = request(options, (res) => {
      if (res.statusCode && res.statusCode < 300) {
        onSuccess()
      } else {
        log.error('request failed', res.statusCode)
        retry(res.statusCode)
      }
    })

    req.on('error', (error) => {
      retry(error)
    })
    req.write(Buffer.from(buffer))
    req.end()
  }
}

function createProtoReport (points, componentName) {
  const protoPoints = points.map((point) => {
    const protoPoint = new metrics.MetricPoint()

    protoPoint.setKind(point.kind)

    protoPoint.setMetricName(point.metricName)

    protoPoint.setDoubleValue(point.value)

    const start = new googleProtoBufTimestampPB.Timestamp()
    start.fromDate(new Date(point.start))
    protoPoint.setStart(start)

    const duration = new googleProtoBufTimestampPB.Timestamp()
    duration.fromDate(new Date(point.duration))
    protoPoint.setDuration(duration)

    const protoLabels = []
    point.labels.forEach((label) => {
      const arr = label.split(':')
      protoLabels.push(NewKeyValue(arr[0], arr[1]))
    })
    protoPoint.setLabelsList(protoLabels)

    return protoPoint
  })

  const reportProto = new metrics.IngestRequest()
  reportProto.setIdempotencyKey(getRandomKey())
  reportProto.setPointsList(protoPoints)
  reportProto.setReporter(getReporter(componentName))

  return reportProto.serializeBinary()
}

function getRandomKey (length) {
  return crypto.randomBytes(30).toString('hex')
}

function getReporter (componentName) {
  const reporter = new collector.Reporter()
  reporter.setTagsList([
    new NewKeyValue('lightstep.component_name', componentName),
    new NewKeyValue('lightstep.hostname', os.hostname()),
    new NewKeyValue('lightstep.reporter_platform', 'ls-trace-js'),
    new NewKeyValue('lightstep.reporter_platform_version', process.version)
  ])
  return reporter
}

function getSortName (point) {
  return `${compareBy(point)}.${String(point.start)}`
}

function compareBy (point) {
  const labels = point.labels.sort().join(',')
  return `${point.metricName}.${String(point.kind)}.${labels}`
}

function pointsMatches (point1, point2) {
  return compareBy(point1) === compareBy(point2)
}

function concatPoints (currentPoint, previousPoint) {
  const point = Object.assign({}, previousPoint)
  let value

  if (currentPoint.kind === 2) {
    // GAUGE
    value = (parseFloat(currentPoint.value) + parseFloat(previousPoint.value)) / 2
  } else {
    // COUNTER
    value = parseFloat(currentPoint.value) + parseFloat(previousPoint.value)
  }
  point.duration = currentPoint.duration + previousPoint.duration
  point.value = value

  return point
}

function mergePoints (points) {
  points.sort((a, b) => {
    const aValue = getSortName(a)
    const bValue = getSortName(b)
    if (aValue > bValue) {
      return 1
    } else if (aValue < bValue) {
      return -1
    } else {
      return 0
    }
  })

  for (let i = points.length - 1; i > 0; i--) {
    const currentPoint = points[i]
    const previousPoint = points[i - 1]
    if (pointsMatches(currentPoint, previousPoint)) {
      points[i - 1] = concatPoints(currentPoint, previousPoint)
      points.splice(i, 1)
    }
  }
  return points
}

function NewKeyValue (key, value) {
  const keyValue = new collector.KeyValue()
  keyValue.setKey(key)
  if (typeof value !== 'undefined') {
    keyValue.setStringValue(String(value))
  }
  return keyValue
}

module.exports = Client

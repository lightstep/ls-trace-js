'use strict'

const coalesce = require('koalas')
const EventEmitter = require('events')
const crypto = require('./crypto')
const now = require('./now')
const env = require('./env')
const validate = require('./validate')
const service = require('./service')
const request = require('./request')
const msgpack = require('./msgpack')
const metrics = require('./metrics')
const metricsLightStep = require('./metrics_lightstep')
const plugins = require('../../plugins')
const hostname = require('./hostname')
const Loader = require('./loader')
const Scope = require('../../scope/async_hooks')
const exporter = require('./exporter')

const emitter = new EventEmitter()

const useLSMetrics = String(coalesce(process.env['LS_METRICS_ENABLED'], true)) !== 'false'

const platform = {
  _config: {},
  name: () => 'nodejs',
  version: () => process.version,
  engine: () => process.jsEngine || 'v8',
  crypto,
  now,
  env,
  tags: () => ({}),
  validate,
  service,
  request,
  msgpack,
  metrics: useLSMetrics ? metricsLightStep : metrics,
  plugins,
  hostname,
  on: emitter.on.bind(emitter),
  off: emitter.removeListener.bind(emitter),
  Loader,
  Scope,
  exporter
}

process.once('beforeExit', () => emitter.emit('exit'))

module.exports = platform

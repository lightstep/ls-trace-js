'use strict'

const id = require('./id')
const msgpack = require('msgpack-lite')
const { Int64BE, Uint64BE } = require('int64-buffer') // TODO: remove dependency

let codec

module.exports = data => {
  codec = codec || msgpack.createCodec({ int64: true })

  data = data.map(span => {
    let truncatedId = span.trace_id.toString()
    truncatedId = truncatedId.substring(truncatedId.length - 16)
    return Object.assign({}, span, {
      trace_id: new Uint64BE(id(truncatedId, 16).toBuffer()),
      span_id: new Uint64BE(span.span_id.toBuffer()),
      parent_id: new Uint64BE(span.parent_id.toBuffer()),
      start: new Int64BE(span.start),
      duration: new Int64BE(span.duration)
    })
  })

  return msgpack.encode(data, { codec })
}

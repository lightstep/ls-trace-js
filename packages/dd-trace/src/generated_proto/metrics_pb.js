// source: metrics.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var collector_pb = require('./collector_pb.js');
goog.object.extend(proto, collector_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.lightstep.metrics.IngestRequest', null, global);
goog.exportSymbol('proto.lightstep.metrics.IngestResponse', null, global);
goog.exportSymbol('proto.lightstep.metrics.MetricKind', null, global);
goog.exportSymbol('proto.lightstep.metrics.MetricPoint', null, global);
goog.exportSymbol('proto.lightstep.metrics.MetricPoint.ValueCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lightstep.metrics.MetricPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lightstep.metrics.MetricPoint.repeatedFields_, proto.lightstep.metrics.MetricPoint.oneofGroups_);
};
goog.inherits(proto.lightstep.metrics.MetricPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lightstep.metrics.MetricPoint.displayName = 'proto.lightstep.metrics.MetricPoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lightstep.metrics.IngestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lightstep.metrics.IngestRequest.repeatedFields_, null);
};
goog.inherits(proto.lightstep.metrics.IngestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lightstep.metrics.IngestRequest.displayName = 'proto.lightstep.metrics.IngestRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lightstep.metrics.IngestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lightstep.metrics.IngestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lightstep.metrics.IngestResponse.displayName = 'proto.lightstep.metrics.IngestResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lightstep.metrics.MetricPoint.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lightstep.metrics.MetricPoint.oneofGroups_ = [[6,7]];

/**
 * @enum {number}
 */
proto.lightstep.metrics.MetricPoint.ValueCase = {
  VALUE_NOT_SET: 0,
  UINT64_VALUE: 6,
  DOUBLE_VALUE: 7
};

/**
 * @return {proto.lightstep.metrics.MetricPoint.ValueCase}
 */
proto.lightstep.metrics.MetricPoint.prototype.getValueCase = function() {
  return /** @type {proto.lightstep.metrics.MetricPoint.ValueCase} */(jspb.Message.computeOneofCase(this, proto.lightstep.metrics.MetricPoint.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lightstep.metrics.MetricPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.lightstep.metrics.MetricPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lightstep.metrics.MetricPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lightstep.metrics.MetricPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    metricName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    collector_pb.KeyValue.toObject, includeInstance),
    uint64Value: jspb.Message.getFieldWithDefault(msg, 6, 0),
    doubleValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lightstep.metrics.MetricPoint}
 */
proto.lightstep.metrics.MetricPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lightstep.metrics.MetricPoint;
  return proto.lightstep.metrics.MetricPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lightstep.metrics.MetricPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lightstep.metrics.MetricPoint}
 */
proto.lightstep.metrics.MetricPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.lightstep.metrics.MetricKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetricName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 5:
      var value = new collector_pb.KeyValue;
      reader.readMessage(value,collector_pb.KeyValue.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUint64Value(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lightstep.metrics.MetricPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lightstep.metrics.MetricPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lightstep.metrics.MetricPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lightstep.metrics.MetricPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMetricName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      collector_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional MetricKind kind = 1;
 * @return {!proto.lightstep.metrics.MetricKind}
 */
proto.lightstep.metrics.MetricPoint.prototype.getKind = function() {
  return /** @type {!proto.lightstep.metrics.MetricKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.lightstep.metrics.MetricKind} value
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string metric_name = 2;
 * @return {string}
 */
proto.lightstep.metrics.MetricPoint.prototype.getMetricName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.setMetricName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.lightstep.metrics.MetricPoint.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
*/
proto.lightstep.metrics.MetricPoint.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lightstep.metrics.MetricPoint.prototype.hasStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.lightstep.metrics.MetricPoint.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
*/
proto.lightstep.metrics.MetricPoint.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lightstep.metrics.MetricPoint.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated lightstep.collector.KeyValue labels = 5;
 * @return {!Array<!proto.lightstep.collector.KeyValue>}
 */
proto.lightstep.metrics.MetricPoint.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.lightstep.collector.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, collector_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.lightstep.collector.KeyValue>} value
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
*/
proto.lightstep.metrics.MetricPoint.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.lightstep.collector.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lightstep.collector.KeyValue}
 */
proto.lightstep.metrics.MetricPoint.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.lightstep.collector.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional uint64 uint64_value = 6;
 * @return {number}
 */
proto.lightstep.metrics.MetricPoint.prototype.getUint64Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.setUint64Value = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.lightstep.metrics.MetricPoint.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.clearUint64Value = function() {
  return jspb.Message.setOneofField(this, 6, proto.lightstep.metrics.MetricPoint.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lightstep.metrics.MetricPoint.prototype.hasUint64Value = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double double_value = 7;
 * @return {number}
 */
proto.lightstep.metrics.MetricPoint.prototype.getDoubleValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.setDoubleValue = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.lightstep.metrics.MetricPoint.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lightstep.metrics.MetricPoint} returns this
 */
proto.lightstep.metrics.MetricPoint.prototype.clearDoubleValue = function() {
  return jspb.Message.setOneofField(this, 7, proto.lightstep.metrics.MetricPoint.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lightstep.metrics.MetricPoint.prototype.hasDoubleValue = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lightstep.metrics.IngestRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lightstep.metrics.IngestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lightstep.metrics.IngestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lightstep.metrics.IngestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lightstep.metrics.IngestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idempotencyKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reporter: (f = msg.getReporter()) && collector_pb.Reporter.toObject(includeInstance, f),
    pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    proto.lightstep.metrics.MetricPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lightstep.metrics.IngestRequest}
 */
proto.lightstep.metrics.IngestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lightstep.metrics.IngestRequest;
  return proto.lightstep.metrics.IngestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lightstep.metrics.IngestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lightstep.metrics.IngestRequest}
 */
proto.lightstep.metrics.IngestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdempotencyKey(value);
      break;
    case 2:
      var value = new collector_pb.Reporter;
      reader.readMessage(value,collector_pb.Reporter.deserializeBinaryFromReader);
      msg.setReporter(value);
      break;
    case 3:
      var value = new proto.lightstep.metrics.MetricPoint;
      reader.readMessage(value,proto.lightstep.metrics.MetricPoint.deserializeBinaryFromReader);
      msg.addPoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lightstep.metrics.IngestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lightstep.metrics.IngestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lightstep.metrics.IngestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lightstep.metrics.IngestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdempotencyKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReporter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      collector_pb.Reporter.serializeBinaryToWriter
    );
  }
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.lightstep.metrics.MetricPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string idempotency_key = 1;
 * @return {string}
 */
proto.lightstep.metrics.IngestRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lightstep.metrics.IngestRequest} returns this
 */
proto.lightstep.metrics.IngestRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional lightstep.collector.Reporter reporter = 2;
 * @return {?proto.lightstep.collector.Reporter}
 */
proto.lightstep.metrics.IngestRequest.prototype.getReporter = function() {
  return /** @type{?proto.lightstep.collector.Reporter} */ (
    jspb.Message.getWrapperField(this, collector_pb.Reporter, 2));
};


/**
 * @param {?proto.lightstep.collector.Reporter|undefined} value
 * @return {!proto.lightstep.metrics.IngestRequest} returns this
*/
proto.lightstep.metrics.IngestRequest.prototype.setReporter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lightstep.metrics.IngestRequest} returns this
 */
proto.lightstep.metrics.IngestRequest.prototype.clearReporter = function() {
  return this.setReporter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lightstep.metrics.IngestRequest.prototype.hasReporter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated MetricPoint points = 3;
 * @return {!Array<!proto.lightstep.metrics.MetricPoint>}
 */
proto.lightstep.metrics.IngestRequest.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.lightstep.metrics.MetricPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lightstep.metrics.MetricPoint, 3));
};


/**
 * @param {!Array<!proto.lightstep.metrics.MetricPoint>} value
 * @return {!proto.lightstep.metrics.IngestRequest} returns this
*/
proto.lightstep.metrics.IngestRequest.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.lightstep.metrics.MetricPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lightstep.metrics.MetricPoint}
 */
proto.lightstep.metrics.IngestRequest.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.lightstep.metrics.MetricPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lightstep.metrics.IngestRequest} returns this
 */
proto.lightstep.metrics.IngestRequest.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lightstep.metrics.IngestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lightstep.metrics.IngestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lightstep.metrics.IngestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lightstep.metrics.IngestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lightstep.metrics.IngestResponse}
 */
proto.lightstep.metrics.IngestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lightstep.metrics.IngestResponse;
  return proto.lightstep.metrics.IngestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lightstep.metrics.IngestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lightstep.metrics.IngestResponse}
 */
proto.lightstep.metrics.IngestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lightstep.metrics.IngestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lightstep.metrics.IngestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lightstep.metrics.IngestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lightstep.metrics.IngestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.lightstep.metrics.MetricKind = {
  INVALID_METRIC_KIND: 0,
  COUNTER: 1,
  GAUGE: 2
};

goog.object.extend(exports, proto.lightstep.metrics);

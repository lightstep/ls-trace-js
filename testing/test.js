'use strict';

const express = require('express');
const tracer = require('../packages/dd-trace').init({
  clientToken: 'YOUR_TOKEN',
  plugins: true,
  runtimeMetrics: true,
  reportingInterval: 5 * 1000,
  componentName: 'ls-trace-js-testing',
  // url: 'https://ingest.lightstep.com/metrics',
  url: 'https://ingest.staging.lightstep.com/metrics',
});

const app = express();
app.listen(8080);

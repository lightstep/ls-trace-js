'use strict';

const express = require('express');
const tracer = require('../packages/dd-trace').init({
  experimental: {
    b3: true
  },
  tags: 'lightstep.service_name:ls-trace-js-testing,lightstep.access_token:YOUR_TOKEN',
  url: 'TRACE_URL',
  metricsUrl: 'METRICS_URL',
});

const app = express();

setInterval(() => {
  const span = tracer.startSpan('test2');
  span.setTag('http.url', '/login');
  setTimeout(() => {
    span.finish();
  }, 300);
}, 3000);

app.listen(8080);

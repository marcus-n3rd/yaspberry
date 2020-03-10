import AWS from 'aws-sdk';
import { captureAWS, captureHTTPsGlobal } from 'aws-xray-sdk';
import http from 'http';
import https from 'https';

// Use module closure to cache initialized state
let initialized = false;

/**
 * Initializes amazon xray for tracing.
 * Should be imported directly or through xray middleware in every lambda
 * handler.
 */
function initXray() {
  if (!initialized) {
    // Ensure lambda has x-ray daemon by checking env variable
    const traceId = process.env['_X_AMZN_TRACE_ID'];

    if (traceId) {
      // Monkey patch Node's internal HTTP library
      captureHTTPsGlobal(http);
      captureHTTPsGlobal(https);

      // Monkey patch AWS SDK
      captureAWS(AWS);

      // Cache initialized state for lambda.
      initialized = true;
    }
  }
}

export default initXray;

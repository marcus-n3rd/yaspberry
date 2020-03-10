const middy = require('middy');
const ioMiddleware = require('@middy/input-output-logger');
const errorLoggerMiddleware = require('./errorLogger.middleware');
const {
  httpEventNormalizer,
  httpHeaderNormalizer,
  jsonBodyParser,
  cors,
} = require('middy/middlewares');
const authMiddleware = require('./auth.middleware');
const lambdaProxyMiddleware = require('./lambdaProxy.middleware');
const logger = require('../services/logger.service');
const xrayMiddleware = require('./x-ray.middleware').default;

/**
 * Attach middleware stack to a lambda handler
 * @param {function} handler - a lambda handler
 * @param {Object} options - additional configuration
 * @returns {function()} - a decorated lambda handler
 *
 */
function withHttpMiddleware(handler, { auth = { enabled: true } } = {}) {
  const middleware = middy(handler);

  middleware
    .use(xrayMiddleware())
    .use(
      ioMiddleware({
        logger: message => logger.log({ level: 'info', ...message }),
      })
    )
    .use(httpHeaderNormalizer()) // Normalizes headers to correct casing
    .use(httpEventNormalizer()) // makes sure the event object has all available keys
    .use(cors())
    .use(jsonBodyParser()); // Automatically parse json

  // NOTE: If there end up being more conditional middleware switch to a compose pattern
  if (auth.enabled) {
    middleware.use(authMiddleware());
  }

  middleware
    .use(lambdaProxyMiddleware()) // translate controller return values and errors to lambda responses
    .use(errorLoggerMiddleware()); // Logs Errors, should be last in stack

  return middleware;
}

module.exports = withHttpMiddleware;

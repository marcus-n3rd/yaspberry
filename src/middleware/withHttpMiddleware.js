import middy from 'middy';
import ioMiddleware from '@middy/input-output-logger';
import {
  httpEventNormalizer,
  httpHeaderNormalizer,
  jsonBodyParser,
  cors,
} from 'middy/middlewares';
import logger from '../services/logging.service';
import authMiddleware from './auth.middleware';
import errorLoggerMiddleware from './errorLogger.middleware';
import lambdaProxyMiddleware from './lambdaProxy.middleware';
import xrayMiddleware from './x-ray.middleware';

/**
 * Attach middleware stack to a lambda handler
 * @param {function} handler - a lambda handler
 * @param {Object} options - additional configuration
 * @returns {function()} - a decorated lambda handler
 */
export default function withHttpMiddleware(handler, { auth = { enabled: true } } = {}) {
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

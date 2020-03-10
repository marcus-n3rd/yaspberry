const lambdaProxy = require('lambda-proxy-response');
const createError = require('http-errors');

function lambdaProxyMiddleware() {
  return {
    // Takes response and transforms it to a lambdaProxy respone
    after: (handler, next) => {
      // By default your response will be a 200.
      // However, you can override this if your response object includes a statusCode property.
      // We assume that your response body will be in `handler.response.body`. Other props will
      // not be used.
      const { response } = handler;
      if (response && response.statusCode) {
        handler.response = lambdaProxy.response(
          response.statusCode,
          {},
          response.body
        );
      } else {
        handler.response = lambdaProxy.ok({}, handler.response);
      }
      next();
    },

    onError: (handler, next) => {
      // takes an error and transforms it lambdaProxy response using http=errors
      const { error } = handler;
      const status = error.statusCode || error.status || 500;
      handler.response = lambdaProxy.response(
        status,
        {},
        createError(status, error.message || undefined)
      );
      return next();
    },
  };
}

module.exports = lambdaProxyMiddleware;

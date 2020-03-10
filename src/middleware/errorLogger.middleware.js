import logger from '../services/logging.service';

export default function errorLoggerMiddleware() {
  return {
    onError: (handler, next) => {
      const { error, context, event } = handler;
      logger.error({
        message: error.message || null,
        statusCode: error.statusCode || 500,
        stack: error.stack || null,
        event: {
          resource: event.resource || null,
          httpMethod: event.httpMethod || null,
          queryStringParameters: event.queryStringParameters || null,
          body: event.body || null,
        },
        context: {
          sourceIp: event.requestContext.identity.sourceIp || null,
          userAgent: event.requestContext.identity.userAgent || null,
        },
        awsRequestId: context.awsRequestId || null,
      });
      return next();
    },
  };
}

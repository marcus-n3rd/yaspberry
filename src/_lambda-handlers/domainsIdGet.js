/* Infrastructure specific logic to start business logic */
import { domainGet } from '../controllers/domain.controller';
import withHttpMiddleware from '../middleware/withHttpMiddleware';

const midParams = {
  auth: {
    enabled: false,
  },
};

export const handler = withHttpMiddleware(async event => {
  const { pathParameters: { id } } = event;
  return await domainGet(id);
}, midParams);

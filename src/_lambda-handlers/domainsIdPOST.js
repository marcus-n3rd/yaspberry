/* Infrastructure specific logic to start business logic */
import { domainPut } from '../controllers/domain.controller';
import withHttpMiddleware from '../middleware/withHttpMiddleware';
import logger from '../services/logging.service';

const midParams = {
  auth: {
    enabled: false,
  },
};

export const handler = withHttpMiddleware(async event => {
  const { pathParameters: { id } } = event;
  const entity = event.body;
  logger.debug('Input', { id, entity });
  return await domainPost(id, entity);
}, midParams);

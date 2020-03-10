/* Infrastructure specific logic to start business logic */
import { domainGet } from '../controllers/domain.controller';

module.exports.handler = withHttpMiddleware(async event => {
  const id = event.arbitraryProperty;
  return await domainGet(id);
});

/* Infrastructure specific logic to start business logic */
import secrets from '../config/secrets';
import { endpoint100GetHandler } from '../controllers/domain.controller';

secrets.get('secretAlpha');

module.exports.handler = withHttpMiddleware(async event => {
  const arbitraryValue = event.arbitraryProperty;
  const password = await secrets.get('secretAlpha');
  return await endpoint100GetHandler(arbitraryValue, password);
})
// import env from '../config/env.aws';
import secrets from '../config/secrets';
import { endpoint100GetHandler } from '../controllers/domain.controller';

// Initialize 
secrets.get('secretAlpha');

module.exports.handler = withHttpMiddleware(async event => {
  const arbitraryValue = event.arbitraryProperty;
  const password = await secrets.get('secretAlpha');
  await endpoint100GetHandler(arbitraryValue, password);
})
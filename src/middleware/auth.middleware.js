const createError = require('http-errors');
const axios = require('axios');
const logger = require('../services/logger.service');

const TOKEN_ISSUER_URL = 'https://arbitrary.tokenissuer.local/v1/userinfo';
const SERVICE_TO_SERVICE_SCP = 'arbitrary_service_to_service_identifier';
const SERVICE_TO_SERVICE_USER = 'System Event';
const SERVICE_TO_SERVICE_ROLE = 'arbitrary_system_role';

/**
 * authMiddleWare - Authenticates user and attaches currentUser object to
 * handler context
 * @returns {Object} - middy middlewareObject
 */
function authMiddleWare() {
  return {
    before: async handler => {
      try {
        const { event, context } = handler;
        const bearerToken = event.headers.Authorization || '';
        const token = /^Bearer\s(.*)/.exec(bearerToken)[1];
        const validToken = validateToken(token);
        if (validToken.claims.scp.includes(SERVICE_TO_SERVICE_SCP)) {
          context.userInfo = {
            appuser: { name: SERVICE_TO_SERVICE_USER },
            groups: [SERVICE_TO_SERVICE_ROLE],
          };
        } else {
          // Obtain the user's info from the user store
          const { data: userInfo } = await axios.get(
            TOKEN_ISSUER_URL,
            {
              headers: { Authorization: bearerToken },
            }
          );
          context.userInfo = userInfo;
        }
      } catch (err) {
        throw new createError.Unauthorized();
      }
    },
  };
}

function validateToken(token) {
  // TODO: implement this with whatever authorization service is used for the service
  logger.debug(token);
  return {
    claims: {
      scp: ['something'],
    },
  };
}

module.exports = authMiddleWare;

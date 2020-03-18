const AWS = require('aws-sdk');
const env = require('./env');

AWS.config.region = env.AWS_REGION;
const credentials = new AWS.SharedIniFileCredentials({ profile: env.AWS_PROFILE });
AWS.config.credentials = credentials;

module.exports = AWS;
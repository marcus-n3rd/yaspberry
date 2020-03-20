import AWS from 'aws-sdk';
import env from './env';

AWS.config.region = env.AWS_REGION;
const credentials = new AWS.SharedIniFileCredentials({ profile: env.AWS_PROFILE });
AWS.config.credentials = credentials;

export default AWS;

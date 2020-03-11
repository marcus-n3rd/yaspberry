/* Infrastructure specific, should not contain any business logic */
// import * as AWS from 'aws-sdk';
import logger from '../services/logging.service';

// const params = {};
// const dynamo = new AWS.DynamoDB(params);

export const getEntity = entity => {
  logger.debug('docClient:', 'get entity', entity);
  // return await dynamo.getItem(entity).promise();
  return {
    something: 'Unique',
  };
};

export const putEntity = entity => {
  logger.debug('docClient:', 'putting entity', entity);
  // return await dynamo.putItem(entity).promise();
};

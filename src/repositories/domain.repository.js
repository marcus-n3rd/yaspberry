/* Infrastructure specific, should not contain any business logic */
import AWS from 'aws-sdk';
import env from '../config/env';
import logger from '../services/logging.service';

const config = {
  region: env.region,
};
const database = new AWS.DynamoDB.DocumentClient(config);

export const getEntity = id => {
  logger.debug('docClient: get entity:', { id });

  const params = {
    TableName: process.env.DATA_TABLE,
    KeyConditions: {
      PK: {
        AttributeValueList: [id],
        ComparisonOperator: 'EQ',
      },
    },
  };
  
  const result = await database.query(params).promise();

  return result.Items.reduce((acc, cur) => {
    acc.PK = cur.PK;
    acc[cur.SK] = cur;
  }, {});
};

export const putEntity = entity => {
  logger.debug('docClient: put entity:', { entity });

  const params = {
    TableName: process.env.DATA_TABLE,
    Item: entity,
  };
  
  await database.query(params).promise();

  return entity;
};

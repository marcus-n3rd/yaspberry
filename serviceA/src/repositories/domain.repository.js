// import * as AWS from 'aws-sdk';

// const params = {};
// const dynamo = new AWS.DynamoDB(params);

export const getEntity = entity => {
  console.log('docClient:', 'get entity', entity);
  // return await dynamo.getItem(entity).promise();
};

export const putEntity = entity => {
  console.log('docClient:', 'putting entity', entity);
  // return await dynamo.putItem(entity).promise();
};

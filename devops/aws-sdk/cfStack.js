import env from './env';
import AWS from './aws';

const config = {
  apiVersion: '2010-05-15',
};
const CF = new AWS.CloudFormation(config);

const params = {
  StackName: env.STACK_NAME,
};

let stack;

const initialize = async () => {
  if (typeof stack === 'undefined') {
    const results = await CF.describeStacks(params).promise();
    stack = results.Stacks[0];
    if (!stack) {
      throw new Error(`Unable to find stack ${env.STACK_NAME}`);
    }
  }
}

export const getOutputValue = async key => {
  await initialize();
  return stack.Outputs.find(output => {
    return output.OutputKey === key;
  }).OutputValue;
};

export const getServiceEndpoint = async () => {
  return getOutputValue('ServiceEndpoint');
};

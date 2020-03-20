const env = {
  SERVICE: process.env.SERVICE || 'domain-service',
  STAGE: process.env.STAGE || 'fail',
  AWS_REGION: process.env.AWS_REGION || 'us-west-2',
  AWS_PROFILE: process.env.AWS_PROFILE || 'fail',
}

env.STACK_NAME = `${env.SERVICE}-${env.STAGE}`;

export default Object.freeze(env);

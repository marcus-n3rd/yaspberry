const configStage = ['dev', 'staging', 'prod'].includes(process.env.STAGE_NAME) ? process.env.STAGE_NAME : 'dev';

export default envConfig = Object.freeze({
  stageName: process.env.STAGE_NAME,
  configStage,
  logLevel: process.env.LOG_LEVEL,
  releaseVersion: process.env.RELEASE_VERSION,
  // MAB: up = common, down = AWS specific
  region: process.env.AWS_REGION,
  stackType: 'aws',
  // MAB: service specific
  // MAB: lambda specific
});

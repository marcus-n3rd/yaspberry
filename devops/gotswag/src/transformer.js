const HANDLER_BASE_PATH = 'src/_lambda-handlers/';

export default (endpoints, auth, definitions) => {
  const functions = {};
  const resources = {};

  Object.keys(endpoints).forEach(endpoint => {
    const endpointData = endpoints[endpoint];
    const lambda = lambdaName(endpoint, endpointData);
    const lambdaDef = lambdaDefinition(lambda, endpoint, endpointData);
    functions[lambda] = lambdaDef;
  });

  return {
    functions,
    resources: {
      Resources: resources,
    },
  };
};

export const lambdaName = (endpoint, endpointData) => {
  const parts = endpoint.split('/').slice(1);
  const first = parts.shift();
  const rest = parts.map(part => {
    const clean = part.replace(/[^a-zA-Z0-9_]/g, '');
    const capital = clean.slice(0,1).toUpperCase();
    return `${capital}${clean.slice(1)}`;
  }).join('');
  return `${first}${rest}`;
};

export const lambdaDefinition = (name, endpoint, endpointData) => {
  const definition = {
    handler: `${HANDLER_BASE_PATH}${name}.handler`,
    events: [
      {
        http: {
          path: endpointData.path,
          method: endpointData.method,
        },
      },
    ],
  };
  return definition;
};

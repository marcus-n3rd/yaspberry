import _ from 'lodash';

const HANDLER_BASE_PATH = 'src/_lambda-handlers/';

export default (endpoints, auth, definitions) => {
  const functions = {};
  const resources = {};

  Object.keys(endpoints).forEach(endpoint => {
    const endpointData = endpoints[endpoint];
    const lambda = lambdaName(endpoint);
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

export const lambdaName = endpoint => {
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
  const parameters = lambdaParameters(endpointData);
  if (Object.keys(parameters).length) {
    _.set(definition, `events[0].http.request.parameters`, parameters);
  }
  return definition;
};

export const lambdaParameters = data => {
  const params = {};
  data.parameters.forEach(parameter => {
    const name = parameter.name;
    switch (parameter.in) {
      case 'path':
        _.set(params, `paths.${name}`, true);
        break;
    }
  });
  return params;
};

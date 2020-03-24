export default swagger => {
  const endpoints = {};
  const auth = {};
  const definitions = {};

  Object.keys(swagger.paths).forEach(path => {
    const pathData = swagger.paths[path];
    Object.keys(pathData).forEach(option => {
      const endpointData = pathData[option];
      const endpoint = `${path}${option.toUpperCase()}`;
      endpointData.method = option;
      endpoints[endpoint] = endpointData;
    });
  });

  Object.keys(swagger.securityDefinitions).forEach(name => {
    const definition = swagger.securityDefinitions[name];
    auth[name] = definition;
  });

  Object.keys(swagger.definitions).forEach(name => {
    const definition = swagger.definitions[name];
    definitions[`#/definitions/${name}`] = definition;
  });

  return {
    endpoints,
    auth,
    definitions,
  };
};

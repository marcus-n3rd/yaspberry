import lodash from 'lodash';
import { fromYamlFile, toYamlFile } from './src/yaml';
import collector from './src/collector';
import transformer from './src/transformer';

(async () => {
  const serverless = fromYamlFile('./serverless.default.yml');
  const swagger = fromYamlFile('./openapi.yml');

  const {
    endpoints,
    auth,
    definitions,
  } = collector(swagger);

  const {
    functions,
    resources,
  } = transformer(endpoints, auth, definitions);

  lodash.merge(serverless.functions, functions);
  lodash.merge(serverless.resources, resources);

  toYamlFile(serverless, './serverless.yml');
})();

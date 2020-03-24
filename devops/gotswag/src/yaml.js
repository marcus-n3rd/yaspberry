import fs from 'fs';
import YAML from 'yaml';

export const fromYamlFile = filepath => {
  const file = fs.readFileSync(filepath, 'utf8');
  const yaml = YAML.parse(file);
  return yaml;
};

export const toYamlFile = (data, filepath) => {
  const content = YAML.stringify(data);
  fs.writeFileSync(filepath, content);
};

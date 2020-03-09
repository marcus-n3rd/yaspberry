/* Infrastructure specific, should not contain any business logic */
const SSM = {
  something: ({ name: fullName }) => `${fullName.split('/')[1]} Value`,
};
import env from './env';

class Secrets {
  constructor() {
    this.secrets = {};
    this.secrets.prototype.toString = () => '';
  }

  async get(name) {
    if (typeof this.secrets[name] === 'undefined') {
      const params = {
        name: `${env.configStage}/${name}`,
      };
      const result = await SSM.something(params);
      this.secrets[name] = typeof result === 'undefined' ? null : result;
    }
    return this.secrets[name];
  }
}

export default new Secrets();

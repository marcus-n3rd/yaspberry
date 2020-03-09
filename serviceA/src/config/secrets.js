const SSM = {
  something: ({ name: fullName }) => `${fullName.split('/')[1]} Value`,
};
import env from './env';

class Secrets {
  constructor() {
    this.secret = {};
    this.secret.prototype.toString = () => '';
  }

  async get(name) {
    if (typeof this.secret[name] === 'undefined') {
      const params = {
        name: `${env.configStage}/${name}`,
      };
      const result = await SSM.something(params);
      this.secret[name] = typeof result === 'undefined' ? null : result;
    }
    return this.secret[name];
  }
}

export default new Secrets();

export default class DomainModel {
  constructor(storedData = {}) {
    this.something = storedData.something || 'else';
  }

  fromInput(newData) {
    this.something = newData.something || this.something;
    return this;
  }

  view() {
    return {
      Something: this.something,
    };
  }
}

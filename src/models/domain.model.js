export default class DomainModel {
  constructor(storedData = {}) {
    let convertedData = {};
    if (storedData.PK && storedData.SK) {
      // Data from database
      convertedData = DomainModel.fromDatabase(storedData);
    } else {
      // Data from user
      convertedData = DomainModel.fromInput(storedData);
    }
    Object.keys(convertedData).forEach(key => {
      this[key] = convertedData[key];
    });
  }

  view() {
    return {
      id: this.id,
      type: this.type,
    };
  }

  toDatabase() {
    return {
      PK: this.id,
      SK: '_',
      type: this.type,
    }
  }

  static fromDatabase(data) {
    return {
      id: data.PK,
      type: data.type,
    };
  }

  static fromInput(data) {
    return {
      id: data.id,
      type: data.type,
    }
  }
}

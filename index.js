const fs = require('fs');

class RandomPostalCode {
  constructor() {
    this.postalCodes = fs.readFileSync('./postalcode.txt', 'utf8').split('\n');
  }

  getRandomPostalCode() {
    const randomIndex = Math.floor(Math.random() * this.postalCodes.length);
    return this.postalCodes[randomIndex];
  }
}

module.exports = RandomPostalCode;

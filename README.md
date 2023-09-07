Random UK Postal Code 

Installation

npm install uk-random-postalcode


Usage

const ukPostalCode = require('uk-random-postalcode');
const randomPostalCode = new ukPostalCode();

const code = randomPostalCode.getRandomPostalCode();
console.log(`Random Postal Code: ${code}`);
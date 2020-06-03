var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number1 = parseInt(lines[0]);
const number2 = parseInt(lines[1]);
const prod = number1*number2;
console.log('PROD = '+ prod);
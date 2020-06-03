var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const w1 = 3.5;
const w2 = 7.5;
const number1 = parseFloat(lines[0]);
const number2 = parseFloat(lines[1]);

const result = (w1 * number1 + w2 * number2) / (w1+w2);
console.log('MEDIA = '+ result.toFixed(5));



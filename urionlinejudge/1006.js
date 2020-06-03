var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const w1 = 2;
const B = parseFloat(lines[1]);
const w2 = 3;
const C = parseFloat(lines[2]);
const w3 = 5;
const average = ( A * 2 + B * 3 + C * w3 ) / (w1 + w2 + w3);
console.log('MEDIA = ' + average.toFixed(1));



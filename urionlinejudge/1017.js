var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const z1 = 12;
const x1 = parseInt(lines[0]);
const y1 = parseInt(lines[1]);
const prod = (x1*y1)/z1;
console.log(prod.toFixed(3));

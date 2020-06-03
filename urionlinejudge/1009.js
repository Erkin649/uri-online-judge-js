var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const na = parseInt(lines[0]);
const S = parseFloat(lines[1]);
const sale = parseFloat(lines[2]);
const prod = sale * 0.15;
const final = prod + S;

console.log('TOTAL = R$ '+ final.toFixed(2));

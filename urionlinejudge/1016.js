var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const distance = parseInt(lines[0]);
const prod = distance * 2;
console.log(prod+' minutos');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const pi =  3.14159;
const radius = parseFloat(lines[0]);
const area = pi * radius * radius;
console.log('A=' + area.toFixed(4));

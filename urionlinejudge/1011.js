var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const R = parseInt(lines[0]);
const pi = 3.14159;
const vol = 4/3 * pi * R * R * R;
console.log('VOLUME = ' + vol.toFixed(3));


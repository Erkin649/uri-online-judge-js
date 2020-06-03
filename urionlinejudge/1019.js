var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const num = parseInt(lines[0]);
const hour = Math.trunc(num /3600);//556/60
const minut = num - (hour*3600);
const minute = Math.trunc(minut/60);
const secund = minut - (minute*60);
const secunde = Math.trunc(secund);
console.log(`${hour}:${minute}:${secunde}`);
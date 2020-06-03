var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
const a = parseInt(lines[0]);
const b = parseInt(lines[1]);
let c;
if (a > b) {   // 16 2 = 10
  c = (24 -(a - b));
} else if (a < b) {  // 2 16 = 14
  c = ((b - a));
} else if (a === b) {
  c = 24;
}
console.log(`O JOGO DUROU ${c} HORA(S)`);
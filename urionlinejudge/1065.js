var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let numbers = 0;
for (i=0; i < 5; i++) {
  if (lines[i] % 2 === 0 ) {
    numbers+=1;
  }
}
console.log(`${numbers} valores pares`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let numbers = 0;
let summ = 0;
let average = 0;
for (i=0; i < 6; i++) {
  if ((parseFloat(lines[i])) > 0 ) {
    numbers++;
    summ += parseFloat(lines[i]);
    average = summ / numbers; 
  }
}
console.log(`${numbers} valores positivos`);
console.log(`${average.toFixed(1)}`);
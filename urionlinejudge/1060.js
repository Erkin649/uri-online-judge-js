var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let numbers = 0;
for (i=0; i<6; i++) {
  if (lines[i]>0 ) {
    numbers+= 1;
  } 
}
console.log(`${numbers} valores positivos`);
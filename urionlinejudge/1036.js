var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numbers = lines[0].split(' ');
const A = parseFloat(numbers[0]);
const B = parseFloat(numbers[1]);
const C = parseFloat(numbers[2]);
let D = B*B-4*A*C;
let result;
if (A === 0 || D < 0) {
  result = `Impossivel calcular`;
} else if (A !== 0 && D >= 0){
  let x1 = (-B + Math.sqrt(D)) / (2*A);
  let x2 = (-B - Math.sqrt(D))/ (2*A);
  result = `R1 = ${(x1).toFixed(5)}\nR2 = ${(x2).toFixed(5)}`;
}
console.log(result);
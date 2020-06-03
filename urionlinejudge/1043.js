var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines[0].split(' ');
const a = parseFloat(number[0]);
const b = parseFloat(number[1]);
const c = parseFloat(number[2]);
let area = ((a+b)*c)/2;
let per = a + b + c;
let result;
  if (a + b > c && a + c > b && b + c > a) {
    result =`Perimetro = ${per.toFixed(1)}`;
  } else {
    result = `Area = ${area.toFixed(1)}`; 
  }
console.log(`${result}`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numbers = lines[0].split(' ');
const A = parseInt(numbers[0]);
const B = parseInt(numbers[1]);
const C = parseInt(numbers[2]);
const D = parseInt(numbers[3]);
let message;
if ((B > C && D > A ) && (C + D > A + B) && ( C > 0 && D > 0) && (A % 2 === 0) ) {
    message = "Valores aceitos";
    } else {
    message = "Valores nao aceitos";
    }
console.log(message);
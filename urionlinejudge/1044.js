var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines[0].split(' ');
const a = parseInt(number[0]);
const b = parseInt(number[1]);
let result;
     if (a%b === 0 || b%a===0){
         result = `Sao Multiplos`; 
      }else {
         result = `Nao sao Multiplos`;  
      }
console.log(result);
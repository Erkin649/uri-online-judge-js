var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines[0].split(' ');
const X = parseFloat(number[0]);
const Y = parseFloat(number[1]);
let message;
   if (X > 0 && Y > 0) {
    message = 'Q1';   
    } else if (X < 0 && Y > 0) {
    message = 'Q2';   
    } else if (X < 0 && Y < 0) {
    message = 'Q3';    
    } else if (X > 0 && Y < 0) {
    message = 'Q4';  
    } else if (X === 0 && Y === 0){
    message = `Origem`;
    } else if (X === 0){
    message = 'Eixo Y'; 
    } else if (Y === 0) {
    message = 'Eixo X';    
    } 
console.log(message);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseFloat(lines[0]);
let message;
if ( number > 75 && number <= 100) {
    message = 'Intervalo (75,100]';
    } else if (number > 50 && number <= 75) {
    message = 'Intervalo [50,75]';
    } else if (number > 25 && number <= 50){
    message = 'Intervalo (25,50]';
    }else if (number >= 0 && number <= 25) {
    message = 'Intervalo [0,25]';          
    } else {
    message = 'Fora de intervalo';
    }
console.log(message);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseFloat(lines[0]);
let message;
   if ( number < 2000.01 && number > 0) {
        message = 'Isento';
      } else if (number >= 2000.01 && number <= 3000.00) {
        message = ((number-2000)*0.08).toFixed(2);
      } else if ( number >= 3000.01 && number <= 4500) {
        message = (((number -3000)*0.18)+80).toFixed(2);
      } else if ( number >4500 ) {
        message = (((number - 4500)*0.28)+ 350).toFixed(2);
      }
if (message === `Isento`) {
  console.log(message);
} else {
  console.log(`R$ ${message}`);
}
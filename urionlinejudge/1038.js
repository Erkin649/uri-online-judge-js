var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines[0].split(' ');
const prodcode = parseInt(number[0]);
const quantity = parseInt(number[1]);
let message;
    switch (prodcode) {
            case 5:
            message = quantity * 1.50;
            break;
            case 4:
            message = quantity * 2.00;
            break;
            case 3:
            message = quantity * 5.00;
            break;
            case 2:
            message = quantity * 4.50;
            break;
            case 1: 
            message = quantity * 4.00;
            break; 
          }
      console.log("Total: R$ " + message.toFixed(2));
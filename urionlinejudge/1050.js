var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseInt(lines[0]);
let message;
switch (number) {
        case 61:
        message = 'Brasilia';
        break;
        case 71:
        message = 'Salvador';
        break;
        case 11:
        message = 'Sao Paulo';
        break;
        case 21:
        message = 'Rio de Janeiro';
        break;
        case 32:
        message = 'Juiz de Fora';
        break;
        case 19:
        message = 'Campinas';
        break;
        case 27:
        message = 'Vitoria';
        break;
        case 31:
        message = 'Belo Horizonte';
        break;
        default:
        message = 'DDD nao cadastrado';
        }
console.log(message);
  

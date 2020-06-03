var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let alcohol = 0;
let gasoline = 0;
let diesel = 0;
for (i = 0; i < lines.length; i++){
    if(parseInt(lines[i]) === 1){
        alcohol++;
    } else if(parseInt(lines[i]) === 2 ){
        gasoline++;
    } else if(parseInt(lines[i]) === 3){
        diesel++;
    } else if(parseInt(lines[i]) === 4){
        break;
    }
}
console.log(`MUITO OBRIGADO`);
console.log(`Alcool: ${alcohol}`);
console.log(`Gasolina: ${gasoline}`);
console.log(`Diesel: ${diesel}`);

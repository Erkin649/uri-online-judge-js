var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (i = 0; i < lines.length; i++){
let number = lines[i].split(' ');
    if(parseInt(number[0]) > parseInt(number[1])){
        console.log('Decrescente');
    } else if(parseInt(number[0]) < parseInt(number[1])){
        console.log('Crescente');
    } else{
        console.log('');
    }
}
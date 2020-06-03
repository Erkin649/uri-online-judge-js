var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let i =2;
while (i <= 100) {
    if( i%2 === 0){
        console.log(i);
    }
    i = i+2;
} 

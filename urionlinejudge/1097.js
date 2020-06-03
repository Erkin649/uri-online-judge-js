var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (k=1; k<10; k+=2) {
    for(i=k+6;i>=k+4;i-=1 ){
     console.log(`I=${k} J=${i}`);
    }   
 }
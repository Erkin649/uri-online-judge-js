var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for(j=0, k=1; j < 4, k < 10; j++, k+=2) {
    for (i=7, l=0; i > 4, l<3; i-=1, l++){
        console.log(`I=${k} J=${i}`);
    }
}
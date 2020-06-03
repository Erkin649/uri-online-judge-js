var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (i=1,j=60; i <= 40,j>=0; i+=3,j-=5 ) {
    console.log(`I=${i} J=${j}`);
}

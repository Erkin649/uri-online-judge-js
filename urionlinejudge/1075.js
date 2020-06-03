var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = lines[0];
for (i=1; i <= 10000; i++) {
    if(i % N == 2) {
        console.log(i);
    }
}
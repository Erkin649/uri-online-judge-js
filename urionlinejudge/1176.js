var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let n = parseInt(lines[0]);
for (i = parseInt(lines[1]); i < n; i++){
        console.log(`Fib(${i}) = 0`);
}
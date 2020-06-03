var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let sum = 0;

if (x < y) {
    for (i = x + 1; i < y; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
} else {
    for (i = y + 1; i < x; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
}

console.log(sum);
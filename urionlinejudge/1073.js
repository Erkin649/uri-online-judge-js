var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let number = parseInt(lines[0]);

for (i = 2; i <= number; i++) {
    if (number % 2 === 0 || number % 2 !== 0) {
        console.log(`${i}^${2} = ${i*i}`);
        i++;
    }
}
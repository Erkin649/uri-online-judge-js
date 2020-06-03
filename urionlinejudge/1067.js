var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
for (i =1; i <= lines[0]; i++) {
    if (lines[0] % 2 === 0 || lines[0] % 2 !== 0) {
        console.log(i);
        i++;
    } 
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i < lines.length; i++){
        console.log(`N[${i}] = ${parseInt(lines[lines.length - i - 1])}`);
}
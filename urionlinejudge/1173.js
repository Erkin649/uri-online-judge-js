var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
lines.forEach((lines, index) => {
    let d = parseInt(lines[0]);
    for(i=1; i < d; i++) {
        d = lines[i];
    };
console.log(`N[${index}] = ${d}`);
});
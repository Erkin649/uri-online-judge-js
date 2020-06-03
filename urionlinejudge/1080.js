var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let biggest = 0;
let location = 0;
lines.forEach((lines, index) => {
    const d = parseInt(lines);
    if(d > biggest) {
        biggest = lines;
        location = index + 1;
    };
});
console.log(biggest);
console.log(location);

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines[0]);
for(i=1; i <=  N; i++){
    let square = i*i;
    let cube = square * i;
    console.log(`${i} ${square} ${cube}`);
}
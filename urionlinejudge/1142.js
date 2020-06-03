var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines[0]);
for (i = 1; i <= N*4; i++){
    if(i % 4 === 0 ){
        console.log("PUM");
    } else{
        console.log(i);
    }
}
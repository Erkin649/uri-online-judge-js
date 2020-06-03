var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const t = parseFloat(lines[0]).toFixed(4);
let bigNumber = new Array(100);
bigNumber[0] = t;
for (i = 0; i < 100; i++){
    if (i === 0){
        bigNumber[0] = t;
    } else {
        bigNumber[i] = (bigNumber[i - 1]/2).toFixed(4);
    }
    console.log(`N[${i}] = ${bigNumber[i]}`);
}
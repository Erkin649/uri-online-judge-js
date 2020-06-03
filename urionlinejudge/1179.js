var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let par = new Array(5);
let impar = new Array(5);

for(i=0; i<= lines.length; i++){
    if(lines[i] % 2 === 0){
        console.log(`${lines[i]} = even number`)
        par.fill(0, parseInt(lines[i]), 4);
    } else {
        console.log(`${lines[i]} = odd number`)
        impar.fill(0, parseInt(lines[i]), 4)
    }
}
console.log(par);
console.log(impar);
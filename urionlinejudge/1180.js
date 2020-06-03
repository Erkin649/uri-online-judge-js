var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const numbers = lines[1].split(' ');
let smallest = 0;
let location = 0;
numbers.forEach((numbers, index) => {
    const d = parseInt(numbers);
    if(d < smallest) {
        smallest = d;
        location = index;
    };
});
console.log(`Menor valor: ${smallest}`);
console.log(`Posicao: ${location}`);

// let i, l, min, position;
// min = Number.POSITIVE_INFINITY
// for (i = 0, l = numbers.length; i < l; i++) {
//   min = Math.min(min, numbers[i]);
//   position = min[i];
// }
// console.log(`Menor valor: ${min}\nPosicao: ${position}`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const N = parseInt(lines[0]);
for(i = 0; i < N; i++){
    let numbers = lines[i + 1].split(" ");
    let division = (parseInt(numbers[0]) / parseInt(numbers[1])).toFixed(1);
    if(parseInt(numbers[1]) === 0){
        console.log(`divisao impossivel`);
    } else{
        console.log(division);
    }
}
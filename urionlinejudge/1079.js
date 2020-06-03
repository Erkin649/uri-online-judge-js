const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const N = parseInt(lines[0]);
for (let i = 0; i < N; i++){
    const parts = lines[i + 1].split(" ");
    const average = (parseFloat(parts[0])*2+parseFloat(parts[1])*3+parseFloat(parts[2])*5) / 10;
    console.log(average.toFixed(1));
}
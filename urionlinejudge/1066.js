var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let even = 0;
let odd = 0;
let positive = 0;
let negative = 0;
for (i=0; i < 5; i++) {
  if ((parseInt(lines[i])) % 2 === 0) {
    even++;
  }
  if ((parseInt(lines[i])) % 2 !== 0) {
    odd++;
  }
  if ((parseInt(lines[i])) > 0) {
    positive++;
  }
  if ((parseInt(lines[i])) < 0) {
    negative++;
  }
}
console.log(`${even} valor(es) par(es)`);
console.log(`${odd} valor(es) impar(es)`);
console.log(`${positive} valor(es) positivo(s)`);
console.log(`${negative} valor(es) negativo(s)`);
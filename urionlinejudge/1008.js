var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const id = lines[0];
const hours = parseInt(lines[1]);
const salary = parseFloat(lines[2]);
const totalSalary= salary * hours;
console.log(`NUMBER = ${id}\n`+ 
`SALARY = U$ ${totalSalary.toFixed(2)}`);
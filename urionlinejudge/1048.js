var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const salary = parseFloat(lines[0]);
let newSalary;
let earnedMoney;
let inPercentage;
if (salary > 0 && salary < 400.01) {
   earnedMoney = (salary * 0.15).toFixed(2);
   inPercentage = `15 %`;
   newSalary = ((salary * 0.15) + salary).toFixed(2);
} else if (salary >= 400.01 && salary < 800.01) {
   earnedMoney = (salary * 0.12).toFixed(2);
   inPercentage = `12 %`;
   newSalary = ((salary * 0.12) + salary).toFixed(2);
} else if (salary >= 800.01 && salary < 1200.01 ) {
   earnedMoney = (salary * 0.10).toFixed(2);
   inPercentage = `10 %`;
   newSalary = ((salary * 0.10) + salary).toFixed(2);
} else if (salary >= 1200.01 && salary <= 2000.00) {
   earnedMoney = (salary * 0.07).toFixed(2);
   inPercentage = `7 %`;
   newSalary = ((salary * 0.07) + salary ).toFixed(2);
} else {
   earnedMoney = (salary * 0.04).toFixed(2);
   inPercentage = `4 %`;
   newSalary = ((salary * 0.04) + salary).toFixed(2);
}
console.log(`Novo salario: ${newSalary}\nReajuste ganho: ${earnedMoney}\nEm percentual: ${inPercentage}`);
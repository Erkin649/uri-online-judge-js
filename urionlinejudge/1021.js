var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const monetaryValue = parseFloat(lines[0]);
const wholePart = Math.trunc(monetaryValue);

const notes100 = Math.trunc(wholePart / 100);
const notes50 = Math.trunc(wholePart % 100 / 50);
const notes20 = Math.trunc(wholePart % 100 % 50 / 20);
const notes10 = Math.trunc(wholePart % 100 % 50 % 20 / 10);
const notes5 = Math.trunc(wholePart % 100 % 50 % 20 % 10 / 5);
const notes2 =Math.trunc(wholePart % 100 % 50 % 20 % 10 % 5 / 2);
const restcoins1count = wholePart % 100 % 50 % 20 % 10 % 5 % 2;

const rest = Math.trunc((monetaryValue - wholePart) * 100);

const coins05count = Math.trunc(rest / 50); 
const coins25count = Math.trunc(rest % 50 / 25); 
const coins01count = Math.trunc(rest % 50 % 25 / 10);
const coins005count = Math.trunc(rest % 50 % 25 % 10 / 5); 
const coins001count = rest % 50 % 25 % 10 % 5; 
console.log(`NOTAS:
${notes100} nota(s) de R$ 100.00
${notes50} nota(s) de R$ 50.00
${notes20} nota(s) de R$ 20.00
${notes10} nota(s) de R$ 10.00
${notes5} nota(s) de R$ 5.00
${notes2} nota(s) de R$ 2.00
MOEDAS:
${restcoins1count} moeda(s) de R$ 1.00
${coins05count} moeda(s) de R$ 0.50
${coins25count} moeda(s) de R$ 0.25
${coins01count} moeda(s) de R$ 0.10
${coins005count} moeda(s) de R$ 0.05
${coins001count} moeda(s) de R$ 0.01`);
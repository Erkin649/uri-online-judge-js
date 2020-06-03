var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const notes = parseInt(lines[0]);
const notes100 = Math.trunc(notes / 100);
const notes50  = Math.trunc(notes % 100 / 50);
const notes20  = Math.trunc(notes % 100 % 50 / 20);
const notes10  = Math.trunc(notes % 100 % 50 % 20 / 10);
const notes5   = Math.trunc(notes % 100 % 50 % 20 % 10 / 5);
const notes2   = Math.trunc(notes % 100 % 50 % 20 % 10 % 5 / 2);
const notes1   = notes % 100 % 50 % 20 % 10 % 5 % 2;

console.log(`${notes}
${notes100} nota(s) de R$ 100,00
${notes50} nota(s) de R$ 50,00
${notes20} nota(s) de R$ 20,00
${notes10} nota(s) de R$ 10,00
${notes5} nota(s) de R$ 5,00
${notes2} nota(s) de R$ 2,00
${notes1} nota(s) de R$ 1,00`);
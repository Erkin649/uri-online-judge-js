var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const days = parseInt(lines[0]);

const years = Math.trunc(days /365);
const month = Math.trunc(days%365/30);
const restDays = days%365%30;

console.log(
`${years} ano(s)\n` +
`${month} mes(es)\n`+
`${restDays} dia(s)`
);

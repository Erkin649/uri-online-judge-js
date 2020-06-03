var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const elems = lines[0].split(' '); 
const a = parseInt(elems[0]);
const b = parseInt(elems[1]);
const s = parseInt(elems[2]);
const max1 =(a+b+Math.abs(a-b))/2;
const max2 =(s+max1 + Math.abs(s-max1))/2;
console.log(max2+ ' eh o maior');
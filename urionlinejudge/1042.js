var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines[0].split(' ');
const a = parseInt(number[0]);
const b = parseInt(number[1]);
const c = parseInt(number[2]);
let first;
let second;
let third;
if(a >= b && a >= c){
    first = a;
    if(b >= c){
        second = b;
        third  = c;
    } else{
        second = c;
        third  = b;
    }
} else if(b >= a && b >= c){
    first = b;
    if(a >= c){
        second = a;
        third  = c;
    } else{
        second = c;
        third  = a;
    }
} else if(c >= b && c >= a){
       first = c;
       if(b >= a){
        second = b;
        third  = a;
    } else{
        second = a;
        third  = b;
    }
}
console.log(`${third}\n${second}\n${first}\n\n${a}\n${b}\n${c}`);

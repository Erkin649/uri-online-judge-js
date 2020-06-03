var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let count = parInt(lines[0]);
let inside = 0;
let outside = 0;
for (i = 1; i <= count; i++){
    if( lines[i] >= 10 && lines[i] <=20){
        inside++;
    } else {
        outside++;
    }
}
console.log(inside);
console.log(outside);
/*
for (i=0; i <= limit; i++) {
    let number = parseInt(lines.shift());
    if (number > -10000 && number < 10000) {
        array[i] = number;
        limit++;
    }else {
        array.length--;
    }
}
for (j=0; j <= array.length; j++) {
    if (array[j] >= 10 && array[j] <= 20) {
        inside++;
    } else {
        out++;
    }
}

console.log(`${inside} in\n${out} out`);*/
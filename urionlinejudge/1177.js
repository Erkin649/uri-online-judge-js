var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const t = parseInt(lines[0]);
//const k = t - 1;
let i = 0;
for (j = 0; j < 1000; j++){
    if(i === t) i = 0;
    console.log(`N[${j}] = ${i}`);       
    i++;
}
//const k = t - 1;
// for (j = 0; j < t; j++){
//         for (i = 0;   i < 1000; i++){
//                 console.log(`N[${i}] = ${j}`);     
//         }  
// }

// let i = 0;
// do {
//     for (j=0; j < t; j++ ){
//         console.log(`N[${i}] = ${j}`);
//     }
//     i++;
// } while( i < 1000)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines[0]);
for(i=1; i <=  N; i++){
    for(j = i; j <= i; j++){
        let k = (j * i);
        let l = (k * j);
        console.log(`${j} ${k} ${l}`);
        console.log(`${j} ${k+1} ${l+1}`);
    }
}

// for (int i = 1; i <= N; i++) {
//     for (int j = i, k = (j* i), l = (k * j);j == i ;j++) {
//         System.out.print(j+" "+k+" "+l+"\n");
//         System.out.print(j+" "+(k+1)+" "+(l+1)+"\n");
//     }
// }
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const N = parseInt(lines[0]);
let Coelho = 0;
let Rato = 0;
let Sapo = 0;
for(i =0; i < N; i++ ){
    const animals = lines[i + 1].split(" ");
    if(animals[1] == "C"){
        Coelho+=parseInt(animals[0]);
    } else if(animals[1] == "R"){
        Rato+=parseInt(animals[0]);
    } else if(animals[1] == "S"){
        Sapo+=parseInt(animals[0]);
    }
}
let total = Coelho + Rato + Sapo;
let rabbit = ((Coelho / total) * 100).toFixed(2);
let rat = ((Rato / total) * 100).toFixed(2);
let frog = ((Sapo / total) * 100).toFixed(2);
console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${Coelho}`);
console.log(`Total de ratos: ${Rato}`);
console.log(`Total de sapos: ${Sapo}`);
console.log(`Percentual de coelhos: ${rabbit} %`);
console.log(`Percentual de ratos: ${rat} %`);
console.log(`Percentual de sapos: ${frog} %`);


// let Coelho = 0;
// let Rato = 0;
// let Sapo = 0;
// lines.forEach((lines, index) => {
//     const N = parseInt(lines[0]);
//     if(lines[i][1] === 'C'){
//         Coelho += parseInt(lines[i][0]);
//     } else if (lines[i][1] === 'R'){
//         Rato+=parseInt(lines[i][0]);
//     } else if (lines[i][1] === 'S'){
//         Sapo+=parseInt(lines[i][0]);
//     }
// })
// console.log(Coelho);
// console.log(Sapo);
// console.log(Rato);
/*let totalc = Sapo +  Rato + Coelho;
let mc = 100 / totalc * Coelho;
let ms = 100 / totalc * Sapo;
let mr = 100 / totalc * Rato;*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = lines[0].split(' ');
const N1 = parseFloat(number[0]);
const N2 = parseFloat(number[1]);
const N3 = parseFloat(number[2]);
const N4 = parseFloat(number[3]);
const N5 = parseFloat(lines[1]);
const average = ((N1 * 2 + N2 * 3 + N3 * 4 + N4 *1) / 10);
const average2 = (average + N5) / 2;
if(average >= 7.0){
      console.log(`Media: ${(average).toFixed(1)}\nAluno aprovado.`);
      }  else if (average >= 5.0 && average <= 6.9) {
      if(average2 >= 5.0){
            console.log(`Media: ${(average).toFixed(1)}\nAluno em exame.`);
            console.log(`Nota do exame: ${N5}`);
            console.log(`Aluno aprovado.`);
            console.log(`Media final: ${(average2).toFixed(1)}`);
      } else{
            console.log(`Media: ${(average).toFixed(1)}\nAluno em exame.`);
            console.log(`Nota do exame: ${N5}`);
            console.log(`Aluno reprovado.`);
            console.log(`Media final: ${(average2).toFixed(1)}`);   
      }  
      } else if(average < 5.0) {
      console.log(`Media: ${(average).toFixed(1)}\nAluno reprovado.`);
}
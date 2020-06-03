var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let scores = 0;
lines.filter(function(score){
    if(parseFloat(score) <= 10.0 && parseFloat(score) > 0){
        scores+=parseFloat(score);
    } else {
        console.log(`nota invalida`)
    }
})
console.log(`media = ${(scores/2).toFixed(2)}`);

/*for(i=0; i < lines.length; i++){
    if(parseFloat(lines[i]) <= 10.0 && parseFloat(lines[i]) > 0){
        scores+= parseFloat(lines[i]);
    } else{
        console.log(`nota invalida`);
    }
}
console.log(`media = ${(scores/2).toFixed(2)}`);*/

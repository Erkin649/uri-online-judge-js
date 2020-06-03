var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
const hour    = parseInt(lines[0]);
const minute  = parseInt(lines[1]);
const hour1   = parseInt(lines[2]);
const minute1 = parseInt(lines[3]);
let finalHour = hour1 - hour;
let finalMinute = minute1 - minute;
if (finalHour === 0 ) {   // 7 7 7 7
  finalHour = 24;
} else if (finalMinute < 0) { //6:20 8:5
  finalMinute = 60 + (minute1 - minute);
  finalHour = hour1 - hour - 1;
}else if(finalHour < 0 ) {   // 16 14 
  finalHour = 24 + (hour1 - hour);
} else if (finalHour > 0 || minute < minute1 ) { // 16:10 18:5
  finalHour = hour1 - hour;
  finalMinute = minute1 - minute;
} else if (finalHour > 24) {
  finalHour = hour1 - hour;
  finalMinute = 60 + (minute1 - minute);
}
console.log(`O JOGO DUROU ${finalHour} HORA(S) E ${finalMinute} MINUTO(S)`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const days = (lines[0]);
const hours = (lines[1]);
const days2 = (lines[2]);
const hours2 = (lines[3]);
summa(days, hours, days2, hours2);

function summa(days, hours, days2, hours2) {
    let hours1 = parseInt(hours.split(' ')[0]);
    let minut1 = parseInt(hours.split(' ')[2]);
    let second1 = parseInt(hours.split(' ')[4]);
    let seconds1 =  convertToSecond(parseInt(days.split(' ')[1])) + hours1*60*60 + minut1*60 + second1;
    let hour2 = parseInt(hours2.split(' ')[0]);
    let minut2 = parseInt(hours2.split(' ')[2]);
    let second2 = parseInt(hours2.split(' ')[4]);
    let seconds2 = convertToSecond(parseInt(days2.split(' ')[1])) + hour2*60*60 + minut2*60 + second2;

    let result = seconds2 - seconds1;

    let resDays;
    let resHours;
    let resMinutes;
    let resSeconds;

    resDays = parseInt(result/(24*60*60));
    resHours = parseInt((result%(24*60*60)) / (60*60));
    resMinutes = parseInt(((result%(24*60*60)) % (60*60)) / 60);
    resSeconds = parseInt(((result%(24*60*60)) % (60*60)) % 60);

    console.log(`${resDays} dia(s)`);
    console.log(`${resHours} hora(s)`);
    console.log(`${resMinutes} minuto(s)`);
    console.log(`${resSeconds} segundo(s)`);

}

function convertToSecond(days) {
    return days*24*60*60;
}

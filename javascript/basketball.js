let homeScoreDisplay = document.getElementById('homeScore')
let guestScoreDisplay = document.getElementById('guestScore')
let countH = 0
let countG = 0
//Home display functions//
function hPlus1() {
    countH += 1
    homeScore.textContent = countH
}
function hPlus2() {
     countH += 2
    homeScore.textContent = countH
}
function hPlus3() {
     countH += 3
    homeScore.textContent = countH
}
//Guest display functions//
function gPlus1() {
     countG += 1
    guestScore.textContent = countG
}
function gPlus2() {
      countG += 2
    guestScore.textContent = countG
}
function gPlus3() {
      countG += 3
    guestScore.textContent = countG
}

//Periods display functions//

let periodsDiplay = document.getElementById('periods')

function period1(){
    periodsDiplay.textContent = 1
}
function period2(){
    periodsDiplay.textContent = 2

}
function period3(){
    periodsDiplay.textContent = 3

}
function period4(){
    periodsDiplay.textContent = 4

}

//Timer display functions//

const startingMinutes = 12;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('timer');

function updatedCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

function timerStart(){
    interval = setInterval(updatedCountdown, 1000);
}

function timerPause(){
    clearInterval(interval);
    interval = null;
}
//Passenger Counter App code//

//document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

//Basketball Scoreboard App code//

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

//BLACKJACK GAME!//

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){

    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
for (let i = 0; i < cards.length; i++ ){
    cardsEl.textContent += cards[i] + " "
}

    sumEl.textContent = "Sum: " + sum
if (sum <=20) {
    message = "Would you like to draw a new card?"
} else if (sum === 21) {
    message = "YES! You got Blackjack! Congrats"
    hasBlackJack = true
} else {
    message = "You loose, sorry :("
    isAlive = false
}
messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    

    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}
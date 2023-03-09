const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
} ))

function generateComputerChoice() {
    const randomNumber =  Math.floor(Math.random()* 3 ) +1// or possibleChoice.length
    
    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if(randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice)
    result = "¡Es un empate!"
    if (computerChoice === "rock" && userChoice === "paper")
    result = "Tu  ganas"
    if (computerChoice === "rock" && userChoice === "scissors")
    result = "Pierdes"
    if (computerChoice === "paper" && userChoice === "scissors")
    result = "Tu ganas"
    if (computerChoice === "paper" && userChoice === "rock")
    result = "Tu pierdes"
    if (computerChoice === "scissors" && userChoice === "rock")
    result = "Tu ganas"
    if (computerChoice === "scissors" && userChoice === "paper")
    result = "Tu pierdes"

    resultDisplay.innerHTML = result;


}
 



/*
function validateUserChoice() {
    const result = {
        userChoice: userChoice,
        computerChoice: computerChoice,
    }
    if(userChoice === 'rock' && computerChoice ==='scissors') {
        resultDisplay.innerHTML = 'You Lose'
    }
    if(userChoice ==='scissors' && computerChoice === 'paper') {
        resultDisplay.innerHTML = 'You Lose'
    }
    if(userChoice === 'paper' && computerChoice === 'rock') {
        resultDisplay.innerHTML = 'You Lose'
    }
    if(userChoice === computerChoice) {
        resultDisplay.innerHTML = 'You Win'
    }
}

*/
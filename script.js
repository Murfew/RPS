const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const CHOICES = [ROCK, PAPER, SCISSORS]

function getComputerChoice() {
    let cpuChoiceIndex = Math.floor(Math.random() * 3)
    return CHOICES[cpuChoiceIndex]
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    let playerSelection = playerSelection.toLowerCase()

    if (playerSelection == ROCK) {

        if (computerSelection == ROCK) {
            return "It's a Tie!"
        } else if (computerSelection == PAPER) {
            return "You Lose! Paper beats Rock!"
        } else {
            return "You Win! Rock beats Scissors!"
        }

    } else if (playerSelection == PAPER) {

        if (computerSelection == ROCK) {
            return "You Win! Paper beats Rock!"
        } else if (computerSelection == PAPER) {
            return "It's a Tie!"
        } else {
            return "You Lose! Scissors beats Paper!"
        }

    } else {

        if (computerSelection == ROCK) {
            return "You Lose! Rock beats Scissors!"
        } else if (computerSelection == PAPER) {
            return "You Win! Scissors beats Paper!"
        } else {
            return "It's a Tie!"
        }

    }
}
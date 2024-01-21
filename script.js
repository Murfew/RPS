const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const CHOICES = [ROCK, PAPER, SCISSORS]

function getComputerChoice() {
    let cpuChoiceIndex = Math.floor(Math.random() * 3)
    return CHOICES[cpuChoiceIndex]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == ROCK) {

        if (computerSelection == ROCK) {
            return 0
        } else if (computerSelection == PAPER) {
            return -1
        } else {
            return 1
        }

    } else if (playerSelection == PAPER) {

        if (computerSelection == ROCK) {
            return 1
        } else if (computerSelection == PAPER) {
            return 0
        } else {
            return -1
        }

    } else {

        if (computerSelection == ROCK) {
            return -1
        } else if (computerSelection == PAPER) {
            return 1
        } else {
            return 0
        }

    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    while (playerScore < 3 && computerScore < 3) {
        let computerSelection = getComputerChoice()
        let playerSelection = null
        
        let rockBtn = document.getElementById("rock")
        rockBtn.addEventListener("click", () => {
            playerSelection = ROCK
        })

        let paperBtn = document.getElementById("paper")
        paperBtn.addEventListener("click", () => {
            playerSelection = PAPER
        })

        let scissorsBtn = document.getElementById("scissors")
        scissorsBtn.addEventListener("click", () => {
            playerSelection = SCISSORS
        })




        let result = playRound(playerSelection, computerSelection)

        if (result == 1) {
            playerScore += 1
            console.log("Player Wins! The score is now: " + playerScore + ":" + computerScore) 
        } else if (result == -1) {
            computerScore += 1
            console.log("Computer Wins! The score is now: " + playerScore + ":" + computerScore) 
        } else {
            console.log("Tie! Nobody Wins! The score is now: " + playerScore + ":" + computerScore) 
        }
    }

    if (playerScore > computerScore) {
        console.log("Player Wins!" + playerScore + "points to " + computerScore)
    } else {
        console.log("Computer Wins!" + computerScore + "points to " + playerScore)
    }
}

game()
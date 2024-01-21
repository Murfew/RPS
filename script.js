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

function game(playerSelection) {

    let pScoreDisplay = document.getElementById("playerScore")
    let cScoreDisplay = document.getElementById("computerScore")
    let commentary = document.getElementById("commentary")

    let playerScore = 0
    let computerScore = 0

    let computerSelection = getComputerChoice()

    pScoreDisplay.textContent = "Player: " + playerScore
    cScoreDisplay.textContent = "Computer: " + computerScore
    commentary.textContent = "The game is about to start! First to 3 points wins!"

    let result = playRound(playerSelection, computerSelection)

    if (result == 1) {
        playerScore += 1
        pScoreDisplay.textContent = "Player: " + playerScore
        commentary.textContent = "Player wins the round!"
    } else if (result == -1) {
        computerScore += 1
        cScoreDisplay.textContent = "Computer: " + computerScore
        commentary.textContent = "Computer wins the round!"
    } else {
        commentary.textContent = "Tie! Nobody gains a point!"
    }

    if (playerScore == 3) {
        //pleyer wins
        //reset
    } else if (computerScore == 3) {
        //computer wins
        //reset
    } else {
        //play again
    }

}

function getPlayerChoice() {
    let playerSelection = null

    let rockBtn = document.getElementById("rock")
    let paperkBtn = document.getElementById("paper")
    let scissorsBtn = document.getElementById("scissors")


    rockBtn.addEventListener("click", game(ROCK))

    paperkBtn.addEventListener("click", game(PAPER))

    scissorsBtn.addEventListener("click", game(SCISSORS))
}
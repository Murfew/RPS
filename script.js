const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const CHOICES = [ROCK, PAPER, SCISSORS]

function getComputerChoice() {
    let cpuChoiceIndex = Math.floor(Math.random() * 3)
    return CHOICES[cpuChoiceIndex]
}

function getPlayerChoice(playerScore, computerScore) {
    let rockBtn = document.getElementById("rock")
    let paperBtn = document.getElementById("paper")
    let scissorsBtn = document.getElementById("scissors")

    let isListenerActive = true


    rockBtn.addEventListener("click", () => {
        
        if(!isListenerActive) return;
        
        isListenerActive = false
        game(ROCK, playerScore, computerScore)
    })

    paperBtn.addEventListener("click", () => {

        if(!isListenerActive) return;

        isListenerActive = false
        game(PAPER, playerScore, computerScore)
    })

    scissorsBtn.addEventListener("click", () => {

        if(!isListenerActive) return;

        isListenerActive = false
        game(SCISSORS, playerScore, computerScore)
    })
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

function game(playerSelection, playerScore, computerScore) {

    
    
    let pScoreDisplay = document.getElementById("playerScore")
    let cScoreDisplay = document.getElementById("computerScore")
    let commentary = document.getElementById("commentary")
    
    let computerSelection = getComputerChoice()

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
        pScoreDisplay.textContent = "Player: " + playerScore
        commentary.textContent = "Player wins the game!"
        
        const yesBtn = document.createElement("button")
        const noBtn = document.createElement("button")
        const btnDiv = document.getElementById("resetButtons")

        yesBtn.textContent = "Play Again"
        noBtn.textContent = "Quit"

        yesBtn.addEventListener("click", () => {
            yesBtn.remove()
            noBtn.remove()
            initializeGame()
        })

        noBtn.addEventListener("click", () => {
            close()
        })

        btnDiv.appendChild(yesBtn)
        btnDiv.appendChild(noBtn)
        
    } else if (computerScore == 3) {        
        cScoreDisplay.textContent = "Computer: " + computerScore
        commentary.textContent = "Computer wins the game!"
        const yesBtn = document.createElement("button")
        const noBtn = document.createElement("button")
        const btnDiv = document.getElementById("resetButtons")

        yesBtn.textContent = "Play Again"
        noBtn.textContent = "Quit"

        yesBtn.addEventListener("click", () => {
            yesBtn.remove()
            noBtn.remove()
            initializeGame()
        })

        noBtn.addEventListener("click", () => {
            close()
        })

        btnDiv.appendChild(yesBtn)
        btnDiv.appendChild(noBtn)
    } else {
        getPlayerChoice(playerScore, computerScore)
    }
}

function initializeGame() {
    let pScoreDisplay = document.getElementById("playerScore")
    let cScoreDisplay = document.getElementById("computerScore")
    let commentary = document.getElementById("commentary")

    let playerScore = 0
    let computerScore = 0

    pScoreDisplay.textContent = "Player: " + playerScore
    cScoreDisplay.textContent = "Computer: " + computerScore
    commentary.textContent = "The game is about to start! First to 3 points wins!"

    getPlayerChoice(playerScore, computerScore)
}

initializeGame()
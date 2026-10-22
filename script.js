function getComputerChoice() {
    let number = Math.random()
    if (number >= 0.7) {
        return 'rock'
    }
    else if (0.3 >= number < 0.7) {
        return 'scissors'
    }
    else {
        return 'paper'
    }
}
let humanScore = 0
let computerScore = 0
const computerSelection = getComputerChoice()
const computerScoreField = document.querySelector('#computerScore')
const humanScoreField = document.querySelector('#humanScore')
const container = document.querySelector('#container')
const resultField = document.createElement("div"
)

function playRound(humanChoice) {
    let human = humanChoice
    let computer = getComputerChoice()
    if ((human === 'rock' && computer === 'paper') || (human === 'paper' && computer === 'scissors') || (human === 'scissors' && computer === 'rock')) {
        computerScore += 1
        if (computerScore === 5) {
            humanScore = 0
            computerScore = 0
            resultField.textContent = "You lose! " + computer + " beats " + human + ". Computer is Champs"
            humanScoreField.textContent = humanScore
            computerScoreField.textContent = computerScore
            container.appendChild(resultField)
        } else {
            resultField.textContent = "You lose! " + computer + " beats " + human
            humanScoreField.textContent = humanScore
            computerScoreField.textContent = computerScore
            container.appendChild(resultField)
        }

    } else if ((computer === 'rock' && human === 'paper') || (computer === 'paper' && human === 'scissors') || (computer === 'scissors' && human === 'rock')) {
        humanScore += 1
        if (humanScore === 5) {
            humanScore = 0
            computerScore = 0
            resultField.textContent = "You win! " + human + " beats " + computer + ". Computer is Champs"
            humanScoreField.textContent = humanScore
            computerScoreField.textContent = computerScore
            container.appendChild(resultField)
        } else {
            resultField.textContent = "You win! " + human + " beats " + computer
            humanScoreField.textContent = humanScore
            computerScoreField.textContent = computerScore
            container.appendChild(resultField)
        }
    }
    else {
        resultField.textContent = "Tie! All of you pick " + human
        humanScoreField.textContent = humanScore
        computerScoreField.textContent = computerScore
        container.appendChild(resultField)
    }
}

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

function getHumanChoice() {
    let choice = prompt('rock/paper/scissors')
    choice = choice.toLocaleLowerCase()
    return choice
}

let humanScore = 0
let computerScore = 0

function playGame() {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    function playRound(humanChoice, computerChoice) {
        let human = humanChoice
        let computer = computerChoice
        if ((human === 'rock' && computer === 'paper') || (human === 'paper' && computer === 'scissors') || (human === 'scissors' && computer === 'rock')) {
            computerScore += 1
            return "You lose! " + computer + " beats " + human

        } else if ((computer === 'rock' && human === 'paper') || (computer === 'paper' && human === 'scissors') || (computer === 'scissors' && human === 'rock')) {
            humanScore += 1
            return "You win! " + human + " beats " + computer
        }
        else {
            return "Tie! All of you pick " + human
        }
    }

    console.log(playRound(humanSelection, computerSelection), ".You : " + humanScore, ".Computer : " + computerScore)

}

for (let index = 0; index < 5; index++) {
    playGame()

}

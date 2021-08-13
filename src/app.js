// Computer input function
const computerSelection = () => {
    // Random number between 0 and 2
    computerInput = Math.floor(Math.random() * 3);

    // The random number is now assigned to a possible hand
    switch (computerInput) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            return 'Error';
    }
}

const computerContainer = document.querySelector('#computerInput')

// Computer Input Result
const computerText = document.createElement('h4')
const computerOutcome = document.createElement('span')

computerContainer.append(computerText, computerOutcome)

// Player Inputs
document.querySelector('#rock').addEventListener('click', playerRock)
document.querySelector('#paper').addEventListener('click', playerPaper)
document.querySelector('#scissors').addEventListener('click', playerScissors)


function playerRock() {
    winnerSelection('rock', computerSelection())
    computerText.innerText = 'The computer played: '
}
function playerPaper() {
    winnerSelection('paper', computerSelection())
    computerText.innerText = 'The computer played: '
}
function playerScissors() {
    winnerSelection('scissors', computerSelection())
    computerText.innerText = 'The computer played: '
}

// Winner selection function
let winnerSelection = (playerChoice, computerChoice) => {
    const outcome = document.querySelector('h2')
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    console.log(playerChoice, 'vs', computerChoice);

    computerOutcome.innerText = computerChoice

    if (playerChoice === computerChoice) {
        outcome.innerText = 'It\'s a tie!'
        outcome.style.color = 'rgb(255, 251, 43)'
        return
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            outcome.innerText = 'The computer won!'
            outcome.style.color = 'rgb(255, 43, 43)'
        } else {
            outcome.innerText = 'You won!'
            outcome.style.color = 'rgb(110, 255, 43)'
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            outcome.innerText = 'The computer won!'
            outcome.style.color = 'rgb(255, 43, 43)'
        } else {
            outcome.innerText = 'You won!'
            outcome.style.color = 'rgb(110, 255, 43)'
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            outcome.innerText = 'The computer won!'
            outcome.style.color = 'rgb(255, 43, 43)'
        } else {
            outcome.innerText = 'You won!'
            outcome.style.color = 'rgb(110, 255, 43)'
        }
    }
}
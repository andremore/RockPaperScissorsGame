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

// Selecting the <div> that will contain the computer input
const computerContainer = document.querySelector('#computerInput')

// Computer input result
const computerText = document.createElement('h4')
const computerOutcome = document.createElement('span')

computerContainer.append(computerText, computerOutcome)

// Player Inputs
document.querySelector('#rock').addEventListener('click', playerRock)
document.querySelector('#paper').addEventListener('click', playerPaper)
document.querySelector('#scissors').addEventListener('click', playerScissors)

// Functions that assign a value to each button and runs the game
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

// All possible plays and each result depending on the player & computer inputs
let winnerSelection = (playerChoice, computerChoice) => {
    const outcome = document.querySelector('h2')
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    computerOutcome.innerText = computerChoice

    // Debugging
    console.log(playerChoice, 'vs', computerChoice);

    if (playerChoice === computerChoice) {
        outcome.innerText = 'It\'s a tie!'
        outcome.style.color = 'rgb(255, 251, 43)'
        document.body.style.background = "rgb(2,29,33) linear-gradient(180deg, rgba(2,29,33,1) 0%, rgba(52,51,3,1) 100%) no-repeat right top"
        return
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            outcome.innerText = 'The computer won!'
            outcome.style.color = 'rgb(255, 43, 43)'
            document.body.style.background = "rgb(2,29,33) linear-gradient(180deg, rgba(2,29,33,1) 0%, rgba(52,3,5,1) 100%) no-repeat right top"
        } else {
            outcome.innerText = 'You won!'
            outcome.style.color = 'rgb(110, 255, 43)'
            document.body.style.background = "rgb(2,29,33) linear-gradient(180deg, rgba(2,29,33,1) 0%, rgba(3,52,7,1) 100%) no-repeat right top"
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            outcome.innerText = 'The computer won!'
            outcome.style.color = 'rgb(255, 43, 43)'
            document.body.style.background = "rgb(2,29,33) linear-gradient(180deg, rgba(2,29,33,1) 0%, rgba(52,3,5,1) 100%) no-repeat right top"
            
        } else {
            outcome.innerText = 'You won!'
            outcome.style.color = 'rgb(110, 255, 43)'
            document.body.style.background = "rgb(2,29,33) linear-gradient(180deg, rgba(2,29,33,1) 0%, rgba(3,52,7,1) 100%) no-repeat right top"
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            outcome.innerText = 'The computer won!'
            outcome.style.color = 'rgb(255, 43, 43)'
            document.body.style.background = "rgb(2,29,33) linear-gradient(180deg, rgba(2,29,33,1) 0%, rgba(52,3,5,1) 100%) no-repeat right top"
        } else {
            outcome.innerText = 'You won!'
            outcome.style.color = 'rgb(110, 255, 43)'
            document.body.style.background = "rgb(2,29,33) linear-gradient(180deg, rgba(2,29,33,1) 0%, rgba(3,52,7,1) 100%) no-repeat right top"
        }
    }
}
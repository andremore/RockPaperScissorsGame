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
};

const computerContainer = document.querySelector('#computerInput')

// Computer Input Result
const computerOutcome = document.createElement('span')
let computer = computerSelection()
computerOutcome.innerText = computer

computerContainer.append(computerOutcome)

// Player Inputs
const rock = document.querySelector('#rock').addEventListener('click', playerRock)
const paper = document.querySelector('#paper').addEventListener('click', playerPaper)
const scissors = document.querySelector('#scissors').addEventListener('click', playerScissors)

function playerRock() {
    console.log('rock')
}
function playerPaper() {
    console.log('paper')
}
function playerScissors() {
    console.log('scissors')
}

// Game Result
const container = document.querySelector('.container')
// ! Call Game Function
const outcome = document.querySelector('h2')
//let winner = winnerSelection()
outcome.innerText = `${outcome}`

console.log(computer)




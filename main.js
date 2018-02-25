const ROUNDS = 5;
const newGame = document.querySelector('#new-game');

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const gameStatus = document.querySelector('#game-status');

let playerScore = 0;
let computerScore = 0;


newGame.addEventListener('click', () => game());
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click',() =>  playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function computerPlay() {
    play = Math.random() * 3;
    switch (true) {
        case play < 1: return "rock";
        case play >= 2: return "scissors";
        default: return "paper";
    }
}

function playRound(playerSelection) {
    if (continueGame()) {
        console.log('Playing a round...');
        computerSelection = computerPlay();
        document.querySelector('#computer-selection').textContent = computerSelection;
        if (playerSelection == null) {
            gameStatus.textContent = 'Something went wrong...';
        }
        if (playerSelection == computerSelection) {
            gameStatus.textContent = "It's a draw!";
            console.log('Draw');
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            gameStatus.textContent =  "Rock beats scissors! You win!";
            playerScore++;
            score();
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            gameStatus.textContent = "Paper beats rock! You lose!";
            computerScore++;
            score();
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            gameStatus.textContent = "Paper beats rock! You win!";
            playerScore++;
            score();
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            gameStatus.textContent = "Scissors beats paper! You lose!";  
            computerScore++;
            score();
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            gameStatus.textContent = "Scissors beats paper! You win!";
            playerScore++;
            score();
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            gameStatus.textContent = "Rock beats scissors! You lose!";  
            computerScore++;
            score();
        }
        playerScoreDisplay.textContent = 'Score: ' + playerScore;
        computerScoreDisplay.textContent = 'Score: ' + computerScore;
    }
    continueGame();
}


function game() {
    console.log('Starting game...');
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 'Score: ' + playerScore;
    computerScoreDisplay.textContent = 'Score: ' + computerScore;
    gameStatus.textContent = 'New game started!';
}

function continueGame() {
    if (playerScore >= ROUNDS) {
        gameStatus.textContent = 'Congratulations! You won! Press new game to start over.';
        return false;
    } else if (computerScore >= ROUNDS) {
        gameStatus.textContent = 'You lost! Press new game to start over.';
        return false;
    }
    return true;
}
function score() {
    console.log('player: ' + playerScore + '\ncomputer: '+ computerScore);
}


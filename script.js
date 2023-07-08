function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // only capitalize first letter
    
    if (playerSelection == "Rock") {

        if (computerSelection == "Paper") {
            computerScore++;
            divResults.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;

        } else if (computerSelection == "Scissors") {
            playerScore++;
            divResults.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;

        } else {
            divResults.textContent = `It's a tie! You both chose ${playerSelection}`;
        }
    
    } else if (playerSelection == "Paper") {

        if (computerSelection == "Rock") {
            playerScore++;
            divResults.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;

        } else if (computerSelection == "Scissors") {
            computerScore++;
            divResults.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;

        } else {
            divResults.textContent = `It's a tie! You both chose ${playerSelection}.`;
        }
        
    } else if (playerSelection == "Scissors") {

        if (computerSelection == "Rock") {
            computerScore++;
            divResults.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;

        } else if (computerSelection == "Paper") {
            playerScore++;
            divResults.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;

        } else {
            divResults.textContent = `It's a tie! You both chose ${playerSelection}.`;
        }
    }

    playerScoreElement.textContent = "Player score: " + playerScore;
    computerScoreElement.textContent = "Computer score: " + computerScore;

    if (playerScore == 5) {
        divResults.textContent = `You are the ultimate winner! You got ${playerScore} points, and the computer got ${computerScore} points.`;
        playerScore = 0;
        computerScore = 0;

    } else if (computerScore == 5) {
        divResults.textContent = `Sadly, you lost this game. You had ${playerScore} points, but the computer got ${computerScore} points.`
        playerScore = 0;
        computerScore = 0;
    }
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => playRound("Rock", getComputerChoice()));

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => playRound("Paper", getComputerChoice()));

const scissorButton = document.querySelector("#scissor");
scissorButton.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

let playerScore = 0;
let computerScore = 0;

const divResults = document.querySelector(".results");
const playerScoreElement = document.querySelector(".playerScore");
const computerScoreElement = document.querySelector(".computerScore");


function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {


    let result;
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // only capitalize first letter
    
    if (playerSelection == "Rock") {

        if (computerSelection == "Rock") {
            result = "It's a tie!";

        } else if (computerSelection == "Paper") {
            result = `You lose! ${computerSelection} beats ${playerSelection}`;

        } else if (computerSelection == "Scissors") {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
        }
    
    } else if (playerSelection == "Paper") {

        if (computerSelection == "Rock") {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
           
        } else if (computerSelection == "Paper") {
            result = "It's a tie!";
            
        } else if (computerSelection == "Scissors") {
            result = `You lose! ${computerSelection} beats ${playerSelection}`;
        }

    } else if (playerSelection == "Scissors") {

        if (computerSelection == "Rock") {
            result = `You lose! ${computerSelection} beats ${playerSelection}`;
           
        } else if (computerSelection == "Paper") {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
            
        } else if (computerSelection == "Scissors") {
            result = "It's a tie!";
        }
    }

    return result;
}

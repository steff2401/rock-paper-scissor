function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    let result; // 1 = player win, 0 = tie, -1 = computer win
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // only capitalize first letter
    
    if (playerSelection == "Rock") {

        if (computerSelection == "Rock") {
            result = 0;

        } else if (computerSelection == "Paper") {
            result = -1;

        } else if (computerSelection == "Scissors") {
            result = 1;
        }
    
    } else if (playerSelection == "Paper") {

        if (computerSelection == "Rock") {
            result = 1;
           
        } else if (computerSelection == "Paper") {
            result = 0;
            
        } else if (computerSelection == "Scissors") {
            result = -1;
        }

    } else if (playerSelection == "Scissors") {

        if (computerSelection == "Rock") {
            result = -1;
           
        } else if (computerSelection == "Paper") {
            result = 1;
            
        } else if (computerSelection == "Scissors") {
            result = 0;
        }
    }

    return result;
}

function game() {

    let scorePlayer = 0;
    let scoreComputer = 0;

    if (scorePlayer > scoreComputer) {
        console.log(`You are the ultimate winner! You got ${scorePlayer} points, and the computer got ${scoreComputer} points.`);

    } else if (scoreComputer > scorePlayer) {
        console.log(`Sadly, you lost this game. You had ${scorePlayer} points, but the computer got ${scoreComputer} points.`);

    } else if (scorePlayer == scoreComputer) {
        console.log(`The game is a tie! You both got ${scorePlayer} points.`)
    }
}

game();

function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}
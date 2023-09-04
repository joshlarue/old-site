// return rock, paper, or scissors randomly
function getComputerChoice() {
    let computerNum = Math.floor(Math.random() * 3 + 1);
    let computerChoice = undefined;

    switch (+computerNum) {
        case 1: 
            return computerChoice = "rock";
            break;
        case 2: 
            return computerChoice = "paper";
            break;
        case 3: 
            return computerChoice = "scissors";
            break;
    }
}

function playRound(playerChoice, computerChoice) {
    
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (playerChoice == computerChoice) {
        return "You tied!";
    } else if (
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "scissors" && playerChoice == "paper") ||
        (computerChoice == "paper" && playerChoice == "rock")
        ) {
        return `You lost! ${computerChoice} beats ${playerChoice}.`;
    } else {
        return `You won! ${playerChoice} beats ${computerChoice}.`;
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("What's your choice?").toLowerCase();
}

if (playerChoice !== ("rock" || "paper" || "scissors")) {
    getPlayerChoice();
}

function game() {
    for (let i = 0; i < 4; i++) {
        playRound();
    }
}
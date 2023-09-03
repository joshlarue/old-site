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
    // tie game
    if (playerChoice == computerChoice) {
        console.log("You tied!");
    } else if (
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "scissors" && playerChoice == "paper") ||
        (computerChoice == "paper" && playerChoice == "rock")
        ) {
        console.log(`You lost! ${computerChoice} beats ${playerChoice}.`);
    } else {
        console.log(`You won! ${playerChoice} beats ${computerChoice}.`);
    }
}
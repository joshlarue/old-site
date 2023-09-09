let score = 0;

function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            return computerChoice = "rock";
            break;
        case 2:
            return computerChoice = "paper";
            break;
        case 3:
            return computerChoice = "scissors";
            break;
        default:
            return 1;
            break;
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("What is your choice?").toLowerCase();
    
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        alert("Choose either rock, paper, or scissors!");
        getPlayerChoice();
    }

    return playerChoice;
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
        alert("You tied!");
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")
        ) {
            alert(`You won! ${playerChoice} beats ${computerChoice}.`);
            score++;
        } else {
            alert(`You lost! ${computerChoice} beats ${playerChoice}.`);
        }
    return score;
}

function game() {
    score = 0;
    
    for (let i = 0; i < 3; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        alert(playRound(playerChoice, computerChoice));

    }

    alert(`Your score was ${score}.`);
}
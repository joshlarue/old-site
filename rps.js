let score = 0;
let cScore = 0;

const startGame = document.querySelector(".start-game");

startGame.addEventListener("click", () =>
    game()
);

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

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
            playerScore.textContent = `Your score is ${score}.`
        } else {
            alert(`You lost! ${computerChoice} beats ${playerChoice}.`);
            cScore++;
            computerScore.textContent = `Computer score is ${cScore}.`;
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
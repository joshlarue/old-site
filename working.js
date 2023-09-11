let score = 0;
let cScore = 0;
let playerChoice;

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resetBtn = document.querySelector(".reset");
const result = document.querySelector(".result");

function playerInput() {
    rockBtn.addEventListener("click", () => {
        playerChoice = "rock";
        playRound(playerChoice, getComputerChoice());
    });

    paperBtn.addEventListener("click", () => {
        playerChoice = "paper";
        playRound(playerChoice, getComputerChoice());
    });

    scissorsBtn.addEventListener("click", () => {
        playerChoice = "scissors";
        playRound(playerChoice, getComputerChoice());
    });

    resetBtn.addEventListener("click", () => {
        console.log("clicked");
        score = 0;
        cScore = 0;
        result.textContent = "";
        playerScore.textContent = "";
        computerScore.textContent = "";
    });
}

function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            return computerChoice = "rock";
        case 2:
            return computerChoice = "paper";
        case 3:
            return computerChoice = "scissors";
        default:
            return 1;
    }
}

function playRound(playerChoice, computerChoice) {    
    if (playerChoice == computerChoice) {
        result.textContent = `You tied! You both chose ${playerChoice}`;
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")
        ) {
            result.textContent = `You won! ${playerChoice} beats ${computerChoice}.`;
            score++;
            playerScore.textContent = `Your score is ${score}.`
        } else {
            result.textContent = `You lost! ${computerChoice} beats ${playerChoice}.`;
            cScore++;
            computerScore.textContent = `Computer score is ${cScore}.`;
        }
    return score;
}

playerInput();
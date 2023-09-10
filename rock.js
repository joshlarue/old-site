let score = 0;
let cScore = 0;

const startGame = document.querySelector(".start-game");

startGame.addEventListener("click", () =>
    game()
);

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const playerInputField = document.getElementById("player-input");
playerInputField.value = '';
console.log(playerInputField);

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

function playRound(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
        console.log("You tied!");
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")
        ) {
            console.log(`You won! ${playerChoice} beats ${computerChoice}.`);
            score++;
            playerScore.textContent = `Your score is ${score}.`
        } else {
            console.log(`You lost! ${computerChoice} beats ${playerChoice}.`);
            cScore++;
            computerScore.textContent = `Computer score is ${cScore}.`;
        }
    return score;
}

function game() {
    console.log("game started");
    score = 0;

    playerInputField.addEventListener("leypress", function handleKeyPress(event) {
        if (event.key === "Enter") {
            let playerChoice = playerInputField.value.toLowerCase();
            console.log(`You choose ${playerChoice}.`);
            if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
                console.log("Choose either rock, paper, or scissors!");
                playerInputField.content = '';
            } else {
                callback(playerChoice);
                playerInputField.content = '';
            }
            playerInputField.removeEventListener("keypress", handleKeyPress);
        }
    })
    
    for (let i = 0; i < 3; i++) {
        playerInput((playerChoice) => {
            console.log(playRound(playerChoice, computerChoice));
            console.log(`Your score is ${score}.`);
        });
        let computerChoice = getComputerChoice();
        playerInputField.content = '';
    }
    playerInputField.content = '';
}

function playerInput(callback) {
    playerInputField.addEventListener("keypress", function handleKeyPress(event) {
        if (event.key === "Enter") {
            let playerChoice = playerInputField.value.toLowerCase();
            console.log(playerChoice);

            if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
                console.log("Choose either rock, paper, or scissors!");
                playerInputField.content = '';
            } else {
                playerInputField.content = '';
                callback(playerChoice);
            }
            playerInputField.content = '';
            playerInputField.removeEventListener("keypress", handleKeyPress);
        }
    });
    playerInputField.content = '';
}
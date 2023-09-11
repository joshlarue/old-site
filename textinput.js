// Old working version... took me a lot of work though. Learned a lot, so I'm keeping it

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
        console.log(`Your score is ${score}.`);
    return score;
}

function game() {
    console.log("game started");
    score = 0;
    cScore = 0;
    
    let roundLoop = new Promise(function (resolve, reject) {
        playerInput();
    });

    roundLoop.then(function() {
        if (playerChoice === undefined) {
            console.log("Nothing to see here.")
        }
        console.log("Yippee!");
        playRound(playerChoice, getComputerChoice());
    });

    roundLoop.catch(function () {
        return 1;
    });
}

function playerInput() {
    playerInputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            let playerChoice = playerInputField.value.toLowerCase();

            if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
                console.log("Choose either rock, paper, or scissors!");
                playerInputField.content = '';
            } else {
                playerInputField.content = '';
            }
            playerInputField.content = '';
            playerInputField.removeEventListener("keypress", event);
        }
    });
    playerInputField.content = '';
}
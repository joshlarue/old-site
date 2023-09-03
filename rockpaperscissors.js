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


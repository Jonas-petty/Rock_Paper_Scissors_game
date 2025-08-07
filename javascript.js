const roundCounter = document.querySelector("#round-counter");
const scoreCounter = document.querySelector("#score");
const options = document.querySelectorAll(".option");
const gameStatus = document.querySelector("#game-status");
const restartButton = document.querySelector("#restart");

let round = 1;
let computerScore = 0;
let humanScore = 0;
let computerSelection = "";
let humanSelection = "";

function syncUI() {
    roundCounter.innerText = `Round - ${round}`;
    scoreCounter.innerText = `Score: User - ${humanScore} | Computer - ${computerScore}`;
}

// restarts the game to default status
function restartGame() {
    round = 1;
    computerScore = 0;
    humanScore = 0;
    gameStatus.textContent = "";
    restartButton.style.display = "none";
    syncUI();
}

restartButton.addEventListener("click", restartGame);

// Returns one of the options randomly (rock, paper or scissors)
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Returns the options chosen by the user
options.forEach((option) => {
    option.addEventListener("click", (event) => {
        humanSelection = event.currentTarget.dataset.choice;
        computerSelection = getComputerChoice();
        playGame(humanSelection, computerSelection);
    });
});

function playGame(humanChoice, computerChoice) {
    if (round <= 5) {
        const winner = playRound(humanChoice, computerChoice);
        roundCounter.innerText = `Round - ${round === 0 ? 1 : round}`;
        scoreCounter.innerText = `Score: User - ${humanScore} | Computer - ${computerScore}`;
        let winnerMessage =
            winner === "human"
                ? "Voce Venceu"
                : winner === "computer"
                ? "Computador Venceu"
                : "Empate!";

        gameStatus.innerHTML = winnerMessage;
        round++;
    } else {
        gameStatus.innerHTML = "Fim de Jogo, comecar novamente!";
        restartButton.style.display = "inline";
    }
}

// Play one round of the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "human";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "human";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "human";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "computer";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "computer";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "computer";
    } else {
        round--;
        return "draw";
    }
}

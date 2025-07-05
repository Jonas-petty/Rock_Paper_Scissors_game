window.addEventListener("load", () => {
    const roundCounter = document.querySelector("#round-counter");
    const select = document.querySelector("#options");
    const form = document.querySelector("#form");
    const gameStatus = document.querySelector("#game-status");

    let round = 1;
    let computerScore = 0;
    let humanScore = 0;
    let computerSelection = "";
    let humanSelection = "";

    // Returns one of the options randomly (rock, paper or scissors)
    function getComputerChoice() {
        const options = ["rock", "paper", "scissors"];

        const randomIndex = Math.floor(Math.random() * 3);

        return options[randomIndex];
    }

    // Returns the options chosen by the user
    select.addEventListener("change", (event) => {
        humanSelection = event.target.value;
    });

    function playGame(humanChoice, computerChoice) {
        console.log(round);
        console.log(
            `Human: ${humanScore}: ${humanChoice} - Computer: ${computerScore}: ${computerChoice}`
        );
        if (round <= 5) {
            const winner = playRound(humanChoice, computerChoice);
            roundCounter.innerText = `Round - ${round === 0 ? 1 : round}`;
            let winnerMessage = (winner === "human") ? "Voce Venceu" :
                                (winner === "computer") ? "Computador Venceu" :
                                "Empate!"

            gameStatus.innerHTML = winnerMessage;
            round++;
        } else {
            gameStatus.innerHTML = "Fim de Jogo, comecar novamente!"
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
            round--
            return "draw";
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        computerSelection = getComputerChoice();
        playGame(humanSelection, computerSelection);
    });
});

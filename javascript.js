window.addEventListener("load", () => {
    const roundCounter = document.querySelector("#round-counter");
    const select = document.querySelector("#options");
    const form = document.querySelector("#form");
    let round = 0;
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
        if (round < 5) {
            playRound(humanChoice, computerChoice);
        } else {
            console.log("The game is over, restart");
        }
    }

    // Play one round of the game
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("you win");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("you win");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("you win");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("you lose");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("you lose");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("you lose");
            computerScore++;
        } else {
            console.log("draw");
            round--;
        }

        round++;
        roundCounter.innerText = `Round - ${round}`;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        computerSelection = getComputerChoice();
        playGame(humanSelection, computerSelection);
    });
});

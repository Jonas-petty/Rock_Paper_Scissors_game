window.addEventListener("load", () => {
    const roundCounter = document.querySelector("#round-counter");
    const select = document.querySelector("#options");
    const form = document.querySelector("#form");
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

    // Play all the 5 rounds of the game
    function playRound(humanChoice, computerChoice) {
        console.log(round);
        console.log(`${humanChoice} - ${computerChoice}`);
        if (round <= 5) {
            if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("you win");
            } else if (
                humanChoice === "scissors" &&
                computerChoice === "paper"
            ) {
                console.log("you win");
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("you win");
            }
            if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("you lose");
            } else if (
                humanChoice === "scissors" &&
                computerChoice === "rock"
            ) {
                console.log("you lose");
            } else if (
                humanChoice === "paper" &&
                computerChoice === "scissors"
            ) {
                console.log("you lose");
            } else {
                console.log("draw");
                round--;
            }

            round++;
            roundCounter.innerText = `Round - ${round}`
        } else {
            console.log("The game is over, restart");
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});

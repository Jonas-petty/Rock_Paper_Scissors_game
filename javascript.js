window.addEventListener("load", () => {
    const select = document.querySelector("#options");
    const form = document.querySelector("#form");
    let round = 1
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

    function playRound(humanChoice, computerChoice) {
        console.log(round)
        if (round <= 5) {
            console.log(`${humanChoice} - ${computerChoice}`);
            round++
        } else {
            console.log("The game is over, restart")
        }
        


    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});

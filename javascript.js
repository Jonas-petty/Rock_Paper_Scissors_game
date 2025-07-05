window.addEventListener("load", () => {
    const select = document.querySelector("#options");
    let computerScore = 0;
    let humanScore = 0;

    // Returns one of the options randomly (rock, paper or scissors)
    function getComputerChoice() {
        const options = ["rock", "paper", "scissors"];

        const randomIndex = Math.floor(Math.random() * 3);

        return options[randomIndex];
    }

    // Returns the options chosen by the user
    select.addEventListener("change", (event) => {
        const humanSelection = getHumanChoice(event.target.value);
    });
});

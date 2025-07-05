window.addEventListener("load", () => {
    const select = document.querySelector("#options");

    // Returns on of the options randomly (rock, paper or scissors)
    function getComputerChoice() {
        const options = ["rock", "paper", "scissors"];

        const randomIndex = Math.floor(Math.random() * 3);

        return options[randomIndex];
    }

    function getHumanChoice(select) {
        return select.target.value
    }

    select.addEventListener("change", (event) => {
        getHumanChoice(event)
    });
});

// Get the result element
const resultElement = document.getElementById("result");

// Get the user's choice
const getUserChoice = () => {
    while (true) {
        const userChoice = prompt("Enter rock, paper, or scissors: ");
        if (["rock", "paper", "scissors"].includes(userChoice.toLowerCase())) {
            return userChoice.toLowerCase();
        } else {
            alert("Invalid choice. Please try again.");
        }
    }
};

// Get the computer's choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

// Determine the winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == computerChoice) {
        return "It's a tie!";
    } else if ((userChoice == "rock" && computerChoice == "scissors") ||
               (userChoice == "scissors" && computerChoice == "paper") ||
               (userChoice == "paper" && computerChoice == "rock")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
};

// Play the game
const playGame = () => {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    resultElement.textContent = `Computer chose ${computerChoice}. You chose ${userChoice}. ${determineWinner(userChoice, computerChoice)}`;
};

// Start the game
playGame();
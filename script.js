let playerSelection = prompt("Rock, Paper or Scissor").toLowerCase();
let roundScore = 0;
let playerScore = 0;
let computerScore = 0;

// //* This function generates a random choice for the computer
const getComputerChoice = () => {
  let compChoices = ["rock", "paper", "scissor"];
  let computerSelection =
    compChoices[Math.floor(Math.random() * compChoices.length)];
  return computerSelection;
};

// getComputerChoice();

const playRound = () => {
  //* code to UpperCase first letter of string .charAt(0).toUpperCase() + playerSelection.slice(1)
  let computer = getComputerChoice();
  console.log(computer);
  console.log(playerSelection);
  if (playerSelection === computer) {
    console.log("Tie Game!");
  }
  if (
    (playerSelection === "rock" && computer === "paper") ||
    (playerSelection === "paper" && computer === "scissor") ||
    (playerSelection === "scissor" && computer === "rock")
  ) {
    computerScore++;
    return "You lose!";
  } else if (
    (computer === "rock" && playerSelection === "paper") ||
    (computer === "paper" && playerSelection === "scissor") ||
    (computer === "scissor" && playerSelection === "rock")
  ) {
    playerScore++;
    return "You Win!";
  }
};

playRound(playerSelection, getComputerChoice());

// for (let i= 0; i<5; i++){

// }
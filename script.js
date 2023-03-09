let gameWinner = 5;
let playerScore = 0;
let computerScore = 0;
let tieGame = 0;

const playerChoice = () => {
  let playerSelection = prompt("Rock, Paper or Scissor").toLowerCase();
  return playerSelection;
};

// //* getComputerChoice() generates a random choice for the computer
const getComputerChoice = () => {
  let compChoices = ["rock", "paper", "scissor"];
  let computerSelection =
    compChoices[Math.floor(Math.random() * compChoices.length)];
  return computerSelection;
};

const playRound = () => {
  // code to UpperCase first letter of string .charAt(0).toUpperCase() + playerSelection.slice(1)
  let computer = getComputerChoice();
  let player = playerChoice();

  if (player === computer) {
    return tieGame++;
  } else if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissor") ||
    (player === "scissor" && computer === "rock")
  ) {
    return computerScore++;
  } else
    (computer === "rock" && player === "paper") ||
      (computer === "paper" && player === "scissor") ||
      (computer === "scissor" && player === "rock");
  return playerScore++;
};
const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(`Player Score : ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log(`Tie Game:${tieGame}`);
};
game();
// const game = () => {
//   while (gameWinner > playerScore || computerScore) {
//     playRound();
//     if (playerScore === 5) {
//       console.log("You Win!");
//     } else computerScore === 5;
//     console.log("Computer Wins!");
//   }
// };

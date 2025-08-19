let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

const getComputerChoice = () => {
  const pick = ["rock", "paper", "scissors"];

  return pick[Math.floor(Math.random() * pick.length)];
};

const playRound = (humanSelection, computerSelection) => {
  console.log(" ");

  console.log("Computer : " + computerSelection);
  console.log("You : " + humanSelection);
  const p = document.createElement("p");

  if (humanSelection === computerSelection) {
    winner = "No one!";
    p.innerText = "Draw! It's a tie";
    outcomeDiv.appendChild(p);
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    p.innerText = "You Won! Paper beats Rock";
    outcomeDiv.appendChild(p);
    return humanScore;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    p.innerText = "You Won! Scissors beats paper";
    outcomeDiv.appendChild(p);
    return humanScore;
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    p.innerText = "You Won! Rock beats scissors";
    outcomeDiv.appendChild(p);
    return humanScore;
  } else {
    computerScore++;
    console.log("You Lost!");
    outcomeDiv.appendChild(p);
    return computerScore;
  }

};


const checkWinner = (computerScore, humanScore) => {

  if (humanScore === 5) {
    const h2 = document.createElement('h2');
    h2.classList.add('player-won');
    h2.innerText = `You Won ${humanScore} to ${computerScore} Against Computer!`;
     outcomeDiv.append(h2);

  } else if (computerScore === 5) {

     const h2 = document.createElement('h2');
    h2.classList.add('computer-won');
    h2.innerText = `You lost ${humanScore} to ${computerScore} try again!`;
     outcomeDiv.append(h2);
  } 
  console.log("Computer Score : " + computerScore + " - Human Score : " + humanScore);

}




rockButton.addEventListener("click", () => {

  const computerSelection = getComputerChoice();
  const humanSelection = "rock";
  playRound(humanSelection, computerSelection);
  checkWinner(computerScore, humanScore);

});

paperButton.addEventListener("click", () => {

  const computerSelection = getComputerChoice();
  const humanSelection = "paper";
  playRound(humanSelection, computerSelection);
  checkWinner(computerScore, humanScore);

});

scissorsButton.addEventListener("click", () => {

  const computerSelection = getComputerChoice();
  const humanSelection = "scissors";
  playRound(humanSelection, computerSelection);
  checkWinner(computerScore, humanScore);

});

console.log("Hello World");

 // computer choice


let humanScore = 0;
let computerScore = 0;


 function playGame() {


        function getComputerChoice() {

            const pick = ['rock', 'paper' , 'scissors']

            return pick[Math.floor(Math.random() * pick.length)];

        }



        function getHumanChoice() {

            const you = prompt("Choose rock, paper or scissors", "");
            you.toLowerCase();
            return you;

        }


        function playRound(humanChoice, computerChoice) {

            console.log("Computer : " + computerSelection);
            console.log("You : " + humanSelection);

            if (humanChoice === computerChoice) {
                winner = "No one!";
                console.log("Draw! It's a tie");

            } else if (humanChoice === "paper" &&  computerChoice === "rock") {
                humanScore++;
                console.log("You Won! Paper beats Rock");
                return humanScore;

            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                console.log("You Won! Scissors beats paper");
                return humanScore; 

            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                console.log("You Won! Rock beats scissors");  
                return humanScore;

            } else  {
                computerScore++;
                console.log("You Lost!");  
                return computerScore;

            }

        }


        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        playRound(humanSelection, computerSelection);

        console.log("computer Score : " + computerScore + "human Score : " + humanScore);

    
}

console.log(" ");

for (let index = 1; index <= 5; index++) {
    console.log("Round : " + index);
    playGame();
    console.log(" ");

    
    
}
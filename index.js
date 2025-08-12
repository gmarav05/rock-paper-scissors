console.log("Hello World");

 // computer choice

let winner;

function round(winner) {


        function getComputerChoice() {

            const pick = ['rock', 'paper' , 'scissors']

            return pick[Math.floor(Math.random() * pick.length)];

        }



        function getHumanChoice() {

            const you = prompt("Choose rock, paper or scissors", "");
            you.toLowerCase();
            return you;

        }


        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice) {

            console.log("Computer : " + computerSelection);
            console.log("You : " + humanSelection);

            if (humanChoice === computerChoice) {
                console.log("Draw! It's a tie");

            } else if (humanChoice === "paper" &&  computerChoice === "rock") {
                humanScore++;
                console.log("You Won! Paper beats Rock");

            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                console.log("You Won! Scissors beats paper"); 

            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                console.log("You Won! Rock beats scissors");  

            } else  {
                computerScore++;
                console.log("You Lost!");  

            }


        }


        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        playRound(humanSelection, computerSelection);

        console.log(computerScore);
        console.log(humanScore);

    winner = "";

    if (humanScore > computerScore) {
        winner = "human";
        return winner;
    } else if (computerScore > humanScore) {
        winner = "computer";
        return winner;
    } else {
        winner = "No one!"
        return winner;
    }



}

let comp = 0;
let hum = 0;

function final() {

}

console.log(round(winner));

if (winner === "computer") {
    comp++;
} else if (winner === "human") {
    hum++;
}

console.log(round(winner));

if (winner === "computer") {
    comp++;
} else if (winner === "human") {
    hum++;
}

console.log(round(winner));

if (winner === "computer") {
    comp++;
} else if (winner === "human") {
    hum++;
}

console.log(round(winner));

if (winner === "computer") {
    comp++;
} else if (winner === "human") {
    hum++;
}

console.log(round(winner));

if (winner === "computer") {
    comp++;
} else if (winner === "human") {
    hum++;
}


if (hum > comp) {
    console.log("Computer Score : " + comp)
    console.log("Your Score : " + hum);
    console.log("You Just won this Rock-Paper-Scissors")
} else {
    console.log("Computer Score : " + comp)
    console.log("Your Score : " + hum);
    console.log("YOU LOST!");
}


// step 6

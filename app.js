console.log("Hello World");

// computer choice

let num = 0;
let str = "";

function getComputerChoice(str) {
  num = (Math.floor(Math.random() * 2)) * 1 ;

  console.log(num);

  if (num === 1 ) {
    return "rock";

  } else {
    return "paper";

  }

}

const computerSelection = getComputerChoice(str);




// // user input

function getHumanChoice() {
    return prompt("");
}

const humanSelection = getHumanChoice().toLowerCase();




// results

// score 

let humanScore = 0;
let computerScore = 0;



function playRound(computerSelection, humanSelection) {

    console.log(computerSelection);

    console.log(humanSelection);


    if (computerSelection == "paper" && humanSelection == "rock") {

        console.log("You lose! Paper beats Rock");
        computerScore++;

    } else if (computerSelection == "rock" && humanSelection == "paper") {

       console.log("You won! Paper beats Rock");
       humanScore++;

    } else if (computerSelection == "rock" && humanSelection == "scissors") {

        console.log("You lose! Rock beats scissors");
        computerScore++;

    } else if (computerSelection == "paper" && humanSelection == "scissors") {

        console.log("You won! scissors beats Paper");
        humanScore++;

    }   else if (computerSelection == humanSelection) {

        console.log("Draw! it is a tie");

    }

}

let play = playRound(computerSelection, humanSelection);



// 5 Rounds 


function playGame  (play)  {

    for(let i=0; i<=5; i++) {

       play;

    }


}

playGame(play);
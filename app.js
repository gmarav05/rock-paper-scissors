console.log("Hello World");

function game(computerScore, humanScore) {

        let num = 0;
        let str = "";

            // computer choice

            function getComputerChoice(str) {

                num = Math.floor(Math.random() * 2) * 1;

                if (num === 1) {
                    return "rock";

                } else {
                    return "paper";

                }

            }

        const computerSelection = getComputerChoice(str);


            //  user input

            function getHumanChoice() {
                return prompt("");
            }

        const humanSelection = getHumanChoice().toLowerCase();

            // results

            // score

            function playRound(computerSelection, humanSelection, humanScore, computerScore) {

                console.log("Computer : " + computerSelection);
                console.log("You : " + humanSelection);

                if (computerSelection === "paper" && humanSelection === "rock") {

                    console.log("You lose! Paper beats Rock");
                    return computerScore++;

                } else if (computerSelection === "rock" && humanSelection === "paper") {

                    console.log("You won! Paper beats Rock");
                     return humanScore++;

                } else if (computerSelection === "rock" && humanSelection === "scissors") {

                    console.log("You lose! Rock beats scissors");
                    return  computerScore++;

                } else if (computerSelection === "paper" && humanSelection === "scissors") {

                    console.log("You won! scissors beats Paper");
                      return humanScore++;

                }   else if (computerSelection === humanSelection) {

                    humanScore = 0;
                    computerScore = 0;
                    console.log("Draw! it is a tie");

                }

            }

        playRound(computerSelection, humanSelection, humanScore, computerScore);

        console.log(computerScore);
        console.log(humanScore);


        // console.log(computerScore);

        if (computerScore === 1) {
            return computerScore;
        } else {
            return humanScore;
        }

}

// 5 Rounds


// // function playGame() {


    let humanScore = 0;
    let computerScore = 0;
    game(humanScore, computerScore);

// //     for (let i=0; i<5; i++) { 

//    game(computerScore, humanScore);
//     console.log("Your Score : " + humanScore);
//     console.log("Computer Score : " + computerScore);
        
// //         if (computerScore = 1 ) {
// //             computerScore++;

// //         } else if (humanScore = 1) {
// //             humanScore++;
// //         }

// //     }



// //     if (computerScore > humanScore) {
// //         console.log("Computer Won! You Lost the Rock-Paper-Scissors");
// //     } else {
// //        console.log("You Won! Against the Rock-Paper-Scissors"); 
// //     }
// //     // console.log(humanScore);
// //     // console.log(computerScore);


// // }

// // playGame();
console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

// function playGame() {


        function getComputerChoice() {

            const pick = ['rock', 'paper' , 'scissors']

            return pick[Math.floor(Math.random() * pick.length)];

        }


        function playRound(humanChoice, computerChoice) {


            if (humanScore > 3) {
                    alert("You Won this Game Against Computer!");

            } else if (computerScore > 3) {
                    alert("You Lost this Game! Against Computer!!!!!!!");

            }


          const container = document.querySelector("#result");
          const score = document.createElement("div");
          score.classList.add("score");



            if (humanChoice === computerChoice) {
                winner = "No one!";
                console.log("Draw! It's a tie");
                score.textContent = "Human score : " + humanScore + "   " + "   Computer score : " + computerScore + "      ";
                container.appendChild(score);


            } else if (humanChoice === "paper" &&  computerChoice === "rock") {
                humanScore++;
                score.textContent = "Human score : " + humanScore + "   " + "   Computer score : " + computerScore + "      ";
                container.appendChild(score);

                return humanScore;

            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                score.textContent = "Human score : " + humanScore + "   " + "   Computer score : " + computerScore + "      ";
                container.appendChild(score);

                return humanScore; 

            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                score.textContent = "Human score : " + humanScore + "   " + "   Computer score : " + computerScore + "      ";
                container.appendChild(score);
                return humanScore;

            } else  {
                computerScore++;
                score.textContent = "Human score : " + humanScore + "   " + "   Computer score : " + computerScore + "      ";
                container.appendChild(score);
                return computerScore;

            }

        }


        const computerSelection = getComputerChoice();
        const humanSelection = "";


        const buttons = document.querySelectorAll("button");


            buttons.forEach((button) => {
                button.addEventListener("click" ,() => {

                    playRound(button.id, computerSelection);

                });
            });


   console.log(" ");

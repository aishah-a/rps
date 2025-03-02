let humanChoice;
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

const results = document.createElement("div");
document.body.appendChild(results);

const humanResult = document.createElement("div");
humanResult.textContent = `Player: ${humanScore}`;
results.appendChild(humanResult);

const computerResult = document.createElement("div");
computerResult.textContent = `Computer: ${computerScore}`;
results.appendChild(computerResult);

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        humanChoice = event.target.id.toUpperCase();
        return humanChoice;
    })

    button.addEventListener("click", playRound);
});

const gameplay = document.createElement("p");
results.appendChild(gameplay);

const outcome = document.createElement("p");
results.appendChild(outcome);


function playRound() {
    let computerChoice;
    function getComputerChoice(max) {
        let number = Math.floor(Math.random() * max);
    
        // assign numbers 0, 1, 2 to ROCK, PAPER and SCISSORS
        switch (number) {
            case 0:
                computerChoice = "ROCK";
                break;
            case 1:
                computerChoice = "PAPER";
                break;
            case 2:
                computerChoice = "SCISSORS";
                break;
        }
        // Display computer move
        return computerChoice;
    }

    function checkMoves() {
        if ((humanScore < 5) && (computerScore < 5)) {
            if (humanChoice === computerChoice) {
                gameplay.textContent = `TIE! You both played ${humanChoice}.`;
            } else if (
                (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
                (humanChoice === "PAPER" && computerChoice === "ROCK") ||
                (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
                humanScore++
                humanResult.textContent = `Player: ${humanScore}`;
                gameplay.textContent = `WIN! You played ${humanChoice}, and the computer played ${computerChoice}.`
            } else {
                computerScore++
                computerResult.textContent = `Computer: ${computerScore}`;
                gameplay.textContent = `LOSE! You played ${humanChoice}, but the computer played ${computerChoice}.`
            }
        }
    }

    function declareWinner() {
        if ((humanScore === 5) || (computerScore === 5)) {
            gameplay.remove();
            if (humanScore > computerScore) {
                outcome.textContent = `WINNER! Your final score is: ${humanScore}`;
                console.log("WINNER! Your score is: " + humanScore);
                console.log("The computer score is: " + computerScore);
            } else if (humanScore < computerScore) {
                outcome.textContent = `LOSE! The computer wins!`;
                console.log("You lost! Your score is: " + humanScore);
                console.log("The computer score is: " + computerScore);
            } else if (humanScore === computerScore) {
                outcome.textContent = `It's a tie! You didn't beat the computer.`;
                console.log("It's a tie! You didn't beat the computer.");
            }
        }
    }

    computerChoice = getComputerChoice(3);

    if ((humanScore < 5) && (computerScore <5)) {
        checkMoves();
        declareWinner();
    } else {
        declareWinner();
    }
}

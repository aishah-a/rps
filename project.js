// Set computer move at random
    /* 
        math.random gives a number between 0 and 1
        use math.floor to round number into non-floating point (integer)
        multiply output by 3 to get a number between 0 and 2 (3 is excluded)
    */


// FUNCTION MUST BE CALLED WITH 3 AS ARGUMENT
function getComputerChoice(max) {
    let number = Math.floor(Math.random() * max);
    // console.log(number);

    // assign numbers 0, 1, 2 to ROCK, PAPER and SCISSORS
    // random number determines computer move

    let computerChoice;
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

// Get player move
// take input from player
// make sure input is correct
    // type: string
    // case sensitivity
    // only "rock", "PAPER" and "SCISSORS" as input


function getHumanChoice() {

    let input;

// get input from player
    function getInput() {
        input = prompt("Your turn: ROCK, PAPER or SCISSORS? Enter your choice.");

        if (input !== null && input !== undefined && input !== "") {
            // normalize case sensitivity
            input = input.toUpperCase();
            return input;
        } else if (input === "" || input == undefined || input == "" ) {
            getInput();
            return input;
        }
    }
    
// check input is one of three moves

    function checkInput() {
        if (input !== "ROCK" && input !== "PAPER" && input !== "SCISSORS") {
            alert("Please choose \"ROCK\", \"PAPER\", or \"SCISSORS\".");
            getInput();
            checkInput();
        }
    }

    getInput();
    checkInput();
    console.log(input);


    // store input in a humanChoice variable, for gameplay

    let humanChoice;
    switch (input) {
        case "ROCK":
            humanChoice = input;
        break;
        case "PAPER":
            humanChoice = input;
        break;
        case "SCISSORS":
            humanChoice = input;
        break;
    }
    return humanChoice;

}

function playGame() {

    // create score variables
    let humanScore = 0;
    let computerScore = 0;

    // play round
    // check score at end of each round
    // if player OR computer score = 5, stop game
    let gameRound = 1;
    
    for (let i = 0; i < 5; i++) {
        console.log("Round: " + gameRound);
        playRound();
        gameRound++;
        checkScore();
    }

    // Check if player move beats computer - PLAY A ROUND
    function playRound() {
        // get computer move
        
        const computerChoice = getComputerChoice(3);
        // get player move
        const humanChoice = getHumanChoice();
    
        // compare moves
        // if player move and computer move are the same, display tie message
        if (humanChoice === computerChoice) {
            console.log("Tie! You both played " + humanChoice);
        } else if (
            // if player move beats computer move, display player win message
            (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (humanChoice === "PAPER" && computerChoice === "ROCK") ||
            (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
            console.log("You win! You played " + humanChoice + ". The computer played " + computerChoice);
            humanScore++
        } else {
            // if player move loses to computer move, display computer win message
            console.log("You lose! You played " + humanChoice + ". The computer played " + computerChoice);
            computerScore++
        }
    
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    
    // declare winner
    // check score after 5 rounds

    function checkScore() {
        if (gameRound === 6) {
            if (humanScore > computerScore) {
                console.log("WINNER! Your score is: " + humanScore);
                console.log("The computer score is: " + computerScore);
            } else if (humanScore < computerScore) {
                console.log("You lost! Your score is: " + humanScore);
                console.log("The computer score is: " + computerScore);
            } else if (humanScore === computerScore) {
                console.log("It's a tie! You didn't beat the computer.");
            }
        }
    }


    // ask to play again?
    // reset game

}
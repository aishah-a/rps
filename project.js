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
            console.log("wrong!");
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

// Check if player move beats computer - PLAY A ROUND

// create score variables
let humanScore = 0;
let computerScore = 0;

// gameplay

function playRound() {
    // get computer move
    
    const computerChoice = getComputerChoice(3);
    // get player move
    const humanChoice = getInput();

    console.log("Your move: " + humanChoice);
    console.log("Computer move: " + computerChoice);

    // compare moves
    // if player move and computer move are the same, display tie message
    if (humanChoice === computerChoice) {
        console.log("tie!");
    } else if (
        // if player move beats computer move, display player win message
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        console.log("You win!");
        humanScore++
    } else {
        // if player move loses to computer move, display computer win message
        console.log("You lose!");
        computerScore++
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}



function playGame() {
    // play round
    // check score at end of each round
    // if player OR computer score = 5, stop game
    // declare winner
    // ask to play again?
    // reset game
        let gameRound = 1;
        console.log("Round: " + gameRound);
    
        for (let i = 0; i <= 5; i++) {
            playRound();
            gameRound++;
            console.log("Round: " + gameRound);
        }   
    }

   
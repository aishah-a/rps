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

    // assign numbers 0, 1, 2 to rock, paper and scissors
    // random number determines computer move

    let computerChoice;
    switch (number) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
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
    // only "rock", "paper" and "scissors" as input


function getHumanChoice() {

    let input = prompt("Your turn: rock, paper or scissors? Enter your choice.");

    // normalize input
    input = input.toLowerCase();
    
    // check input is one of three moves
    if (input !== "rock" && input !== "paper" && input !== "scissors") {
        alert("Please choose \"rock\", \"paper\", or \"scissors\".");
        input = prompt("Your turn: rock, paper or scissors? Enter your choice.");
    }

    let humanChoice;
    switch (input) {
        case "rock":
            humanChoice = input;
        break;
        case "paper":
            humanChoice = input;
        break;
        case "scissors":
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
    const humanChoice = getHumanChoice();

    console.log("You played " + humanChoice);
    console.log("The computer played " + computerChoice);

    // compare moves
    // if player move and computer move are the same, display tie message
    if (humanChoice === computerChoice) {
        console.log("tie!");
    } else if (
        // if player move beats computer move, display player win message
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win!");
    } else {
        // if player move loses to computer move, display computer win message
        console.log("You lose!");
    }
}


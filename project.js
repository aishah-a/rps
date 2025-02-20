// Set computer move at random
    /* 
        math.random gives a number between 0 and 1
        use math.floor to round number into non-floating point (integer)
        multiply output by 3 to get a number between 0 and 2 (3 is excluded)
    */

function getComputerChoice(max) {
    let number = Math.floor(Math.random() * max);
    console.log(number);

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

    switch (input) {
        case "rock":
            console.log("you played " + input);
        break;
        case "paper":
            console.log("you played " + input);
        break;
        case "scissors":
            console.log("you played " + input);
        break;
    }

}

// Check if player move beats computer - PLAY A ROUND

// create score variables

let humanScore = 0;
let computerScore = 0;

// gameplay

function playRound(humanChoice, computerChoice) {
    

}


// if player move and computer move are the same, display tie message
// if player move beats computer move, display player win message
// if player move loses to computer move, display computer win message

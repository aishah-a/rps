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
    return computerChoice;
}

// Get player move
// take input from player
// make sure input is correct
    // type: string
    // case sensitivity
    // only "rock", "paper" and "scissors" as input

function getHumanChoice() {
    
    let humanInput = prompt("Your turn: rock, paper or scissors? Enter your choice.");

    // normalize input
    humanInput = humanInput.toLowerCase();
    console.log(humanInput);

    // check input is one of three moves
    if (humanInput !== "rock" && humanInput !== "paper" && humanInput !== "scissors") {
        alert("Please choose \"rock\", \"paper\", or \"scissors\".");
        getHumanChoice();
    }
    // check player input
    let humanChoice;
    switch (humanInput) {
        case "rock":
            humanChoice = "rock"
            console.log("You played " + humanChoice);
            break;
        case "paper":
            humanChoice = "paper"
            console.log("You played " + humanChoice);
            break;
        case "scissors":
            humanChoice = "scissors"
            console.log("You played " + humanChoice);
            break;
    }

}

// Display computer move
// Check if player move beats computer
// if player move and computer move are the same, display tie message
// if player move beats computer move, display player win message
// if player move loses to computer move, display computer win message

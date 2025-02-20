# TOP-calculator

## Assignment
**Step 1: Write the logic to get the computer choice** <br>
Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

**Step 2: Write the logic to get the human choice** <br>
Your game will be played by a human player. You will write a function that takes the user choice and returns it.

**Step 4: Declare the players score variables** <br>
Your game will keep track of the players score. You will write variables to keep track of the players score.

## Planning
The game will be played entirely in the console, however the user input will be obtained through the main browser window.
### Pseudocode
* 3 possible moves: rock, paper, scissors
* 1 player vs. computer

#### Gameplay
  - Set computer move at random
  - Get player move
    + make sure input is correct
    + ensure type is string _(prompt() always returns a string as input)_
    + only "rock", "paper" and "scissors" accepted as input
    + case sensitivity issues
  - Display computer move
  - Check if player move beats computer
    + if player move and computer move are the same, display tie message
    + if player move beats computer move, display player win message
    + if player move loses to computer move, display computer win message

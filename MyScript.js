// getting the computers random selection
function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissor'];
    const randomSelection = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomSelection];
}

// Playing a single round of the game
function playRound(playerSelection, computerSelection) {
    // Changing the player's selection to lower-case to make it case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Determining the winner
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissor' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissor')
    ) {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
}

// Function to play a 5 round game
function game() {  
    let playerScore = 0; // declare player score and assign its initial value  to zero
    let computerScore = 0; // declare computer score and assign its initial value to zero

    for (let i = 0; i < 5; i++) { // use the for loop to restrict the conditions between 1-5 instances and to loop over the game
        const playerSelection = prompt('What is your choice?'); // call the declared playerSelection variable as it was declared and assigned to the value of prompt()
        const computerSelection = getComputerChoice(); // call the computerSelection variable as it was assigned to the getComputerChoice function
        const result = playRound(playerSelection, computerSelection); // declare a new variable result and assign it to the playRound function
        console.log(result); // print out the result

        if (result.includes('win')) { // create an if statement to know whether the player has won the round. Use the JavaScript include function to determine this
            playerScore++; // add 1 to player score 
        } else if (result.includes('lose')) { // use the JavaScript include function to know if the player has lost the round
            computerScore++; // add the 1 to computerScore
        }
    }

    if (playerScore > computerScore) {  // use if statement to print out if the player has won or lose the game
        console.log('Congratulations! You win the game.');
    } else if (computerScore > playerScore) { // use else if to print out if the player has lost the game
        console.log('Sorry! You lose the game.');
    } else { // use else to print a tie
        console.log("It's a tie game.");
    }
}

// Start the game
game();

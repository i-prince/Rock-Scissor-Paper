// getting the computers random selection
function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissor'];
    const randomSelection = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomSelection];
}
console.log(getComputerChoice());

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
const playerSelection = prompt('what your choice?');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



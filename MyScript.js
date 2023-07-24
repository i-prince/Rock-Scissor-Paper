// getting the computers random selection
function getComputerChoice() {
    const computerChoice = ['Rock', 'Paper', 'Scissor'];
    const randomSelection = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomSelection];
}
console.log(getComputerChoice());



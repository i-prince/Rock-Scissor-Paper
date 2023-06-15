//My external JavaScript

//Prompting the browser to printout "Hello World"
console.log ("Hello World");

//Telling the computer to pick its choice that will return either: Rock, Scissor or Paper
function getComputerChoice (choice){
    return choice + " is my selection!"

}
console.log(getComputerChoice ("Rock"))

//defining the selections
const playerSelection = "Paper";
const computerSelection = getComputerChoice

//A function playing a single round of the game
function firstRound (playerSelection, computerSelection){
    var lowerCase = playerSelection.toLowerCase() //converting user selection to lowercase
}

console.log(firstRound (playerSelection, computerSelection));

//looping the firstRound to create the game
/*function game(firstRound){
    prompt("what is your choice?", "hello user!")
}*/

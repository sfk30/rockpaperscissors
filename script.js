let arr = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return (arr[Math.floor(Math.random() * arr.length)]);
}

let computerSelection = getComputerChoice();

console.log(computerSelection);

function yourChoice() {
     return prompt('Pick rock, paper or scissors?').toLowerCase();
}

let playerSelection = yourChoice();

console.log(playerSelection);

    function roundOne(computerSelection, playerSelection) {
        if (computerSelection === playerSelection) { 
            console.log('It\'s a draw!');
        }   else if (computerSelection === 'rock' && playerSelection === 'paper') {
            console.log('You lose! Rock beats paper!')
        }   else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            console.log('You lose! Scissors beats paper!')
        }   else if (computerSelection === 'paper' && playerSelection === 'scissors') {
            console.log('You win! Scissors beats paper!')
        }   else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            console.log('You lose! Rock beats scissors!')
        }   else if (computerSelection === 'scissors' && playerSelection === 'rock') {
            console.log('You win! Rock beats scissors!')
        }   else if (computerSelection === 'paper' && playerSelection === 'rock') {
            console.log('You win! Rock beats paper!')
        }   else {
            console.log('Error please try again')
        }
    }

roundOne(computerSelection, playerSelection); 

// if you run just roundOne() with no arguments you get draw always as computerSelection and 
// player selection are undefined so computerSelection === playerSelection is always true as 
// undefined ==== undefined
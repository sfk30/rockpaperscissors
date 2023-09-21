let arr = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

let computerSelection = getComputerChoice();

let youChoose = prompt('Pick rock, paper or scissors?', '');
let playerSelection = youChoose.toLowerCase();

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
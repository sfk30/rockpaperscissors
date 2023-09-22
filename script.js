let arr = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return (arr[Math.floor(Math.random() * arr.length)]);
}

let computerSelection = getComputerChoice();

// console.log(computerSelection);

function yourChoice() {
     return prompt('Pick rock, paper or scissors?').toLowerCase();
}

let playerSelection = yourChoice();

// console.log(playerSelection);

let computerScore = 0;
let playerScore = 0;

    function playRound(computerSelection, playerSelection) {
        if (computerSelection === playerSelection) { 
            console.log('It\'s a draw!');
        }   else if (computerSelection === 'rock' && playerSelection === 'paper') {
            console.log('You lose! Rock beats paper!')
            computerScore ++;
        }   else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            console.log('You lose! Scissors beats paper!')
            computerScore ++;
        }   else if (computerSelection === 'paper' && playerSelection === 'scissors') {
            console.log('You win! Scissors beats paper!')
            playerScore ++;
        }   else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            console.log('You lose! Rock beats scissors!')
            computerScore ++;
        }   else if (computerSelection === 'scissors' && playerSelection === 'rock') {
            console.log('You win! Rock beats scissors!')
            playerScore ++;
        }   else if (computerSelection === 'paper' && playerSelection === 'rock') {
            console.log('You win! Rock beats paper!')
            playerScore ++;
        }   else {
            console.log('Error please try again')
        }
    }

// playRound(computerSelection, playerSelection);
// playRound(computerSelection, playerSelection); 

// if you run just roundOne() with no arguments you get draw always as computerSelection and 
// player selection are undefined so computerSelection === playerSelection is always true as 
// undefined ==== undefined


function game() {
    for (i = 1; i <= 5; i ++) {
        let computerSelection = getComputerChoice();
        let playerSelection = yourChoice();
        playRound(computerSelection, playerSelection)
    }   
    if (playerScore > computerScore) {
        console.log(`player score = ${playerScore}, computer score = ${computerScore}, Player wins!`)
    }   else {
        console.log(`player score = ${playerScore}, computer score = ${computerScore}, Computer wins!`)
    }
}

game();



// if (counter >= 3) {
//     console.log('You win!')
// }   else {
//     console.log('You lose!')
// }
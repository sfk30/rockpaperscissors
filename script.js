let arr = ['rock', 'paper', 'scissors']

// function getComputerChoice() {
//     return (arr[Math.floor(Math.random() * arr.length)]);
// }

// using arrow notation instead, takes in 0 arguments hence ()

// let getComputerChoice = () => (arr[Math.floor(Math.random() * arr.length)]);


// const computerSelection = getComputerChoice();

// console.log(computerSelection);

// function yourChoice() {
//      return prompt('Pick rock, paper or scissors?').toLowerCase();
// }

// Using arrow notation instead 

// yourChoice = () => prompt('Pick rock, paper or scissors?').toLowerCase();


// const playerSelection = yourChoice();

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

// if you run just roundOne() with no arguments you get draw always as computerSelection and 
// player selection are undefined so computerSelection === playerSelection is always true as 
// undefined ==== undefined


function game() {
    // for (i = 1; i <= 5; i ++) {}
        const computerSelection = getComputerChoice();
        const playerSelection = yourChoice();
        playRound(computerSelection, playerSelection)
 
    if (playerScore > computerScore) {
        alert(`Player score = ${playerScore},\nComputer score = ${computerScore},\nPlayer wins!`)
    }   else if (playerScore < computerScore) {
        alert(`Player score = ${playerScore},\nComputer score = ${computerScore},\nComputer wins!`)
    }   else {
        alert(`Player score = ${playerScore},\nComputer score = ${computerScore},\nIt's a tie!`)
    }
}

// game();



// if (counter >= 3) {
//     console.log('You win!')
// }   else {
//     console.log('You lose!')
// }

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.className
        let getComputerChoice = () => (arr[Math.floor(Math.random() * arr.length)]);
        const computerSelection = getComputerChoice();
        results.textContent = `Computer chose ${computerSelection} and you chose ${playerSelection}`
        playRound(computerSelection, playerSelection)
        counters.textContent = `Computer score : ${computerScore}, player score : ${playerScore}`
        if (computerScore == 5) {
            endResult.textContent = 'Computer wins!'
        }   else if (playerScore == 5) {
            endResult.textContent = 'You win!'
        }   else {
            return;
        }
    })
})

const container = document.querySelector('#container')
const results = document.createElement('div')
results.setAttribute('style', 'color: black; background: pink; margin-top: 20px;')
container.appendChild(results);

const counters = document.createElement('div')
counters.setAttribute('style', 'color: white; background: black; margin-top: 20px')
container.appendChild(counters)

const endResult = document.createElement('div')
endResult.setAttribute('style', 'color: white; background: blue; margin-top: 20px')
container.appendChild(endResult)
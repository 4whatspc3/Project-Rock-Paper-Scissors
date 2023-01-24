
function getComputerChoice() {
    // get a random number
    const min = 0,
          max = 2;

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    // get a random word
    const rockPaperScissors = ['rock','paper','scissors'];

    return rockPaperScissors[getRndInteger(min, max)];
}

let computerSelection = getComputerChoice();
let playerSelection = 'rock';

function playRound(computerSelection, playerSelection){
    // rename parameters to make comparisons easier
    const c = computerSelection,
          p = playerSelection;
    // a new variable to store the result
    let result;

    if (c === p) {
        result = `Draw`;
    } else if (c == 'rock' && p == 'scissors' || 
               c == 'paper' && p == 'rock' || 
               c == 'scissors' && p == 'paper') {
                    result = `You Lose! ${c} beats ${p}`;
    } else {
        result = `You Won! ${p} beats ${c}`;
    }

    return result;
}

console.log(playRound(computerSelection, playerSelection))
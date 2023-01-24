
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

console.log(computerSelection)
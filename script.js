
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

// to play a single round
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

// to play a five round game
function game(){
    let computerScore = 0,
        playerScore = 0;

    //for(let j=0;j < 1; j++){
        for(let i=0; i < 5; i++){
            getComputerChoice();
            computerSelection = getComputerChoice();
            
            console.log(playRound(computerSelection,playerSelection));

            
            part = playRound(computerSelection, playerSelection).slice(0, 5);

            if (part == 'You W') {
                ++playerScore;
            } else if (part == 'You L') {
                ++computerScore;
            } else {
                playerScore += 0, 
                computerScore += 0;
            }
        }

        if (computerScore > playerScore) {
            finalMessage = 'You lose the game =('; 
        } else if (playerScore > computerScore) {
            finalMessage = 'You won the game =)';
        } else {
            finalMessage = 'Draw -_-';
        }

    return finalMessage;
}


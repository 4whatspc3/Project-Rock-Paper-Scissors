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

// to play a single round
function playRound(computerSelection, playerSelection){
    // rename parameters to make comparisons easier
    let c = computerSelection;
    let p = playerSelection;
    
    // a new variable to store the result
    let result;

    if (c == p) {
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

function result(computerSelection, playerSelection){

    const content = document.querySelector('div');

    content.textContent = `${playRound(computerSelection,playerSelection)}
        
    Player: ${playerScore} | Computer: ${computerScore}`;

    return content;
}

function finalMessage(){
    const content = document.querySelector('div');

    const message = document.createElement('div');

    message.classList.add('message');

    message.textContent = `${finalText}
    
    Click any button to start again!`;

    return content.appendChild(message);
}

const btn = document.querySelectorAll('button');

let count = false,
    computerScore = 0,
    playerScore = 0,
    part,
    finalText;

btn.forEach(button => {
    
    button.addEventListener('click', (e) => {
        
        if (e.target.matches('.rock')) {
            playerSelection = 'rock';
        }

        if (e.target.matches('.paper')) {
            playerSelection = 'paper';
        }

        if (e.target.matches('.scissors')) {
            playerSelection = 'scissors';
        }

        let computerSelection = getComputerChoice();

        part = playRound(computerSelection, playerSelection).slice(0, 5);

        if (part == 'You W') {
            ++playerScore;
        } else if (part == 'You L') {
            ++computerScore;
        } else {
            playerScore += 0, 
            computerScore += 0;
        }

        result(computerSelection, playerSelection);

        if (playerScore == 5) {
            finalText = 'You won the game =)';
            finalMessage();
            
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            finalText = 'You lose the game =(';
            finalMessage();

            playerScore = 0;
            computerScore = 0;
        }
    });
})
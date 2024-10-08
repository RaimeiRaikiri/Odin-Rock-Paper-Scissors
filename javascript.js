function getComputerChoice()
{
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
        default:
            return 'Not Working'
    }
}

        
let humanWins = 0
let computerWins = 0
const winLoseDiv = document.createElement('div');
winLoseDiv.setAttribute('id', 'winLoseDiv');
let disableGame = false;

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
        
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
        
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';

const runningScores = document.querySelector('#running-scores');
const humanScore = document.querySelector('.human');
const computerScore = document.querySelector('.computer');
const resultsDiv = document.querySelector('#Results');
const results =  document.querySelector('#Results>p');
const buttonsDiv = document.querySelector('#buttons');

buttonsDiv.appendChild(rockButton);
buttonsDiv.appendChild(paperButton);
buttonsDiv.appendChild(scissorsButton);

rockButton.addEventListener('click', () => playRound('rock', getComputerChoice(),disableGame));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice(),disableGame));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice(),disableGame));

function createWinLossScreen (humanWins)
{
    disableGame = true
    winLoseDiv.style.cssText = 
    `display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 25vh; 
    height: 50vh; 
    background-color:black;
    border-radius: 12px;
    z-index:1`;

    const winLoseHeading = document.createElement('h1');
    winLoseHeading.style.cssText = `color: white; margin-bottom: 5vh;`;

    const winLoseText = document.createElement('p');
    winLoseText.style.cssText = `color:white; margin-bottom: 5vh`;

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again?';
    playAgainButton.setAttribute('id', 'playAgain')
    playAgainButton.addEventListener('click', ()=> resetGame())
    
    winLoseDiv.appendChild(winLoseHeading);
    winLoseDiv.appendChild(winLoseText);
    winLoseDiv.appendChild(playAgainButton)

    if (humanWins) {
        winLoseHeading.textContent = 'Winner!';
        winLoseText.textContent = "Congratulation you beat the computer!";
        document.body.appendChild(winLoseDiv);
    }
    else
    {
        winLoseHeading.textContent = 'Loser!';
        winLoseText.textContent = "Congratulation you lost to the computer!";
        document.body.appendChild(winLoseDiv);
    }
}

function resetGame(){
    humanWins = 0;
    computerWins = 0;
    humanScore.textContent = 'Human Score: ' + humanWins;
    computerScore.textContent = 'Computer Score: ' + computerWins;

    while (winLoseDiv.firstChild) 
        {
            winLoseDiv.removeChild(winLoseDiv.firstChild);
        }
    document.body.removeChild(winLoseDiv);
    disableGame = false;
}
function winner() {
    if (humanWins === 5 || computerWins === 5)
        {
            if (humanWins === 5)
                {
                    createWinLossScreen(true);
                }
            else
                {
                   createWinLossScreen(false);
                }
            }
        }

function playRound(humanChoice, computerChoice, disableGame)
{
    if (disableGame)
    {

    }
    else
    {
        if (humanChoice == 'incorrect' || computerChoice == 'Not Working')
        {
            results.textContent = 'Something went wrong try again'
            humanScore.textContent = 'Human Score: ' + humanWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            winner();
        }
        else if (humanChoice === computerChoice)
        {
            results.textContent = 'You drew with the computer'
            humanScore.textContent = 'Human Score: ' + humanWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            winner();

        }
        else if (humanChoice === 'rock' && computerChoice === 'paper')
        {
            results.textContent = 'You lose this round, computer chose paper'
            computerWins += 1;
            humanScore.textContent = 'Human Score: ' + humanWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            winner();


        }
        else if (humanChoice === 'rock' && computerChoice === 'scissors')
        {
            results.textContent = 'You win this round! Computer chose scissors'
            humanWins += 1;
            humanScore.textContent = 'Human Score: ' + humanWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            winner();

        }
        else if (humanChoice === 'scissors' && computerChoice === 'rock')
        {
            results.textContent = 'You lose this round, computer chose rock'
            computerWins += 1;
            humanScore.textContent = 'Human Score: ' + humanWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            winner();


        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper')
        {
            results.textContent = 'You win this round! Computer chose paper'
            humanWins += 1;
            humanScore.textContent = 'Human Score: ' + humanWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            winner();


        }
        else if (humanChoice === 'paper' && computerChoice === 'scissors')
        {
            results.textContent = 'You lose this round, computer chose scissors'
            computerWins += 1;
            humanScore.textContent = 'Human Score: ' + humanWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            winner();


        }
        else if (humanChoice === 'paper' && computerChoice === 'rock')
        {
            results.textContent = 'You win this round! Computer chose rock'
            humanWins += 1;
            humanScore.textContent = 'Human Score: ' + humanWins;
            computerScore.textContent = 'Computer Score: ' + computerWins;
            winner();

        }
    }
}
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
buttonsDiv.appendChild(scissorsButton);
buttonsDiv.appendChild(paperButton);
        
rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));

function createWinLossScreen (humanWins)
{
    const winLoseDiv = document.createElement('div');
    winLoseDiv.style.cssText = 
    `display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 25vw;
    top: 25vh; 
    width: 50vw; 
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
    playAgainButton.style.cssText = 'width:8vw; height: 8vh;'

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
        winLoseHeading.textContent = 'Winner!';
        winLoseText.textContent = "Congratulation you beat the computer!";
        document.body.appendChild(winLoseDiv);
    }
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

function playRound(humanChoice, computerChoice)
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
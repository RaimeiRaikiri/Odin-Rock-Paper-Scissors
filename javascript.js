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
function getHumanChoice()
{
    // Take user input and make it case insensitive
    let move = prompt("Declare your move! Rock, paper or scissors").toLowerCase()
    switch (move)
    {
        case 'rock':
            return 'rock'
        case 'scissors':
            return 'scissors'
        case 'paper':
            return 'paper'
            default:
                return 'incorrect'
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

const runningScores = document.createElement('div');
        
const resultsDiv = document.createElement('div');

document.body.appendChild(resultsDiv);
document.body.appendChild(runningScores);
document.body.appendChild(rockButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(paperButton);
        
rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));

function winner() {
    if (humanWins === 5 || computerWins === 5)
        {
            resultsDiv.appendChild(runningScores);

            if (humanWins === 5)
                {
                    const finalWinner = document.createElement('p');
                    finalWinner.textContent = 'Final winner is the human';
                    resultsDiv.appendChild(finalWinner);
                }
            else
                {
                    const finalWinner = document.createElement('p');
                    finalWinner.textContent = 'Final winner is the computer';
                    resultsDiv.appendChild(finalWinner);
                }
            }
        }

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == 'incorrect' || computerChoice == 'Not Working')
    {
        resultsDiv.textContent = 'Something went wrong try again'
        runningScores.textContent = 'Human Score: ' + humanWins + ' Computer Score: ' + computerWins;
        winner();
    }
    else if (humanChoice === computerChoice)
    {
        resultsDiv.textContent = 'You drew with the computer'
        runningScores.textContent = 'Human Score: ' + humanWins + ' Computer Score: ' + computerWins;
        winner();

    }
    else if (humanChoice === 'rock' && computerChoice === 'paper')
    {
        resultsDiv.textContent = 'You lose this round, computer chose paper'
        computerWins += 1;
        runningScores.textContent = 'Human Score: ' + humanWins + ' Computer Score: ' + computerWins;
        winner();


    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        resultsDiv.textContent = 'You win this round! Computer chose scissors'
        humanWins += 1;
        runningScores.textContent = 'Human Score: ' + humanWins + ' Computer Score: ' + computerWins;
        winner();

    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
    {
        resultsDiv.textContent = 'You lose this round, computer chose rock'
        computerWins += 1;
        runningScores.textContent = 'Human Score: ' + humanWins + ' Computer Score: ' + computerWins;
        winner();


    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        resultsDiv.textContent = 'You win this round! Computer chose paper'
        humanWins += 1;
        runningScores.textContent = 'Human Score: ' + humanWins + ' Computer Score: ' + computerWins;
        winner();


    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors')
    {
        resultsDiv.textContent = 'You lose this round, computer chose scissors'
        computerWins += 1;
        runningScores.textContent = 'Human Score: ' + humanWins + ' Computer Score: ' + computerWins;
        winner();


    }
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        resultsDiv.textContent = 'You win this round! Computer chose rock'
        humanWins += 1;
        runningScores.textContent = 'Human Score: ' + humanWins + ' Computer Score: ' + computerWins;
        winner();

    }
}
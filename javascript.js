let humanScore = 0
let computerScore = 0

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

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == 'incorrect' || computerChoice == 'Not Working')
    {
        console.log('Something went wrong try again')
    }
    else if (humanChoice === computerChoice)
    {
        console.log('You drew with the computer')
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper')
    {
        console.log('You lose this round, computer chose paper')
        computerScore++
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        console.log('You win this round! Computer chose scissors')
        humanScore++
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
    {
        console.log('You lose this round, computer chose rock')
        computerScore++
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        console.log('You win this round! Computer chose paper')
        humanScore++
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors')
    {
        console.log('You lose this round, computer chose scissors')
        computerScore++
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        console.log('You win this round! Computer chose rock')
        humanScore++
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
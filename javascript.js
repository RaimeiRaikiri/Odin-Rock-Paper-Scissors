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
        return -1
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        console.log('You win this round! Computer chose scissors')
        return 1
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
    {
        console.log('You lose this round, computer chose rock')
        return -1
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        console.log('You win this round! Computer chose paper')
        return 1
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors')
    {
        console.log('You lose this round, computer chose scissors')
        return -1
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        console.log('You win this round! Computer chose rock')
        return 1
    }
}

function playGame()
{
    let computerScore = 0
    let humanScore = 0
    
    let rounds = 5
    // Complete 5 rounds of the game
    for (let i = 0; i < rounds; i++)
    {
        // Take a different input from computer and human each iteration
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        let scoreIncreaseOrDecrease = 0
        
        // Determines the winner, loser of a round or the case of a draw
       
        scoreIncreaseOrDecrease = playRound(humanSelection, computerSelection);  
        if (scoreIncreaseOrDecrease === 1)
        {
            humanScore++
        } 
        else if (scoreIncreaseOrDecrease === -1)
        {
            computerScore++
        }
        else
        {
            // If there is a draw increase the number of rounds to determine winner or loser of 5 rounds
            rounds++
        }
    }

    console.log('Human score is: ' + humanScore)
    console.log('Computer score is: ' + computerScore)

}

playGame()
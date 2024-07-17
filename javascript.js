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

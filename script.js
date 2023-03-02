// code here

// function that implements a 5 round game and keeps score

function game(){
    
    //these two variables will keep the score
    let computerScore = 0;
    let playerScore = 0;

    for (let i=0; i<2; i++)
    {
        //we prompt the user for input
        let playerSelection = prompt("Please enter rock, paper or scissors: ");
        //play one round and decide who wins, also increment the score of the winner.
        playRound(playerSelection,getComputerChoice())? playerScore++ : computerScore++;
    }

    console.log(`The final score is: ${playerScore} to ${computerScore}`);
    if(playerScore == computerScore)
    {
    console.log("Draw!!!");
    return;
    }
    console.log((playerScore > computerScore)? "Player wins!" : "Computer wins!");
}

// function that implements a round\
// if the function returns 0, then computer won. Else, if it returns 1, then player won.
function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLocaleLowerCase() == "paper")
    {
        console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
        return 0;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLocaleLowerCase() == "scissors") 
    {
        console.log(`Player wins, ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLocaleLowerCase() == "scissors")
    {
        console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
        return 0;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLocaleLowerCase() == "rock")
    {
        console.log(`Player wins, ${playerSelection} beats ${computerSelection}`);    
        return 1;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLocaleLowerCase() == "rock")
    {
        console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
        return 0;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLocaleLowerCase() == "paper")
    {
        console.log(`Player wins, ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
}


// function that returns computers choice
function getComputerChoice(){
    let a = Math.random();

    if(a >= 0.66)
    return 'Rock';
    return a < 0.33? 'Paper':'Scissors'
}

game();
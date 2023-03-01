// code here

// function that implements a round
function playRound(playerSelection, computerSelection){
}


// function that returns computers choice
function getComputerChoice(){
    let a = Math.random();

    if(a >= 0.66)
    return 'Rock';
    return a < 0.33? 'Paper':'Scissors'
}

const playerChoice = "rock";
const computerChoice = getComputerChoice();
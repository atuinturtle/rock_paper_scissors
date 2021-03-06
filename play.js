function computerPlay() {
    let random = getRndInteger(1, 3);
    if (random === 3) {
        return 'Rock'
    } else if (random === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You lose! Rock beats Scissors';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You lose! Paper beats Rock';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You lose! Scissors beats Paper';
    } else {
        return 'Draw!';
    }   
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let round = playRound(prompt(), computerPlay());
        let verdict = round.slice(0, 9);
        console.log(round);
        if (verdict === 'You win! ') {
            playerScore++;
        } else if (verdict === "You lose!") {
            computerScore++;
        }
    }
    console.log('Score: ' + playerScore + '-' + computerScore)
}
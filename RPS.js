let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'; 
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;
            return 'Sorry, computer won!';
        } else {
            playerScore += 1;
            return 'Congratulations, you won!';
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore += 1;
            return 'Sorry, computer won!';
        } else {
            playerScore += 1;
            return 'Congratulations, you won!';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerPlay === 'rock') {
            computerScore += 1;
            return 'Sorry, computer won!';
        } else {
            playerScore += 1;
            return 'Congratulations, you won!';
        }
    }

    if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
        playerScore -= 1;
        return "Oops! For misspelling one point is taken back!"
    }
}


function game() {
   for(let i = 1; i <6; i++) {
        let playerSelectionInput = prompt(`Round of ${i} of 5. What is your choice? Rock, paper, or scissors?`);
        let playerSelection = playerSelectionInput.toLowerCase();
        let computerSelection = computerPlay();

        alert(`You chose ${playerSelection} and computer chose ${computerSelection}. ${playRound(playerSelection,computerSelection)}`);

        if (i < 5) {
            alert(`The score is ${playerScore} to ${computerScore}`)
        }   else {
            if (playerScore > computerScore) {
                alert (`After 5 rounds of play, you beat the computer with a final score of ${playerScore} to ${computerScore}`)
            } else if (playerScore < computerScore) {
                alert (`After 5 rounds of play, you lost to the computer with a final score of ${playerScore} to ${computerScore}`)
            } else {
                alert (`After 5 rounds of play, you tied with the computer with a final score of ${playerScore} to ${computerScore}`)
            }
        }
}
}

game()

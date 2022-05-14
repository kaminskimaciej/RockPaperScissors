
//  Setting up score variables in order to do count later for each round
let playerScore = 0;
let computerScore = 0;

// Function for computer randomly choosing between R,P, or S
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


// Function for round of play with output regarding to the strategy of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;  /* this will count scores if computer wins */
            return 'Sorry, computer won!';
        } else {
            playerScore += 1;  /* this will count scores if player wins */ 
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

    // Additional game future for wrong spelling! Beware! 
    if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
        playerScore -= 1;
        return "Oops! For misspelling one point is taken back!"
    }
}


// Main game function for 5 rounds using for loop 
function game() {
    for (let i = 1; i < 6; i++) {
        let playerSelectionInput = prompt(`Round of ${i} of 5. What is your choice? Rock, paper, or scissors?`);
        let playerSelection = playerSelectionInput.toLowerCase();
        let computerSelection = computerPlay();

        alert(`You chose ${playerSelection} and computer chose ${computerSelection}. ${playRound(playerSelection,computerSelection)}`);

        // For rounds up to 5th, alert is shown for current score. After 5th round, it calculates the total scores and shows up who won in the end
        if (i < 5) {
            alert(`Current score: ${playerScore} to ${computerScore}`)
        } else {
            if (playerScore > computerScore) {
                alert(`After 5 rounds of play, you beat the computer with a final score of ${playerScore} to ${computerScore}`)
            } else if (playerScore < computerScore) {
                alert(`After 5 rounds of play, you lost to the computer with a final score of ${playerScore} to ${computerScore}`)
            } else {
                alert(`After 5 rounds of play, you tied with the computer with a final score of ${playerScore} to ${computerScore}`)
            }
        }
    }
}

// Calling the function
game();

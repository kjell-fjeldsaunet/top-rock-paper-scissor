//Make list of possible choices
let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const computerScoreDisplay = document.querySelector('#computerScore');
const playerScoreDisplay = document.querySelector('#playerScore');
const resultDisplay = document.querySelector('#resultDisplay')


const buttons = document.querySelectorAll('.playBtn');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

function computerPlay() {
    //Get random number to use as index in result array
    let resultIndex = Math.floor(Math.random() * 3);
    return choices[resultIndex];
}

function playRound() {
    //Normalize player input
    let playerInput = this.id;
    playerInput = playerInput.replace(playerInput.charAt(0), playerInput.charAt(0).toUpperCase());
    //get computer input
    let computerInput = computerPlay();
    let resultText = "";
    //Solve ties
    if (playerInput == computerInput) {
        resultText = "Its a tie!";
    } else {
        //Make string with combined inputs
        let round = playerInput + computerInput;
        switch (round) {
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                resultText = `You Lose this round! ${computerInput} beats ${playerInput}.`;
                computerScore++;
                break;
            case "PaperRock":
            case "RockScissors":
            case "ScissorsPaper":
                resultText = `You Win this round! ${playerInput} beats ${computerInput}.`;
                playerScore++;
                break;
        }
    }

    if (computerScore >= 5) {
        resultText = `The computer won with ${computerScore} points to ${playerScore}. Try again!`;
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore >= 5) {
        resultText = `You won with ${computerScore} points to ${playerScore}! Try again if you dare`;
        computerScore = 0;
        playerScore = 0;
    }

    if (playerScore == 1) {
        playerScoreDisplay.textContent = `${playerScore} point`;
    } else {
        playerScoreDisplay.textContent = `${playerScore} points`;
    }

    if (computerScore == 1) {
        computerScoreDisplay.textContent = `${computerScore} point`;
    } else {
        computerScoreDisplay.textContent = `${computerScore} points`;
    }
    resultDisplay.textContent = resultText;
}
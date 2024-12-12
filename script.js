//! callin the buttons 
const btnPaper = document.getElementById("paper");
const btnRock = document.getElementById("rock");
const btnScissors = document.getElementById("scissors");

//* adding the  addEventListener and passing the argumente to each one of the paper rock .... 
btnPaper.addEventListener("click", () => handleClick("Paper"));
btnRock.addEventListener("click", () => handleClick("Rock"));
btnScissors.addEventListener("click", () => handleClick("Scissors"));

// * here we calling the Result
const finalResultPlayer = document.querySelector(".finalResultPlayer");
const finalResultComputer = document.querySelector(".finalResultComputer");
const resultText = document.getElementById("resultText");
// * here we calling the socre
const computerScoreDisplay = document.getElementById("computer-score");
const playerScoreDisplay = document.getElementById("player-score");
//* the choices are the p to change the when the button it been clicked for the payer and computer
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

//* craeting de var to count the score 
let playerScore = 0;
let computerScore = 0;

//* creating one array whit the multiple options
const options = ["Rock", "Paper", "Scissors"];

//* function to get the randor choice inside the options
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
//* var to be call when lose or win or tie 
let lose = "Uh-oh, you lost!";
let win = "Congratulations, you won!";
let tie = "It's a draw! Try again.";
//* functioo handle the click of the button and the logick of the game 
function handleClick(playerChoice) {
  //! gettting the option and called computer choice
  const computerChoice = getComputerChoice();

  //* to dlisplay whant I choice or the pc 
  playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;

  //* determinate who win or lose 
  if (playerChoice === computerChoice) {
    resultText.textContent = tie;
    resultText.classList.add('tie');
    resultText.classList.remove('win', 'lose');
  
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    resultText.textContent = win;
    resultText.classList.add('win');
    resultText.classList.remove('tie', 'lose');
    playerScore++;
  } else {
    //!remeber if u add one class remove after 
    resultText.textContent = lose;
    resultText.classList.add('lose');
    resultText.classList.remove('tie', 'win');
    console.log("Computer wins!");
    computerScore++;
  }
  //! calling the restet game 
  resetgame()
  //* reste the score 
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

finalPlayer = 0
finalComputer = 0
function resetgame() {
  if (playerScore >= 3) { 
    playerScore = "";
    computerScore = "";
    finalPlayer++;
    resultText.textContent = ""
    finalResultPlayer.textContent = ` Player: ${finalPlayer}`;
    playerChoiceDisplay.textContent = ""
    computerChoiceDisplay.textContent = ""
    playerScoreDisplay.textContent = ""
    computerScoreDisplay.textContent = ""
    alert('You win')
  }  else if(computerScore >= 3) {
    playerScore = "";
    computerScore = "";
    finalComputer++;
    resultText.textContent = ""
    finalResultComputer.textContent = `Computer: ${finalComputer}`;
    playerChoiceDisplay.textContent = ""
    computerChoiceDisplay.textContent = ""
     playerScoreDisplay.textContent = ""
    computerScoreDisplay.textContent = ""
    alert('You lose')
  }
}

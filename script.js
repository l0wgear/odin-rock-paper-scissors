const choices = ["rock", "paper", "scissors"];

const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
const playerResultElem = document.getElementById("player-result");
const computerResultElem = document.getElementById("computer-result");

const resultTextElem = document.querySelector(".current-results h1");
const scoreContainer = document.querySelector(
  ".current-results .score-container"
);

let playerScore = 0;
let computerScore = 0;

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getEmoji(choice) {
  if (choice == "rock") return "✊";
  else if (choice == "paper") return "✋";
  else if (choice == "scissors") return "✌";
  else return "🤔";
}

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userSelection, computerSelection) {
  userSelection = userSelection.toLowerCase();
  const userIndex = choices.indexOf(userSelection);
  if (userIndex === -1) return "Invalid user choice!";
  const computerIndex = choices.indexOf(computerSelection);
  if (userSelection.toLowerCase() === computerSelection) return `Draw!`;
  else if (
    userIndex - computerIndex === 1 ||
    userIndex - computerIndex === -choices.length + 1
  ) {
    return `You win!`;
  } else {
    return `Computer wins!`;
  }
}

function handleClick(e) {
  const userSelection =
    e.target.dataset.choice === undefined
      ? e.target.parentNode.dataset.choice
      : e.target.dataset.choice;
  const computerSelection = computerPlay();
  const result = playRound(userSelection, computerSelection);
  if (result == "You win!") playerScore++;
  else if (result == "Computer wins!") computerScore++;
  resultTextElem.textContent = result;
  playerScoreElem.textContent = playerScore;
  computerScoreElem.textContent = computerScore;
  playerResultElem.textContent = getEmoji(userSelection);
  computerResultElem.textContent = getEmoji(computerSelection);
  scoreContainer.style.display = "flex";
}

const choiceElements = document.querySelectorAll(".choice");
choiceElements.forEach((element) => {
  element.addEventListener("click", handleClick);
});

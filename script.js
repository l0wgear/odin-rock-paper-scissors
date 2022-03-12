const choices = ["rock", "paper", "scissors"];

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userSelection, computerSelection) {
  userSelection = userSelection.toLowerCase();
  const userIndex = choices.indexOf(userSelection);
  if (userIndex === -1) return "Invalid user choice!";
  const computerIndex = choices.indexOf(computerSelection);
  if (userSelection.toLowerCase() === computerSelection)
    return `Draw! Both you and computer chose ${userSelection}`;
  else if (
    userIndex - computerIndex === 1 ||
    userIndex - computerIndex === -choices.length + 1
  ) {
    return `You win! ${capitalize(userSelection)} beats ${computerSelection}`;
  } else {
    return `You lose! ${capitalize(computerSelection)} beats ${userSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let userSelection = window.prompt("Enter rock, paper or scissors");
    let computerSelection = computerPlay();
    let result = playRound(userSelection, computerSelection);
    console.log(result);
  }
}

game();

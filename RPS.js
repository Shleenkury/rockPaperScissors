//////////////////////variables declared///////////////////////
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let RANDOMNUMBER = Math.random();

  if (RANDOMNUMBER < 0.33) {
    COMPUTERCHOICE = "rock";
    console.log("rock");
  } else if (RANDOMNUMBER < 0.66) {
    COMPUTERCHOICE = "paper";
    console.log("paper");
  } else {
    COMPUTERCHOICE = "scissors";
    console.log("scissors");
  }
  return COMPUTERCHOICE;
}

///////////////////// round start//////////////////////////
function playRound() {
  let result;
  let COMPUTERCHOICE = getComputerChoice();
  let humanChoice = window.prompt("").toLowerCase();
  if (humanChoice === "scissors" && COMPUTERCHOICE === "paper") {
    result = "you win";
  } else if (humanChoice === "rock" && COMPUTERCHOICE === "scissors") {
    result = "you win";
  } else if (humanChoice === "paper" && COMPUTERCHOICE === "rock") {
    result = "you win";
  } else if (humanChoice === COMPUTERCHOICE) {
    result = "tie";
  } else result = "you lose";
  if (result === "you win") {
    humanScore++;
  } else if (result === "you lose") {
    computerScore++;
  }
  console.log("human Score: " + humanScore);
  console.log("computer Score: " + computerScore);
  return result;
}

function playGame() {
  playRound();
  

  if (humanScore === 5){
    console.log("You win!")
    return
  }

  if (computerScore === 5){
    console.log("You lose!")
    return
  }

  let playAgain = prompt("Play again?")

  if (humanScore < 5 || computerScore < 5) {
    playAgain
  }
  

  if (playAgain === "yes") {
    playRound();
  } else if (playAgain === "no") {
    console.log("game over");
  }


//////////////////////////////////////////////////////////////////
if (humanScore === 5){
  console.log("You win!")
  return
}

if (computerScore === 5){
  console.log("You lose!")
  return
}

let playAgainAgain = prompt("Play again?")

if (humanScore < 5 || computerScore < 5) {
  playAgainAgain
}


if (playAgainAgain === "yes") {
  playRound();
} else if (playAgainAgain === "no") {
  console.log("game over");
}





////////////////////////////////////////////////////////////
if (humanScore === 5){
  console.log("You win!")
  return
}

if (computerScore === 5){
  console.log("You lose!")
  return
}

let playAgainAgainAgain = prompt("Play again?")

if (humanScore < 5 || computerScore < 5) {
  playAgainAgainAgain
}


if (playAgainAgainAgain === "yes") {
  playRound();
} else if (playAgainAgainAgain === "no") {
  console.log("game over");
}




///////////////////////////////////////////////////////////
if (humanScore === 5){
  console.log("You win!")
  return
}

if (computerScore === 5){
  console.log("You lose!")
  return
}

let playAgainAgainAgainAgain = prompt("Play again?")

if (humanScore < 5 || computerScore < 5) {
  playAgainAgainAgainAgain
}


if (playAgainAgainAgainAgain === "yes") {
  playRound();
} else if (playAgainAgainAgainAgain === "no") {
  console.log("game over");
}


/////////////////////////////////////////////////////////////
if (humanScore === 5){
  console.log("You win!")
  return
}

if (computerScore === 5){
  console.log("You lose!")
  return
}

let playAgainAgainAgainAgainAgain = prompt("Play again?")

if (humanScore < 5 || computerScore < 5) {
  playAgainAgainAgainAgainAgain
}


if (playAgainAgainAgainAgainAgain === "yes") {
  playRound();
} else if (playAgainAgainAgainAgainAgain === "no") {
  console.log("game over");
}



///////////////////////////////////////////////////////
if (humanScore === 5){
  console.log("You win!")
  return
}

if (computerScore === 5){
  console.log("You lose!")
  return
}

let playAgainAgainAgainAgainAgainAgain = prompt("Play again?")

if (humanScore < 5 || computerScore < 5) {
  playAgainAgainAgainAgainAgainAgain
}


if (playAgainAgainAgainAgainAgainAgain === "yes") {
  playRound();
} else if (playAgainAgainAgainAgainAgainAgain === "no") {
  console.log("game over");
}



////////////////////////////////////////////////////////
if (humanScore === 5){
  console.log("You win!")
  return
}

if (computerScore === 5){
  console.log("You lose!")
  return
}


let playAgainAgainAgainAgainAgainAgainAgain = prompt("Play again?")

if (humanScore < 5 || computerScore < 5) {
  playAgainAgainAgainAgainAgainAgainAgain
}


if (playAgainAgainAgainAgainAgainAgainAgain === "yes") {
  playRound();
} else if (playAgainAgainAgainAgainAgainAgainAgain === "no") {
  console.log("game over");
}




/////////////////////////////////////////////////////////
if (humanScore === 5){
  console.log("You win!")
  return
}

if (computerScore === 5){
  console.log("You lose!")
  return
}

let playAgainAgainAgainAgainAgainAgainAgainAgain = prompt("Play again?")

if (humanScore < 5 || computerScore < 5) {
  playAgainAgainAgainAgainAgainAgainAgainAgain
}


if (playAgainAgainAgainAgainAgainAgainAgainAgain === "yes") {
  playRound();
} else if (playAgainAgainAgainAgainAgainAgainAgainAgain === "no") {
  console.log("game over");
}




////////////////////////////////////////////////////////////////
if (humanScore === 5){
  console.log("You win!")
  return
}

if (computerScore === 5){
  console.log("You lose!")
  return
}

let playAgainAgainAgainAgainAgainAgainAgainAgainAgain = prompt("Play again?")

if (humanScore < 5 || computerScore < 5) {
  playAgainAgainAgainAgainAgainAgainAgainAgainAgain
}


if (playAgainAgainAgainAgainAgainAgainAgainAgainAgain === "yes") {
  playRound();
} else if (playAgainAgainAgainAgainAgainAgainAgainAgainAgain === "no") {
  console.log("game over");
}










}
playGame();

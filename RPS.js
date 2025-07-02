//////////////////////variables declared///////////////////////
let humanScore = 0;
let computerScore = 0;
let COMPUTERCHOICE = "";




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

const Rock = document.getElementById("rock");

const Paper = document.getElementById("paper");

const Scissors = document.getElementById("scissors");

const buttonContainer = document.getElementById("buttons");

function roundLossText() {
  document.getElementById("WL").textContent = `${"Round loss!"}`;
  document.getElementById("WL").style.color = "red";
};

function roundWinText() {
  document.getElementById("WL").textContent = "Round Win!";
  document.getElementById("WL").style.color = "#7867ff"
};


///////////////////// round start//////////////////////////
function playRound() {
  getComputerChoice();

   function updateScore() {
    document.getElementById("score").textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    };

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
    roundWinText();
    updateScore();

  } else if (result === "you lose") {
    computerScore++;
    roundLossText();
    updateScore();
  }
  console.log("human Score: " + humanScore);
  console.log("computer Score: " + computerScore);
}

function playGame() {
  Rock.addEventListener("click", () => {
    humanChoice = "rock";
    playRound();

    if (computerScore === 5 || humanScore === 5) {
      buttonContainer.removeChild(Rock);
      buttonContainer.removeChild(Paper);
      buttonContainer.removeChild(Scissors);
      alert("game over");
    }

    if (humanScore === 5) {
      alert("you win!");
    } else if (computerScore === 5) {
      alert("you lose bitch");
    }
  });
}

Paper.addEventListener("click", () => {
  humanChoice = "paper";
  playRound();

  if (computerScore === 5 || humanScore === 5) {
    buttonContainer.removeChild(Rock);
    buttonContainer.removeChild(Paper);
    buttonContainer.removeChild(Scissors);
    alert("game over");
  }
  if (humanScore === 5) {
    alert("you win!");
  } else if (computerScore === 5) {
    alert("you lose bitch");
  }
});

Scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  playRound();

  if (computerScore === 5 || humanScore === 5) {
    buttonContainer.removeChild(Rock);
    buttonContainer.removeChild(Paper);
    buttonContainer.removeChild(Scissors);
    alert("game over");
  }
  if (humanScore === 5) {
    alert("you win!");
  } else if (computerScore === 5) {
    alert("you lose bitch");
  }
});

playGame();

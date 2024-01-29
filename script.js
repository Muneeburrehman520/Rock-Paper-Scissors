let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara =document.querySelector('#user-score');
const compScorePara =document.querySelector('#comp-score')

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
};

const drawGame = () => {
  // console.log("Game Is Draw.");
  msg.innerHTML = "Game Is Draw Play Again";
  msg.style.backgroundColor = "darkblue";
};

const showWinner = (userWin, userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML=userScore;
    // console.log("You Win!");
    msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML=compScore;
    // console.log("You Lose");
    msg.innerHTML = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("UserChoice=", userChoice);
  const compChoice = genCompChoice();
  console.log("ComputerChoice =", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    // console.log('you click this choice',userChoice);
  });
});

const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

const winText = document.querySelector(".winText");
const loseText = document.querySelector(".loseText");
const drawText = document.querySelector(".drawText");
var playerWin = 0;
var computerWin = 0;
var draw = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

    winText.textContent = `Win: ${playerWin}`;
    loseText.textContent = `Lost: ${computerWin}`;
    drawText.textContent = `Draw: ${draw}`;
}));

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}

function checkWinner() {

    if(player == computer){
        draw++;
        return "Result: Draw!";
    }
    else if(computer == "ROCK" && player == "PAPER" ||
            computer == "PAPER" && player == "SCISSORS" ||
            computer == "SCISSORS" && player == "ROCK") {
        playerWin++;
        return "Result: You Won!";
    }
    else {
        computerWin++;
        return "Result: You Lost!";
    }
}
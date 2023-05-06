let ball = document.querySelector("#ball");
let scoreNumber = document.querySelector("#scoreNumber");
let startGame = document.querySelector("#startGame");
let restart = document.querySelector("#restart");

let gameArea = document.querySelector(".game-area");
let width = gameArea.clientWidth;
let height = gameArea.clientHeight;

let counter = 0;

let mouseoverFunction = function () {
  counter++;
  let xPosition = parseInt((Math.random() * width) / 3);
  let yPosition = parseInt((Math.random() * height) / 3);
  ball.style.left = xPosition + "px";
  ball.style.top = yPosition + "px";
  ball.style.width = this.clientWidth + 100 + "px";
  ball.style.height = this.clientHeight + 100 + "px";
  scoreNumber.innerHTML = counter;
};

let clickFunction = function () {
  ball.style.background = "#ecb365";
  ball.style.width = "22px";
  ball.style.height = "22px";
  alert("Nehayet! " + counter + ".cehdde bacardin");
  ball.removeEventListener("mouseover", mouseoverFunction);
  ball.removeEventListener("click", clickFunction);
};

let restartGame = function () {
  ball.style.top = 0 + "px";
  ball.style.left = 0 + "px";
  ball.style.background = "#041c32";
  ball.addEventListener("mouseover", mouseoverFunction);
  ball.addEventListener("click", clickFunction);
};

startGame.addEventListener("click", function () {
  ball.addEventListener("mouseover", mouseoverFunction);
  ball.addEventListener("click", clickFunction);
  restart.addEventListener("click", restartGame);
});


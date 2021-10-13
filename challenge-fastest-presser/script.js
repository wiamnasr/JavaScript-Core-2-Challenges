///////////Start of HTML and CSS additions /////

let body = document.querySelector("body");
body.style.backgroundColor = "silver";

let content = document.querySelector(".content");

content.style.width = "100%";
content.style.height = "800px";
content.style.backgroundColor = "rgba(10,40,100,0.4)";
content.style.width = "70%";
content.style.margin = "20px 0 0 15%";
content.style.borderRadius = "10%";

let gameDiv = document.createElement("div");
content.appendChild(gameDiv);
gameDiv.style.width = "95%";
gameDiv.style.borderRadius = "10%";

gameDiv.style.height = "90%";
gameDiv.style.position = "relative";
gameDiv.style.textAlign = "center";
gameDiv.style.margin = "0 0 0 2.5%";
gameDiv.style.backgroundColor = "rgba(10,40,100,0.5)";

gameDiv.style.color = "white";
gameDiv.style.fontWeight = "bolder";
gameDiv.textContent = "Welcome to the Fastest Presser Game!";

let clockBlock = document.createElement("div");
gameDiv.appendChild(clockBlock);
clockBlock.style.backgroundColor = "rgba(240,0,0,0.3)";
clockBlock.style.width = "70%";
clockBlock.style.margin = "20px 0 0 15%";
clockBlock.style.height = "90%";

/////////////clock
var canvas = document.getElementById("canvas");
canvas.style.margin = "2% 0 0 0";
canvas.style.borderRadius = "50%";
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
setInterval(drawClock, 1000);
clockBlock.appendChild(canvas);

///////// Player Stats
let players = document.createElement("div");
players.style.display = "flex";

players.style.width = "90%";
players.style.height = "70%";
players.style.backgroundColor = "grey";
players.style.margin = "0 0 0 5%";
clockBlock.appendChild(players);

//Player 1:
let player1 = document.createElement("div");
player1.classList.add("players");
player1.style.width = "40%";
players.appendChild(player1);
player1.textContent = "Player 1";

player1.style.borderStyle = "dotted";

let player1Score = document.createElement("section");
player1.appendChild(player1Score);
player1Score.textContent = "P1 Score";
player1Score.style.backgroundColor = "rgba(90,60,0,0.4)";
player1Score.style.margin = "45% 0 0 10%";
player1Score.style.height = "35%";
player1Score.style.width = "80%";

player1Score.style.borderRadius = "50%";

let player1Pressed = document.createElement("div");
player1Pressed.style.width = "50%";
player1Pressed.style.height = "20%";
player1Pressed.style.margin = "10% 0 0 25%";
player1Score.appendChild(player1Pressed);
player1Pressed.textContent = "How fast can you press the 'S' Key?";
player1Pressed.style.fontSize = "10pt";

//status
let status = document.createElement("div");
players.appendChild(status);
status.style.width = "30%";

//time remaining:

let timeRem = document.createElement("h2");
status.appendChild(timeRem);
timeRem.style.maxWidth = "100%";
timeRem.style.height = "45%";
timeRem.style.backgroundColor = "rgba(10,40,100,0.5)";
timeRem.textContent = "Time Remaining 00:00";
timeRem.style.fontSize = "20pt";
timeRem.setAttribute("id", "timeRemaining");
timeRem.style.padding = "30% 0 0 0";
timeRem.style.borderStyle = "none";

//input time-frame:

let userInput = document.createElement("div");
status.appendChild(userInput);

userInput.style.maxWidth = "100%";
userInput.style.height = "45%";
userInput.style.margin = "40px 0 0 0";
userInput.style.backgroundColor = "rgba(10,40,100,0.5)";
userInput.style.borderStyle = "none";
userInput.textContent = "Set the time-frame (SECONDS)";

let input = document.createElement("input");
userInput.appendChild(input);
input.style.width = "60%";
input.style.fontSize = "20pt";
input.style.margin = "20% 0 0 0";
input.setAttribute("id", "alarmSet");

//player 2:
let player2 = document.createElement("div");
player2.classList.add("players");
player2.style.width = "40%";
players.appendChild(player2);
player2.textContent = "Player 2";
// player2.style.marginTop = "20px";
player2.style.borderStyle = "dotted";
// player2.style.margin = "0 0 0 20%";
let player2Score = document.createElement("section");
player2.appendChild(player2Score);
player2Score.textContent = "P2 Score";
player2Score.style.backgroundColor = "rgba(90,60,0,0.4)";
player2Score.style.margin = "45% 0 0 10%";
player2Score.style.height = "35%";
player2Score.style.width = "80%";

player2Score.style.borderRadius = "50%";

let player2Pressed = document.createElement("div");
player2Pressed.style.width = "50%";
player2Pressed.style.height = "20%";
player2Pressed.style.margin = "10% 0 0 25%";
player2Score.appendChild(player2Pressed);
player2Pressed.textContent = "How fast can you press the 'L' Key?";
player2Pressed.style.fontSize = "10pt";

// let playersClass = document.getElementsByClassName("players");

//////////////Button:

let button = document.createElement("button");
content.appendChild(button);
button.style.width = "70px";
button.style.height = "70px";
button.style.borderRadius = "50%";
button.style.borderStyle = "dotted";
button.style.margin = "0 0 0 45%";
button.style.backgroundColor = "black";
button.style.color = "white";
button.textContent = "Start";
button.style.fontWeight = "bolder";
button.style.fontSize = "16pt";

////////Countdown functions:
function setAlarm() {
  // event.preventDefault();

  let startingSeconds = input.value;
  let time = startingSeconds;

  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? `0` + seconds : seconds;
    timeRem.textContent = `Time Remaining: ${minutes}: ${seconds}`;
    if (time == 0) {
      timeRem.textContent = `Time Remaining: 00:00`;

      let colors = ["red", "green", "yellow", "purple", "pink"];
      let index = 0;
      function changeColor() {
        timeRem.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
        setTimeout(changeColor, 100);
      }
      changeColor();
    } else if (time > 0) {
      
      time--;
    }
  }
}

button.addEventListener("click", setAlarm);

///Keyboard events function

function startGame() {}

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
    let p1Score = 0;
    p1Score +=1;
    player1Pressed.textContent = p1Score;
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
  }
}

document.addEventListener("keypress", keyBoardEvents);

///////////Functions for Drawing the clock:

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.5, "white");
  grad.addColorStop(1, "#333");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
  // second
  second = (second * Math.PI) / 30;
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
////////End of clock drawing functions

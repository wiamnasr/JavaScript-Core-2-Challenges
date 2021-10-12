function startGame() {}

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
  }
}

document.addEventListener("keypress", keyBoardEvents);

/////////////End of functions declarations//////

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
gameDiv.textContent = "Set the time-frame (SECONDS)";

let clockBlock = document.createElement("div");
gameDiv.appendChild(clockBlock);
clockBlock.style.backgroundColor = "rgba(240,0,0,0.3)";
// clockBlock.textContent = "hello";
clockBlock.style.width = "70%";
clockBlock.style.margin = "20px 0 0 15%";
clockBlock.style.height = "90%";
/////////////clock
var canvas = document.getElementById("canvas");
canvas.style.borderRadius = "50%";
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
setInterval(drawClock, 1000);
clockBlock.appendChild(canvas);
// canvas.style.position = "absolute";




//////////////Button

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

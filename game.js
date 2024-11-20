//import GameStage1 from "./gameScreen1.js";

function setup() {
  createCanvas(600, 800);
}

//Player (ship and flames and ammo)

//Enemies

//Gem

//Projectiles

//Fuel Tank
function fuelTank() {
  push();
  angleMode(DEGREES);
  let fuelX = 200;
  let fuelY = 200;
  strokeWeight(3);
  fill(100, 0, 0);
  stroke(0, 0, 0);
  rect(fuelX - 10, fuelY + 10, 100, 135, 20);
  fill(150, 0, 0);
  push();
  strokeWeight(15);
  stroke(0, 0, 0);
  noFill();
  square(fuelX + 10, fuelY - 15, 50, 18);
  square(fuelX + 70, fuelY, 18, 5);
  push();
  strokeWeight(8);
  arc(fuelX + 100, fuelY + 5, 50, 50, 180, -80);
  pop();
  strokeWeight(10);
  stroke(150, 0, 0);
  noFill();
  square(fuelX + 10, fuelY - 15, 50, 18);
  pop();
  stroke(0, 0, 0);
  fill(150, 0, 0);
  rect(fuelX, fuelY, 100, 135, 20);

  textSize(80);
  fill(100, 0, 0);
  stroke(100, 0, 0);
  strokeWeight(15);
  textFont("arial");
  text("X", fuelX + 23, fuelY + 95);
  pop();
}

//Start Screen
//stars and background
let starX = [];
let starY = [];
let starAlpha = [];
let gameState = "start";

function logo() {
  fill(0);
  stroke(255, 255, 255);
  strokeWeight(5);
  textSize(75);
  textFont("stencil");
  text("GALAXY", 120, 100);

  textSize(45);
  stroke(250, 250, 0);
  textFont("magneto");
  text("RUSH", 280, 140);
}
function buttons() {
  //play button
  textFont("stencil");
  strokeWeight(5);
  stroke(190, 250, 255);
  stroke(255);
  /*  stroke(250, 250, 0);*/
  rect(220, 400, 160, 70, 25);
  push();
  noStroke();
  strokeWeight(1);
  fill(255);
  text("PLAY", 246, 450);
  pop();

  //how to play button
  push();
  rect(50, 500, 200, 70, 25);
  textSize(28);
  fill(255);
  strokeWeight(1);
  noStroke();
  text("HOW TO PLAY", 63, 545);
  pop();

  //instructions button
  push();
  rect(350, 500, 200, 70, 25);
  textSize(25);
  fill(255);
  strokeWeight(1);
  noStroke();
  text("INSTRUCTIONS", 362, 542.5);
  pop();
}
function startScreen() {
  noStroke();
  background(5, 5, 15);
  for (let index in starX) {
    fill(255, 255, 255, starAlpha[index] * 255);
    ellipse(starX[index], starY[index], 1.25);
  }
  logo();
  buttons();
}
for (let i = 0; i < 2500; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

//Game Screen

//Results Screen

//Background

//The big ship

function draw() {
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "gameStage1") {
  }
  //fuelTank();

  //buttons' functionality
  if (gameState === "start") {
    if (mouseIsPressed) {
      if (mouseX > 215 && mouseX < 380 && mouseY > 395 && mouseY < 470) {
        //gameState = "gameStage1";
      }
    }
  }
}

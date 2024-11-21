function setup() {
  createCanvas(600, 800);
}

//Player (ship and flames and ammo)
function ship() {
  let shX = -50;
  let shY = -200;
  let shS = 0.45;
  angleMode(DEGREES);
  push();
  strokeWeight(3 * shS);
  translate(350, 600);
  rotate();

  //color
  push();
  noStroke();
  fill(200);
  rect(shX - 40 * shS, shY - 20 * shS, 80 * shS, 85 * shS);
  rect(shX - 23 * shS, shY + 65 * shS, 46 * shS, 10 * shS);

  pop();

  //cockpit
  fill(200);
  arc(shX, shY - 15 * shS, 80 * shS, 300 * shS, 180, 0);
  //wings
  fill(200);
  quad(
    shX - 50 * shS,
    shY + 50 * shS,
    shX - 50 * shS,
    shY - 50 * shS,
    shX - 200 * shS,
    shY,
    shX - 200 * shS,
    shY + 30 * shS
  );
  quad(
    shX + 50 * shS,
    shY + 50 * shS,
    shX + 50 * shS,
    shY - 50 * shS,
    shX + 200 * shS,
    shY,
    shX + 200 * shS,
    shY + 30 * shS
  );
  //engines
  push();
  fill(150);
  rect(shX - 80 * shS, shY - 60 * shS, 40 * shS, 50 * shS);
  rect(shX + 80 * shS, shY - 60 * shS, -40 * shS, 50 * shS);
  arc(shX - 60 * shS, shY - 58 * shS, 40.3 * shS, 20 * shS, 180, 0);
  arc(shX + 60 * shS, shY - 58 * shS, 40.3 * shS, 20 * shS, 180, 0);
  rect(shX - 90 * shS, shY, 60 * shS, 80 * shS);
  rect(shX + 90 * shS, shY, -60 * shS, 80 * shS);
  arc(shX + 60 * shS, shY + 2 * shS, 60 * shS, 40 * shS, 180, 0);
  arc(shX - 60 * shS, shY + 2 * shS, 60 * shS, 40 * shS, 180, 0);
  pop();
  //window

  push();
  fill(0, 40, 200);
  ellipse(shX, shY - 110 * shS, 30 * shS, 30 * shS);
  ellipse(shX, shY - 90 * shS, 30 * shS, 30 * shS);
  ellipse(shX, shY - 100 * shS, 45 * shS, 30 * shS);
  pop();
  //weapon
  push();
  fill(120);
  arc(shX, shY - 20 * shS, 50 * shS, 40 * shS, 170, 10);
  arc(shX, shY - 20 * shS, 25 * shS, 20 * shS, 180, 0);
  fill(0);
  circle(shX, shY - 20 * shS, 10 * shS);
  strokeWeight(5 * shS);
  line(shX, shY - 20 * shS, shX, shY - 50 * shS);
  strokeWeight(1 * shS);
  rect(shX - 5 * shS, shY - 55 * shS, 10 * shS, 5 * shS);
  pop();

  //back turbine
  noFill();
  strokeWeight(3 * shS);
  arc(shX - 30 * shS, shY + 75 * shS, 20 * shS, 20 * shS, 270, 0);
  arc(shX + 30 * shS, shY + 75 * shS, 20 * shS, 20 * shS, 180, 270);
  fill(80);
  rect(shX - 20 * shS, shY + 75 * shS, 40 * shS, 10 * shS);

  //wing engines
  push();
  fill(150);
  rect(shX - 215 * shS, shY - 10 * shS, 15 * shS, 45 * shS);
  rect(shX + 200 * shS, shY - 10 * shS, 15 * shS, 45 * shS);
  pop();
  pop();
}
//Enemies

//Gem

//Projectiles
function projectile() {
  let projectileX = 300;
  let projectileY = 400;
  let projectileS = 0.4;
  push();
  strokeWeight(5);
  stroke(110, 220, 255);
  fill(181, 255, 255);
  rect(
    projectileX - 4,
    projectileY - 110,
    20 * projectileS,
    70 * projectileS,
    20 * projectileS
  );
  pop();
}
//Fuel Tank
function fuelTank() {
  push();
  angleMode(DEGREES);
  let fuelX = 100;
  let fuelY = 100;
  let fuelS = 0.3;
  strokeWeight(3 * fuelS);
  fill(100, 0, 0);
  stroke(0, 0, 0);
  rect(
    fuelX - 10 * fuelS,
    fuelY + 10 * fuelS,
    100 * fuelS,
    135 * fuelS,
    20 * fuelS
  );
  fill(150, 0, 0);
  push();
  strokeWeight(15 * fuelS);
  stroke(0, 0, 0);
  noFill();
  square(fuelX + 10 * fuelS, fuelY - 15 * fuelS, 50 * fuelS, 18 * fuelS);
  square(fuelX + 70 * fuelS, fuelY * fuelS, 18, 5);
  push();
  strokeWeight(8 * fuelS);
  arc(
    fuelX + 100 * fuelS,
    fuelY + 5 * fuelS,
    50 * fuelS,
    50 * fuelS,
    180 * fuelS,
    -80 * fuelS
  );
  pop();
  strokeWeight(10 * fuelS);
  stroke(150, 0, 0);
  noFill();
  square(fuelX + 10 * fuelS, fuelY - 15 * fuelS, 50 * fuelS, 18 * fuelS);
  pop();
  stroke(0, 0, 0);
  fill(150, 0, 0);
  rect(fuelX, fuelY, 100 * fuelS, 135 * fuelS, 20 * fuelS);

  textSize(80 * fuelS);
  fill(100, 0, 0);
  stroke(100, 0, 0);
  strokeWeight(15 * fuelS);
  textFont("arial");
  text("X", fuelX + 23 * fuelS, fuelY + 95 * fuelS);
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

//Game Screens
//importing gameScreen1
import GameScreen1 from "./gameScreen1.js";
const stage1 = new GameScreen1();

//importing gameScreen2
import GameScreen2 from "./gameScreen2.js";
const stage2 = new GameScreen2();

//importing gameScreenFinal
import GameScreenFinal from "./gameScreenFinal.js";
const stageFinal = new GameScreenFinal();

//Results Screen

//The big ship

function draw() {
  if (gameState === "start") {
    startScreen();
    ship();
  } else if (gameState === "stage1") {
    stage1.draw();
    ship();
    projectile();
    fuelTank();
  } else if (gameState === "stage2") {
    stage2.draw();
  } else if (gameState === "stageFinal") {
    stageFinal.draw();
  } else if (gameState === "how to play") {
    howToPlay();
  } else if (gameState === "instructions") {
    instructions();
  }

  //buttons' functionality
  if (gameState === "start") {
    if (mouseIsPressed) {
      if (mouseX > 215 && mouseX < 380 && mouseY > 395 && mouseY < 470) {
        gameState = "stage1";
      } else if (mouseX > 47 && mouseX < 252 && mouseY > 497 && mouseY < 572) {
        gameState = "howToPlay";
      } else if (mouseX > 347 && mouseX < 552 && mouseY > 497 && mouseY < 572) {
        gameState = "instructions";
      }
    }
  }
}

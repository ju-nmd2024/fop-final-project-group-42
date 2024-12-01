function setup() {
  createCanvas(600, 800);
}
let shipX = 0;
let shipY = 350;
let shipRotate = 0;
let shipSize = 0.3;
let shipVelocity = 5;
let boosterSize = 0.6;
let fuelState = false;
let turningState = false;
let movingState = false;
let combatState = false;
// let enemy1 = enemy101;
//Player (ship and flames and ammo)
function ship() {
  angleMode(DEGREES);
  push();
  stroke(0);
  strokeWeight(3 * shipSize);
  translate(300, 420);
  rotate(shipRotate);

  //color
  push();
  noStroke();
  fill(200);
  rect(
    shipX - 40 * shipSize,
    shipY - 20 * shipSize,
    80 * shipSize,
    85 * shipSize
  );
  rect(
    shipX - 23 * shipSize,
    shipY + 65 * shipSize,
    46 * shipSize,
    10 * shipSize
  );
  pop();

  //cockpit
  fill(200);
  arc(shipX, shipY - 15 * shipSize, 80 * shipSize, 300 * shipSize, 180, 0);
  //wings
  fill(200);
  quad(
    shipX - 50 * shipSize,
    shipY + 50 * shipSize,
    shipX - 50 * shipSize,
    shipY - 50 * shipSize,
    shipX - 200 * shipSize,
    shipY,
    shipX - 200 * shipSize,
    shipY + 30 * shipSize
  );
  quad(
    shipX + 50 * shipSize,
    shipY + 50 * shipSize,
    shipX + 50 * shipSize,
    shipY - 50 * shipSize,
    shipX + 200 * shipSize,
    shipY,
    shipX + 200 * shipSize,
    shipY + 30 * shipSize
  );
  //engines
  push();
  fill(150);
  rect(
    shipX - 80 * shipSize,
    shipY - 60 * shipSize,
    40 * shipSize,
    50 * shipSize
  );
  rect(
    shipX + 80 * shipSize,
    shipY - 60 * shipSize,
    -40 * shipSize,
    50 * shipSize
  );
  arc(
    shipX - 60 * shipSize,
    shipY - 58 * shipSize,
    40.3 * shipSize,
    20 * shipSize,
    180,
    0
  );
  arc(
    shipX + 60 * shipSize,
    shipY - 58 * shipSize,
    40.3 * shipSize,
    20 * shipSize,
    180,
    0
  );
  rect(shipX - 90 * shipSize, shipY, 60 * shipSize, 80 * shipSize);
  rect(shipX + 90 * shipSize, shipY, -60 * shipSize, 80 * shipSize);
  arc(
    shipX + 60 * shipSize,
    shipY + 2 * shipSize,
    60 * shipSize,
    40 * shipSize,
    180,
    0
  );
  arc(
    shipX - 60 * shipSize,
    shipY + 2 * shipSize,
    60 * shipSize,
    40 * shipSize,
    180,
    0
  );
  pop();
  //window

  push();
  fill(0, 40, 200);
  ellipse(shipX, shipY - 110 * shipSize, 30 * shipSize, 30 * shipSize);
  ellipse(shipX, shipY - 90 * shipSize, 30 * shipSize, 30 * shipSize);
  ellipse(shipX, shipY - 100 * shipSize, 45 * shipSize, 30 * shipSize);
  pop();
  //weapon
  push();
  fill(120);
  arc(shipX, shipY - 20 * shipSize, 50 * shipSize, 40 * shipSize, 170, 10);
  arc(shipX, shipY - 20 * shipSize, 25 * shipSize, 20 * shipSize, 180, 0);
  fill(0);
  circle(shipX, shipY - 20 * shipSize, 10 * shipSize);
  strokeWeight(5 * shipSize);
  line(shipX, shipY - 20 * shipSize, shipX, shipY - 50 * shipSize);
  strokeWeight(1 * shipSize);
  rect(
    shipX - 5 * shipSize,
    shipY - 55 * shipSize,
    10 * shipSize,
    5 * shipSize
  );
  pop();

  //back turbine
  noFill();
  strokeWeight(3 * shipSize);
  arc(
    shipX - 30 * shipSize,
    shipY + 75 * shipSize,
    20 * shipSize,
    20 * shipSize,
    270,
    0
  );
  arc(
    shipX + 30 * shipSize,
    shipY + 75 * shipSize,
    20 * shipSize,
    20 * shipSize,
    180,
    270
  );
  fill(80);
  rect(
    shipX - 20 * shipSize,
    shipY + 75 * shipSize,
    40 * shipSize,
    10 * shipSize
  );

  //wing engines
  push();
  fill(150);
  rect(
    shipX - 215 * shipSize,
    shipY - 10 * shipSize,
    15 * shipSize,
    45 * shipSize
  );
  rect(
    shipX + 200 * shipSize,
    shipY - 10 * shipSize,
    15 * shipSize,
    45 * shipSize
  );
  pop();
  pop();
}
//flame left
function shipTurningRightBooster() {
  push();
  angleMode(DEGREES);
  translate(300, 420);
  rotate(shipRotate);
  beginShape();
  fill(230);
  stroke(135, 206, 250);
  strokeWeight(4 * boosterSize);
  vertex(shipX - 103 * boosterSize, shipY + 70 * boosterSize);
  bezierVertex(
    shipX - 118 * boosterSize,
    shipY + 3 * boosterSize,
    shipX - 88 * boosterSize,
    shipY + 3 * boosterSize,
    shipX - 103 * boosterSize,
    shipY + 70 * boosterSize
  );
  endShape();
  pop();
}
//flame right
function shipTurningLeftBooster() {
  push();
  angleMode(DEGREES);
  translate(300, 420);
  rotate(shipRotate);
  beginShape();
  fill(230);
  stroke(135, 206, 250);
  strokeWeight(4 * boosterSize);
  vertex(shipX + 103 * boosterSize, shipY + 70 * boosterSize);
  bezierVertex(
    shipX + 118 * boosterSize,
    shipY + 3 * boosterSize,
    shipX + 88 * boosterSize,
    shipY + 3 * boosterSize,
    shipX + 103 * boosterSize,
    shipY + 70 * boosterSize
  );
  endShape();
  pop();
}
//flame middle
function shipBooster() {
  push();
  translate(300, 405);
  beginShape();
  //rotate();
  stroke(135, 206, 250);
  fill(230);
  strokeWeight(5 * boosterSize);
  vertex(shipX, shipY + 140 * boosterSize);
  bezierVertex(
    shipX - 25 * boosterSize,
    shipY + 65 * boosterSize,
    shipX + 25 * boosterSize,
    shipY + 65 * boosterSize,
    shipX,
    shipY + 140 * boosterSize
  );
  endShape();
  pop();
}

//Enemies
//enemy1
let y = 300;

// const enemies1 = [enemy101,enemy102];

let speed = 5;
let enemies = []; // Array to store enemy instances

class Enemy1 {
  constructor(x, y, size, rotation) {
    this.x = x; // Position x-coordinate
    this.y = y; // Position y-coordinate
    this.size = 0.4; // Scale size
    this.rotation = rotation; // Rotation in degrees
  }

  move(speed) {
    this.y += speed; // Moves the enemy closer to the center
  }

  draw() {
    angleMode(DEGREES);
    push();
    translate(300, 400); // Move origin to center
    rotate(this.rotation); // Rotate based on instance's rotation value

    // Connections
    stroke(0);
    strokeWeight(5 * this.size);
    fill(100);
    rect(
      this.x - 70 * this.size,
      this.y - 10 * this.size,
      140 * this.size,
      20 * this.size
    );

    // Turbine
    quad(
      this.x - 15 * this.size,
      this.y - 80 * this.size,
      this.x - 10 * this.size,
      this.y - 95 * this.size,
      this.x + 10 * this.size,
      this.y - 95 * this.size,
      this.x + 15 * this.size,
      this.y - 80 * this.size
    );

    // Outer ring
    strokeWeight(20 * this.size);
    noFill();
    arc(this.x, this.y, 150 * this.size, 150 * this.size, 115, 65);
    strokeWeight(13 * this.size);
    stroke(140);
    arc(this.x, this.y, 150 * this.size, 150 * this.size, 115, 65);

    // Midsection
    stroke(0);
    strokeWeight(5 * this.size);
    fill(140);
    circle(this.x, this.y, 90 * this.size);
    strokeWeight(4 * this.size);
    circle(this.x, this.y - 55 * this.size, 20 * this.size);
    noFill();

    // Window
    strokeWeight(15 * this.size);
    arc(
      this.x,
      this.y + -5 * this.size,
      70 * this.size,
      70 * this.size,
      50,
      130
    );
    strokeWeight(10 * this.size);
    stroke(170, 40, 0);
    arc(
      this.x,
      this.y + -5 * this.size,
      70 * this.size,
      70 * this.size,
      50,
      130
    );

    pop();
  }
}
class Enemy2 {
  constructor(x, y, size, rotation) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = rotation;
  }
  move(speed) {
    this.y += speed; // Moves the enemy closer to the center
  }
  draw() {
    push();
    angleMode(DEGREES);
    translate(300, 400);
    rotate(this.rotation);

    // Your original enemy drawing code
    fill(150);
    stroke(0);
    strokeWeight(3 * this.size);
    // Inner body
    circle(this.x, this.y, 70 * this.size);
    rect(
      this.x - 40 * this.size,
      this.y - 55 * this.size,
      65 * this.size,
      55 * this.size
    );
    circle(this.x, this.y, 30 * this.size);

    // Inner wings
    triangle(
      this.x + 25 * this.size,
      this.y - 100 * this.size,
      this.x + 25 * this.size,
      this.y + 100 * this.size,
      this.x + 100 * this.size,
      this.y - 100 * this.size
    );
    triangle(
      this.x - 25 * this.size,
      this.y - 100 * this.size,
      this.x - 25 * this.size,
      this.y + 100 * this.size,
      this.x - 100 * this.size,
      this.y - 100 * this.size
    );

    // Window
    noFill();
    strokeWeight(10 * this.size);
    arc(
      this.x,
      this.y - 10 * this.size,
      70 * this.size,
      70 * this.size,
      60,
      120
    );
    strokeWeight(5 * this.size);
    stroke(170, 40, 0);
    arc(
      this.x,
      this.y - 10 * this.size,
      70 * this.size,
      70 * this.size,
      60,
      120
    );

    // Outer wings
    fill(150);
    strokeWeight(3 * this.size);
    stroke(0);
    triangle(
      this.x + 125 * this.size,
      this.y - 100 * this.size,
      this.x + 125 * this.size,
      this.y,
      this.x + 90 * this.size,
      this.y - 100 * this.size
    );
    triangle(
      this.x - 125 * this.size,
      this.y - 100 * this.size,
      this.x - 125 * this.size,
      this.y,
      this.x - 90 * this.size,
      this.y - 100 * this.size
    );

    // Engines and other parts
    noStroke();
    rect(
      this.x - 123 * this.size,
      this.y - 99 * this.size,
      96 * this.size,
      55 * this.size
    );
    rect(
      this.x + 123 * this.size,
      this.y - 99 * this.size,
      -96 * this.size,
      55 * this.size
    );

    noFill();
    stroke(3 * this.size);
    arc(
      this.x + 95 * this.size,
      this.y - 10 * this.size,
      50 * this.size,
      70 * this.size,
      225,
      311
    );
    arc(
      this.x - 95 * this.size,
      this.y - 10 * this.size,
      50 * this.size,
      70 * this.size,
      235,
      310
    );

    // Engines
    fill(80);
    rect(
      this.x - 90 * this.size,
      this.y - 125 * this.size,
      40 * this.size,
      60 * this.size
    );
    arc(
      this.x - 70 * this.size,
      this.y - 67 * this.size,
      40.6 * this.size,
      20 * this.size,
      0,
      180
    );
    rect(
      this.x + 90 * this.size,
      this.y - 125 * this.size,
      -40 * this.size,
      60 * this.size
    );
    arc(
      this.x + 70 * this.size,
      this.y - 67 * this.size,
      40.6 * this.size,
      20 * this.size,
      0,
      180
    );

    pop();
  }
}

function setup() {
  createCanvas(600, 800);
  // Create enemy2 and add them to the array
  enemies.push(new Enemy2(0, -200, 0.4, 270));
  enemies.push(new Enemy2(0, -300, 0.5, 60));
  enemies.push(new Enemy2(0, -500, 0.4, 115));

  // Create enemy1 with different positions and sizes
  enemies.push(new Enemy1(0, -400, 1.0, 0));
  enemies.push(new Enemy1(0, -300, 0.8, 45));
  enemies.push(new Enemy1(0, -700, 1, 80));
  enemies.push(new Enemy1(0, -500, 1, 120));
  enemies.push(new Enemy1(0, -400, 1, 260));
  enemies.push(new Enemy1(0, -350, 1, 200));
}

//Gem

//Projectiles
let projectileX = 0;
let projectileY = 350;
let projectileSize = 0.3;
function projectile() {
  push();
  angleMode(DEGREES);
  strokeWeight(1.5);
  stroke(110, 220, 255);
  fill(181, 255, 255);
  translate(300, 420);
  rotate(shipRotate);
  rect(
    projectileX - 4,
    projectileY - 10,
    20 * projectileSize,
    70 * projectileSize,
    20 * projectileSize
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
let gameState = "stage0";
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
  text("HOW TO PLAY", 61, 545);
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
//importing gameScreen0
import GameScreen0 from "./gameScreen0.js";
const stage0 = new GameScreen0();

//importing gameScreen1
import GameScreen1 from "./gameScreen1.js";
const stage1 = new GameScreen1();

//importing gameScreen2
import GameScreen2 from "./gameScreen2.js";
const stage2 = new GameScreen2();

//importing gameScreenFinal
import GameScreenFinal from "./gameScreenFinal.js";
const stageFinal = new GameScreenFinal();

//importing howtoplayscreen
import HowToPlayScreen from "./howToPlayScreen.js";
const howToPlayScreen = new HowToPlayScreen();

//importing instructions screen
import InstructionsScreen from "./instructionsScreen.js";
const instructionsScreen = new InstructionsScreen();

//Results Screens
//importing winning screen
import WinScreen from "./winScreen.js";
const winScreen = new WinScreen();

//importing losing screen
import LoseScreen from "./loseScreen.js";
const loseScreen = new LoseScreen();

/* //importing pause screen
import PauseScreen from "./pauseMenu.js";
const pauseScreen = new PauseScreen(); we'll maybe work on this if we have time (prolly wont)
 */

//The big ship
let mothaShipX = 0;
let mothaShipY = 0;
function mothaship() {
  push();
  //rotate();
  fill(125);
  stroke(0);
  translate(300, 400);
  strokeWeight(4);

  rect(mothaShipX - 300, mothaShipY + 200, 600, 150);
  fill(40, 200, 220);
  rect(mothaShipX - 300, mothaShipY + 225, 600, 150);
  fill(80);
  rect(mothaShipX - 300, mothaShipY + 250, 600, 150);
  fill(140);
  strokeWeight(4);

  rect(mothaShipX - 100, mothaShipY + 100, 200, 240);
  stroke(240, 200, 0);
  fill(240, 200, 0);
  textSize(140);
  text("H", mothaShipX - 50, mothaShipY + 230);
  fill(50);
  stroke(0);

  arc(mothaShipX + 302, mothaShipY + 248, 150, 150, 180, 270);
  arc(mothaShipX - 302, mothaShipY + 248, 150, 150, 270, 0);
  strokeWeight(20);
  stroke(50);

  line(mothaShipX - 70, mothaShipY + 105, mothaShipX - 70, mothaShipY + 340);
  line(mothaShipX + 70, mothaShipY + 105, mothaShipX + 70, mothaShipY + 340);

  strokeWeight(1);
  fill(0, 255, 0);
  circle(mothaShipX - 70, mothaShipY + 220, 8);
  circle(mothaShipX - 70, mothaShipY + 190, 8);
  circle(mothaShipX - 70, mothaShipY + 160, 8);
  circle(mothaShipX - 70, mothaShipY + 130, 8);
  circle(mothaShipX - 70, mothaShipY + 100, 8);
  circle(mothaShipX - 70, mothaShipY + 250, 8);
  circle(mothaShipX - 70, mothaShipY + 280, 8);
  circle(mothaShipX + 70, mothaShipY + 220, 8);
  circle(mothaShipX + 70, mothaShipY + 190, 8);
  circle(mothaShipX + 70, mothaShipY + 160, 8);
  circle(mothaShipX + 70, mothaShipY + 130, 8);
  circle(mothaShipX + 70, mothaShipY + 100, 8);
  circle(mothaShipX + 70, mothaShipY + 250, 8);
  circle(mothaShipX + 70, mothaShipY + 280, 8);
  stroke(0);
  strokeWeight(4);
  line(mothaShipX - 210, mothaShipY + 250, mothaShipX - 210, mothaShipY + 400);
  noFill();
  circle(mothaShipX - 220, mothaShipY + 260, 4);
  circle(mothaShipX - 220, mothaShipY + 285, 4);
  circle(mothaShipX - 220, mothaShipY + 310, 4);
  circle(mothaShipX - 220, mothaShipY + 335, 4);
  circle(mothaShipX - 220, mothaShipY + 360, 4);
  circle(mothaShipX - 220, mothaShipY + 385, 4);
  circle(mothaShipX - 200, mothaShipY + 260, 4);
  circle(mothaShipX - 200, mothaShipY + 285, 4);
  circle(mothaShipX - 200, mothaShipY + 310, 4);
  circle(mothaShipX - 200, mothaShipY + 335, 4);
  circle(mothaShipX - 200, mothaShipY + 360, 4);
  circle(mothaShipX - 200, mothaShipY + 385, 4);

  line(mothaShipX + 170, mothaShipY + 250, mothaShipX + 170, mothaShipY + 310);
  line(mothaShipX + 170, mothaShipY + 310, mothaShipX + 300, mothaShipY + 310);
  circle(mothaShipX + 160, mothaShipY + 260, 4);
  circle(mothaShipX + 160, mothaShipY + 280, 4);
  circle(mothaShipX + 160, mothaShipY + 300, 4);
  circle(mothaShipX + 180, mothaShipY + 260, 4);
  circle(mothaShipX + 180, mothaShipY + 280, 4);
  circle(mothaShipX + 180, mothaShipY + 300, 4);
  circle(mothaShipX + 180, mothaShipY + 320, 4);
  circle(mothaShipX + 200, mothaShipY + 320, 4);
  circle(mothaShipX + 220, mothaShipY + 320, 4);
  circle(mothaShipX + 240, mothaShipY + 320, 4);
  circle(mothaShipX + 260, mothaShipY + 320, 4);
  circle(mothaShipX + 280, mothaShipY + 320, 4);
  circle(mothaShipX + 300, mothaShipY + 320, 4);
  circle(mothaShipX + 200, mothaShipY + 300, 4);
  circle(mothaShipX + 220, mothaShipY + 300, 4);
  circle(mothaShipX + 240, mothaShipY + 300, 4);
  circle(mothaShipX + 260, mothaShipY + 300, 4);
  circle(mothaShipX + 280, mothaShipY + 300, 4);
  circle(mothaShipX + 300, mothaShipY + 300, 4);
  pop();
}
function motharoof() {
  push();
  translate(300, 400);
  stroke(0);
  fill(25);
  quad(
    mothaShipX - 115,
    mothaShipY + 300,
    mothaShipX + 115,
    mothaShipY + 300,
    mothaShipX + 195,
    mothaShipY + 405,
    mothaShipX - 195,
    mothaShipY + 405
  );
  fill(45);
  quad(
    mothaShipX - 115,
    mothaShipY + 300,
    mothaShipX + 115,
    mothaShipY + 300,
    mothaShipX + 170,
    mothaShipY + 405,
    mothaShipX - 170,
    mothaShipY + 405
  );
  pop();
}
function draw() {
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "stage0") {
    stage0.draw();

    mothaship();
    projectile();
    ship();
    motharoof();
    if (keyIsDown(38) || keyIsDown(87)) {
      shipBooster();
    }
  } else if (gameState === "stage1") {
    stage1.draw();
    ship();
    enemies = enemies.filter((enemy) => enemy.y < -100);
    //spawning enemies
    if (shipY <= 0) {
      for (let enemy of enemies) {
        enemy.draw();
        enemy.move(speed);
      }
    }
  } else if (gameState === "stage2") {
    stage2.draw();
    ship();
  } else if (gameState === "stageFinal") {
    push();
    angleMode(DEGREES);
    stageFinal.draw();
    translate(600, 800);
    rotate(180);
    mothaship();
    pop();

    ship();
    push();
    translate(600, 800);
    rotate(180);
    motharoof();

    pop();
    push();
    textSize(30);
    fill(255);
    textFont("stencil");
    text("Final Stage", 210, 30);
    pop();
  } else if (gameState === "howToPlay") {
    howToPlayScreen.draw();
  } else if (gameState === "instructions") {
    instructionsScreen.draw();
  } else if (gameState === "lose") {
    loseScreen.draw();
  } else if (gameState === "win") {
    winScreen.draw();
  }

  //buttons' functionality
  //start screen buttons
  if (gameState === "start") {
    if (mouseIsPressed) {
      if (mouseX > 215 && mouseX < 380 && mouseY > 395 && mouseY < 475) {
        gameState = "stage0";
      } else if (mouseX > 47 && mouseX < 252 && mouseY > 497 && mouseY < 572) {
        gameState = "howToPlay";
      } else if (mouseX > 347 && mouseX < 552 && mouseY > 497 && mouseY < 572) {
        gameState = "instructions";
      }
    }
  }
  //instructions buttons
  if (gameState === "instructions") {
    if (mouseIsPressed) {
      if (mouseX > 45 && mouseX < 252 && mouseY > 687.5 && mouseY < 759.5) {
        gameState = "start";
      } else if (
        mouseX > 345 &&
        mouseX < 552 &&
        mouseY > 687.5 &&
        mouseY < 759.5
      ) {
        gameState = "stage0";
      } else if (
        mouseX > 196 &&
        mouseX < 402 &&
        mouseY > 584.5 &&
        mouseY < 659.5
      ) {
        gameState = "howToPlay";
      }
    }
  }

  //howToPlay buttons
  if (gameState === "howToPlay") {
    if (mouseIsPressed) {
      if (mouseX > 45 && mouseX < 252 && mouseY > 609.5 && mouseY < 684.5) {
        gameState = "start";
      } else if (
        mouseX > 196 &&
        mouseX < 402 &&
        mouseY > 507.5 &&
        mouseY < 584.5
      ) {
        gameState = "stage0";
      } else if (
        mouseX > 346 &&
        mouseX < 552 &&
        mouseY > 609.5 &&
        mouseY < 684.5
      ) {
        gameState = "instructions";
      }
    }
  }

  //winScreen buttons
  if (gameState === "win") {
    if (mouseIsPressed) {
      if (mouseX > 47 && mouseX < 252 && mouseY > 610 && mouseY < 685) {
        gameState = "start";
      } else if (mouseX > 345 && mouseX < 552 && mouseY > 610 && mouseY < 685) {
        gameState = "stage0";
      }
    }
  }

  //loseScreen buttons
  if (gameState === "lose") {
    if (mouseIsPressed) {
      if (mouseX > 47 && mouseX < 252 && mouseY > 610 && mouseY < 685) {
        gameState = "start";
      } else if (mouseX > 345 && mouseX < 552 && mouseY > 610 && mouseY < 685) {
        gameState = "stage0";
      }
    }
  }

  //pause menu buttons
  /*  if (gameState === "pause") {
    if (mouseIsPressed) {
      if (mouseX > 198 && mouseX < 402 && mouseY > 277 && mouseY < 331) {
        //resume
      } else if (mouseX > 198 && mouseX < 402 && mouseY > 306 && mouseY < 422) {
        gameState = "stage0";
      } else if (mouseX > 198 && mouseX < 402 && mouseY > 458 && mouseY < 512) {
        gameState = "howToPlay";
      } else if (mouseX > 198 && mouseX < 402 && mouseY > 548 && mosueY < 602) {
        gameState = "start";
      }
    } 
  }  we'll maybe work on this if we have time (prolly wont)*/

  if (fuelState === true) {
    shipBooster();
  }

  //moving mechanics
  if (combatState === false) {
    if (keyIsDown(38) || keyIsDown(87)) {
      shipBooster();
      shipVelocity = 5;
      shipY -= shipVelocity;
      projectileY -= shipVelocity;
    }
  } else if (combatState === true) {
    shipVelocity = 0;
    if (keyIsDown(39) || keyIsDown(68)) {
      shipTurningRightBooster();
      shipRotate += 10;
    } else if (keyIsDown(37) || keyIsDown(65)) {
      shipTurningLeftBooster();
      shipRotate -= 10;
    }
  }
  //gameplay in stage0
  if (gameState === "stage0") {
    shipY -= 3;
    projectileY -= 3;
    if (shipY <= 150) {
      shipY += 3;
      projectileY += 3;
    }
    //key functionalities

    if (keyIsDown(38) || keyIsDown(87)) {
      shipBooster();
      shipY -= shipVelocity;
      projectileY -= shipVelocity;
    }
  }

  //stopping at shY && eY1 = 0

  if (gameState === "stage0" && shipY <= -440) {
    gameState = "stage1";
    shipY = 380;
  } else if (gameState === "stage1" && shipY <= -440) {
    gameState = "stage2";
    shipY = 380;
  } else if (gameState === "stage2" && shipY <= -440) {
    gameState = "stageFinal";
    shipY = 380;
  }
  // gameplay in stage1
  if (gameState === "stage1") {
    combatState = false;
    /* if (keyIsDown(38) || keyIsDown(87)) {
    } else fuelState = false; */
    if (shipY === 0) {
      combatState = true;
      /* movingState = false; */
    }
    if (combatState === true && shipY < 0) {
      // shipVelocity = 5;
      shipRotate = 0;
      combatState = false;
    }
  }
}
//gameplay in stage2

//gameplay in stage3

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

let shipX = 0;
let shipY = 0; // put back to 350
let shipRotate = 0;
let shipSize = 0.3;
let shipVelocity = 3;
let boosterSize = 0.6;

let combatState = false;
//Player (ship and flames and ammo)
function ship() {
  angleMode(DEGREES);
  push();
  stroke(0);
  strokeWeight(3 * shipSize);
  translate(300, 400);
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
  translate(300, 400);
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
  translate(300, 400);
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
  translate(300, 385);
  beginShape();
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
let speed = 2;
let enemies1 = [];
let enemies2 = [];
let enemies3 = [];

class Enemy1 {
  constructor(x, y, size, rotation) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = rotation;
  }

  move(speed) {
    let dx = 300 - this.x;
    let dy = 400 - this.y;
    let angle = atan2(dy, dx);
    this.x += cos(angle) * speed;
    this.y += sin(angle) * speed;
  }

  draw() {
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    // Connections
    stroke(0);
    strokeWeight(5 * this.size);
    fill(100);
    rect(-70 * this.size, -10 * this.size, 140 * this.size, 20 * this.size);

    // Turbine
    quad(
      -15 * this.size,
      -80 * this.size,
      -10 * this.size,
      -95 * this.size,
      +10 * this.size,
      -95 * this.size,
      +15 * this.size,
      -80 * this.size
    );

    // Outer ring
    strokeWeight(20 * this.size);
    noFill();
    arc(0, 0, 150 * this.size, 150 * this.size, 115, 65);
    strokeWeight(13 * this.size);
    stroke(140);
    arc(0, 0, 150 * this.size, 150 * this.size, 115, 65);

    // Midsection
    stroke(0);
    strokeWeight(5 * this.size);
    fill(140);
    circle(0, 0, 90 * this.size);
    strokeWeight(4 * this.size);
    circle(0, -55 * this.size, 20 * this.size);
    noFill();

    // Window
    strokeWeight(15 * this.size);
    arc(0, -5 * this.size, 70 * this.size, 70 * this.size, 50, 130);
    strokeWeight(10 * this.size);
    stroke(170, 40, 0);
    arc(0, -5 * this.size, 70 * this.size, 70 * this.size, 50, 130);

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
    let dx = 300 - this.x;
    let dy = 400 - this.y;
    let angle = atan2(dy, dx);
    this.x += cos(angle) * speed;
    this.y += sin(angle) * speed;
  }
  draw() {
    push();
    angleMode(DEGREES);
    translate(this.x, this.y);
    rotate(this.rotation);

    // Your original enemy drawing code
    fill(150);
    stroke(0);
    strokeWeight(3 * this.size);
    // Inner body
    circle(0, 0, 70 * this.size);
    rect(-40 * this.size, -55 * this.size, 65 * this.size, 55 * this.size);
    circle(0, 0, 30 * this.size);

    // Inner wings
    triangle(
      +25 * this.size,
      -100 * this.size,
      +25 * this.size,
      +100 * this.size,
      +100 * this.size,
      -100 * this.size
    );
    triangle(
      -25 * this.size,
      -100 * this.size,
      -25 * this.size,
      +100 * this.size,
      -100 * this.size,
      -100 * this.size
    );

    // Window
    noFill();
    strokeWeight(10 * this.size);
    arc(0, -10 * this.size, 70 * this.size, 70 * this.size, 60, 120);
    strokeWeight(5 * this.size);
    stroke(170, 40, 0);
    arc(0, -10 * this.size, 70 * this.size, 70 * this.size, 60, 120);

    // Outer wings
    fill(150);
    strokeWeight(3 * this.size);
    stroke(0);
    triangle(
      +125 * this.size,
      -100 * this.size,
      +125 * this.size,
      0,
      +90 * this.size,
      -100 * this.size
    );
    triangle(
      -125 * this.size,
      -100 * this.size,
      -125 * this.size,
      0,
      -90 * this.size,
      -100 * this.size
    );

    // Engines and other parts
    noStroke();
    rect(-123 * this.size, -99 * this.size, 96 * this.size, 55 * this.size);
    rect(+123 * this.size, -99 * this.size, -96 * this.size, 55 * this.size);

    noFill();
    stroke(3 * this.size);
    arc(
      +95 * this.size,
      -10 * this.size,
      50 * this.size,
      70 * this.size,
      225,
      311
    );
    arc(
      -95 * this.size,
      -10 * this.size,
      50 * this.size,
      70 * this.size,
      235,
      310
    );

    // Engines
    fill(80);
    rect(-90 * this.size, -125 * this.size, 40 * this.size, 60 * this.size);
    arc(
      -70 * this.size,
      -67 * this.size,
      40.6 * this.size,
      20 * this.size,
      0,
      180
    );
    rect(+90 * this.size, -125 * this.size, -40 * this.size, 60 * this.size);
    arc(
      +70 * this.size,
      -67 * this.size,
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
  push();
  // Create enemy1 with different positions and sizes in stage1
  enemies1.push(new Enemy1(300, -300, 0.4, 0));
  enemies1.push(new Enemy1(1050, -100, 0.4, 50));
  enemies1.push(new Enemy1(1050, 400, 0.4, 90));
  enemies1.push(new Enemy1(720, 760, 0.4, 135));
  enemies1.push(new Enemy1(590, 1400, 0.4, 165));
  enemies1.push(new Enemy1(-50, 750, 0.4, -135));
  enemies1.push(new Enemy1(-700, 100, 0.4, 280));

  // Create enemy2 with different positions and sizes in stage 2
  enemies2.push(new Enemy2(0, -800, 0.35, 0));
  enemies2.push(new Enemy2(800, -200, 0.35, 45));
  enemies2.push(new Enemy2(825, 25, 0.35, 55));
  enemies2.push(new Enemy2(1300, 200, 0.35, 85));
  enemies2.push(new Enemy2(1500, 1000, 0.35, 120));
  enemies2.push(new Enemy2(925, 1400, 0.35, 150));
  enemies2.push(new Enemy2(300, 1000, 0.35, 180));
  enemies2.push(new Enemy2(-100, 800, 0.35, 225));
  enemies2.push(new Enemy2(-300, 460, 0.35, 265));
  enemies2.push(new Enemy2(-150, 100, 0.35, 300));
  enemies2.push(new Enemy2(-100, -600, 0.35, -35));

  // Create enemy1 with different positions and sizes in stage 3
  enemies3.push(new Enemy1(-450, 0, 0.4, -90));
  enemies3.push(new Enemy1(-500, 600, 0.4, -105));
  enemies3.push(new Enemy1(-150, 700, 0.4, -125));
  enemies3.push(new Enemy1(50, 925, 0.4, -140));
  enemies3.push(new Enemy1(50, 1400, 0.4, -165));
  enemies3.push(new Enemy1(300, 1150, 0.4, 180));
  enemies3.push(new Enemy1(600, 1200, 0.4, 165));
  enemies3.push(new Enemy1(700, 1300, 0.4, 150));
  enemies3.push(new Enemy2(675, 800, 0.35, 125));
  enemies3.push(new Enemy2(900, 550, 0.35, 105));
  enemies3.push(new Enemy2(1300, 400, 0.35, 90));
  enemies3.push(new Enemy2(800, 800, 0.35, 120));
  enemies3.push(new Enemy2(900, 400, 0.35, 90));
  enemies3.push(new Enemy2(175, 1150, 0.35, 190));
  enemies3.push(new Enemy2(-150, 1300, 0.35, 205));
  enemies3.push(new Enemy2(-500, 1650, 0.35, 230));
  pop();
}

//Gem

//projectile
let projectiles = [];
let projectileX = 300;
let projectileY = 400;
let projectileRotate = 0;
class Projectile {
  constructor(startProjectileX, startProjectileY, projectileAngle) {
    this.projectileX = startProjectileX;
    this.projectileY = startProjectileY;
    this.projectileAngle = projectileAngle;
    this.projectileSize = 0.3;
    this.speed = -15;
  }

  draw() {
    push();
    translate(this.projectileX, this.projectileY);
    angleMode(DEGREES);
    rotate(this.projectileAngle);
    strokeWeight(1.5);
    stroke(110, 220, 255);
    fill(181, 255, 255);
    rect(
      0,
      0,
      70 * this.projectileSize,
      20 * this.projectileSize,
      20 * this.projectileSize
    );
    pop();
  }
  move() {
    this.projectileX += this.speed * cos(this.projectileAngle);
    this.projectileY += this.speed * sin(this.projectileAngle);
    console.log(this.projectileY);
    console.log(this.projectileX);
    //console.log(enemies.length);
  }
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
let gameState = "stageFinal";
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

//The big ship
let mothaShipX = 0;
let mothaShipY = 0;
function mothaship() {
  push();
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
  push();
  rect(mothaShipX - 100, mothaShipY + 100, 200, 240);
  stroke(240, 200, 0);
  fill(240, 200, 0);
  textSize(140);
  textFont("arial");
  text("H", mothaShipX - 50, mothaShipY + 230);
  fill(50);
  stroke(0);
  pop();

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
  } else if (gameState === "stage1") {
    stage1.draw();
    ship();
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
  //instructions
  if (gameState === "instructions") {
    instructionsScreen.draw();
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
  //howToPlay
  if (gameState === "howToPlay") {
    howToPlayScreen.draw();
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
  //winScreen
  if (gameState === "win") {
    winScreen.draw();
    combatState = false;

    if (mouseIsPressed) {
      if (mouseX > 47 && mouseX < 252 && mouseY > 610 && mouseY < 685) {
        gameState = "start";
        shipY = 400;
        combatState = false;
        shipRotate = 0;
      } else if (mouseX > 345 && mouseX < 552 && mouseY > 610 && mouseY < 685) {
        gameState = "stage0";
        shipY = 400;
        combatState = false;
        shipRotate = 0;
      }
    }
  }
  //loseScreen
  if (gameState === "lose") {
    loseScreen.draw();
    combatState = false;
    if (mouseIsPressed) {
      if (mouseX > 77 && mouseX < 222 && mouseY > 610 && mouseY < 685) {
        gameState = "start";
        shipY = 400;
        combatState = false;
        shipRotate = 0;
      } else if (mouseX > 315 && mouseX < 522 && mouseY > 610 && mouseY < 685) {
        gameState = "stage0";
        shipY = 400;
        combatState = false;
        shipRotate = 0;
      }
    }
  }
  //combat state mechanics (moving)
  if (combatState === false) {
    if (keyIsDown(38) || keyIsDown(87)) {
      shipBooster();
      shipVelocity = 5;
      shipY -= shipVelocity;
    }
  } else if (combatState === true) {
    shipVelocity = 0;
    if (keyIsDown(39) || keyIsDown(68)) {
      shipTurningRightBooster();
      shipRotate += 7.5;
    } else if (keyIsDown(37) || keyIsDown(65)) {
      shipTurningLeftBooster();
      shipRotate -= 7.5;
    }
  }
  //gameplay in stage0
  if (gameState === "stage0") {
    stage0.draw();
    mothaship();
    ship();
    motharoof();
    if (keyIsDown(38) || (keyIsDown(87) && shipY > -300)) {
      shipBooster();
    }
    shipY -= 3;

    if (shipY <= 150) {
      shipY += 3;
    }
    if (shipY <= -440) {
      gameState = "stage1";
      shipY = 380;
    }
  }
  // gameplay in stage1
  if (gameState === "stage1") {
    combatState = false;
    if (shipY <= -440) {
      gameState = "stage2";
      shipY = 400;
    }

    //enemies = enemies.filter((enemy) => enemy.y < -70);
    //spawning enemies
    if (shipY <= 0) {
      for (let enemy of enemies1) {
        enemy.draw();
        enemy.move(speed);
        //console.log(enemy.y);

        //gameState lose for when they get too close
        let deadthDistance = dist(300, 400, enemy.x, enemy.y);
        if (deadthDistance <= 30) {
          gameState = "lose";
        }
      }
    }
    //combate state at shipY = 0
    if (shipY === 0) {
      combatState = true;
    }

    //changing the gameplay tobe playable after the enemies disappear and it's length is 0
    if (enemies1.length === 0) {
      combatState = false;
      shipRotate = 0;
    }

    //making projectles
    for (let i = projectiles.length - 1; i >= 0; i--) {
      let projectile = projectiles[i];
      projectile.move();
      projectile.draw();

      // Remove projectiles ??
      if (
        projectile.projectileX <= -10 ||
        projectile.projectileY <= -10 ||
        projectile.projectileX >= 610 ||
        projectile.projectileY >= 810
      ) {
        projectiles.splice(i, 1);
      }
      //making enemies
      for (let j = enemies1.length - 1; j >= 0; j--) {
        let enemy = enemies1[j];
        //console.log(projectileY);

        //collision using distance method
        let distance = dist(
          projectile.projectileX,
          projectile.projectileY,
          enemy.x,
          enemy.y
        );
        if (distance < 42.5) {
          enemies1.splice(j, 1);
          projectiles.splice(i, 1);
          console.log("hit");
          break; //(this makes it to where it exits the enemy loop after collision is detected boyyyy)
        }
      }
    }
  }

  //gameplay in stage2
  if (gameState === "stage2") {
    combatState = false;
    if (shipY <= -440) {
      gameState = "stageFinal";
      shipY = 380;
    }
    console.log(shipY);
    //enemies = enemies.filter((enemy) => enemy.y < -70);
    //spawning enemies
    if (shipY <= 0) {
      for (let enemy of enemies2) {
        enemy.draw();
        //enemy.move(speed);
        //console.log(enemy.y);

        //gameState lose for when they get too close
        let deadthDistance = dist(300, 400, enemy.x, enemy.y);
        if (deadthDistance <= 30) {
          gameState = "lose";
        }
      }
    }
    //combate state at shipY = 0
    if (shipY === 0) {
      combatState = true;
    }

    //changing the gameplay tobe playable after the enemies disappear and it's length is 0
    if (enemies2.length === 0) {
      combatState = false;
      shipRotate = 0;
    }

    //making projectles
    for (let i = projectiles.length - 1; i >= 0; i--) {
      let projectile = projectiles[i];
      projectile.move();
      projectile.draw();

      // Remove projectiles ??
      if (
        projectile.projectileX <= -10 ||
        projectile.projectileY <= -10 ||
        projectile.projectileX >= 610 ||
        projectile.projectileY >= 810
      ) {
        projectiles.splice(i, 1);
      }
      //making enemies
      for (let j = enemies2.length - 1; j >= 0; j--) {
        let enemy = enemies2[j];
        //console.log(projectileY);

        //collision using distance method
        let distance = dist(
          projectile.projectileX,
          projectile.projectileY,
          enemy.x,
          enemy.y
        );
        if (distance < 42.5) {
          enemies2.splice(j, 1);
          projectiles.splice(i, 1);
          console.log("hit");
          break; //(this makes it to where it exits the enemy loop after collision is detected boyyyy)
        }
      }
    }
  }

  //gameplay in stageFinal
  if (gameState === "stageFinal") {
    combatState = false;
    console.log(shipY);
    //spawning enemies
    if (shipY <= 0) {
      for (let enemy of enemies3) {
        enemy.draw();
        enemy.move(speed);
        //console.log(enemy.y);

        //gameState lose for when they get too close
        let deadthDistance = dist(300, 400, enemy.x, enemy.y);
        if (deadthDistance <= 30) {
          gameState = "lose";
        }
      }
    }
    //combate state at shipY = 0
    if (shipY === 0) {
      combatState = true;
    }

    //changing the gameplay tobe playable after the enemies disappear and it's length is 0
    if (enemies3.length === 0) {
      combatState = false;
      shipRotate = 0;
    }

    //making projectles
    for (let i = projectiles.length - 1; i >= 0; i--) {
      let projectile = projectiles[i];
      projectile.move();
      projectile.draw();

      // Remove projectiles ??
      if (
        projectile.projectileX <= -10 ||
        projectile.projectileY <= -10 ||
        projectile.projectileX >= 610 ||
        projectile.projectileY >= 810
      ) {
        projectiles.splice(i, 1);
      }
      //making enemies
      for (let j = enemies3.length - 1; j >= 0; j--) {
        let enemy = enemies3[j];
        //console.log(projectileY);

        //collision using distance method
        let distance = dist(
          projectile.projectileX,
          projectile.projectileY,
          enemy.x,
          enemy.y
        );
        if (distance < 42.5) {
          enemies3.splice(j, 1);
          projectiles.splice(i, 1);
          console.log("hit");
          break; //(this makes it to where it exits the enemy loop after collision is detected boyyyy)
        }
      }
    }

    //winning condition
    if (shipY <= -170) {
      shipVelocity = 0;
      shipY -= 3;
    }
    if (shipY <= -380) {
      gameState = "win";
    }
  }
}

//appear the flame at the bottom of ship
function keyPressed() {
  if (keyCode === 32 && combatState === true) {
    createProjectile();
  }

  // Rotate the ship using arrow keys
  if (keyCode === LEFT_ARROW) {
    projectileRotate -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    projectileRotate += 10;
  }
}
//making projectiles
function createProjectile() {
  angleMode(DEGREES);
  let newProjectile = new Projectile(shipX + 300, shipY + 400, shipRotate + 90);
  projectiles.push(newProjectile);
}

function setup() {
  createCanvas(600, 800);
}
let shipX = 0;
let shipY = 350;
let shipRotate = 0;
let shipSize = 0.3;
let shipVelocity = 5;

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
//Enemies
//enemy1
let enemy101X = 0;
let enemy102X = 0;
let enemy103X = 0;
let enemy104X = 0;
let enemy105X = 0;
let enemy106X = 0;
let enemy107X = 0;
let enemy108X = 0;
let enemy109X = 0;
let enemy101Y = -250;
let enemy102Y = -20;
let enemy103Y = -400;
let enemy104Y = -300;
let enemy105Y = -210;
let enemy106Y = -100;
let enemy107Y = -120;
let enemy108Y = -350;
let enemy109Y = -270;
let enemy1Size = 0.4;
let enemyVelocity = 5;
let enemyY = -250;

function enemy101() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(60);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy101X - 70 * enemy1Size,
    enemy101Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy101X - 15 * enemy1Size,
    enemy101Y - 80 * enemy1Size,
    enemy101X - 10 * enemy1Size,
    enemy101Y - 95 * enemy1Size,
    enemy101X + 10 * enemy1Size,
    enemy101Y - 95 * enemy1Size,
    enemy101X + 15 * enemy1Size,
    enemy101Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy101X, enemy101Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy101X, enemy101Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy101X, enemy101Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy101X, enemy101Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy101X,
    enemy101Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy101X,
    enemy101Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}
function enemy102() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(40);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy102X - 70 * enemy1Size,
    enemy102Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy102X - 15 * enemy1Size,
    enemy102Y - 80 * enemy1Size,
    enemy102X - 10 * enemy1Size,
    enemy102Y - 95 * enemy1Size,
    enemy102X + 10 * enemy1Size,
    enemy102Y - 95 * enemy1Size,
    enemy102X + 15 * enemy1Size,
    enemy102Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy102X, enemy102Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy102X, enemy102Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy102X, enemy102Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy102X, enemy102Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy102X,
    enemy102Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy102X,
    enemy102Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}
function enemy103() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(12);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy103X - 70 * enemy1Size,
    enemy103Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy103X - 15 * enemy1Size,
    enemy103Y - 80 * enemy1Size,
    enemy103X - 10 * enemy1Size,
    enemy103Y - 95 * enemy1Size,
    enemy103X + 10 * enemy1Size,
    enemy103Y - 95 * enemy1Size,
    enemy103X + 15 * enemy1Size,
    enemy103Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy103X, enemy103Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy103X, enemy103Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy103X, enemy103Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy103X, enemy103Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy103X,
    enemy103Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy103X,
    enemy103Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}
function enemy104() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(-30);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy104X - 70 * enemy1Size,
    enemy104Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy104X - 15 * enemy1Size,
    enemy104Y - 80 * enemy1Size,
    enemy104X - 10 * enemy1Size,
    enemy104Y - 95 * enemy1Size,
    enemy104X + 10 * enemy1Size,
    enemy104Y - 95 * enemy1Size,
    enemy104X + 15 * enemy1Size,
    enemy104Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy104X, enemy104Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy104X, enemy104Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy104X, enemy104Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy104X, enemy104Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy104X,
    enemy104Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy104X,
    enemy104Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}
function enemy105() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(-40);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy105X - 70 * enemy1Size,
    enemy105Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy105X - 15 * enemy1Size,
    enemy105Y - 80 * enemy1Size,
    enemy105X - 10 * enemy1Size,
    enemy105Y - 95 * enemy1Size,
    enemy105X + 10 * enemy1Size,
    enemy105Y - 95 * enemy1Size,
    enemy105X + 15 * enemy1Size,
    enemy105Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy105X, enemy105Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy105X, enemy105Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy105X, enemy105Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy105X, enemy105Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy105X,
    enemy105Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy105X,
    enemy105Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}
function enemy106() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(180);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy106X - 70 * enemy1Size,
    enemy106Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy106X - 15 * enemy1Size,
    enemy106Y - 80 * enemy1Size,
    enemy106X - 10 * enemy1Size,
    enemy106Y - 95 * enemy1Size,
    enemy106X + 10 * enemy1Size,
    enemy106Y - 95 * enemy1Size,
    enemy106X + 15 * enemy1Size,
    enemy106Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy106X, enemy106Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy106X, enemy106Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy106X, enemy106Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy106X, enemy106Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy106X,
    enemy106Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy106X,
    enemy106Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}
function enemy107() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(270);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy107X - 70 * enemy1Size,
    enemy107Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy107X - 15 * enemy1Size,
    enemy107Y - 80 * enemy1Size,
    enemy107X - 10 * enemy1Size,
    enemy107Y - 95 * enemy1Size,
    enemy107X + 10 * enemy1Size,
    enemy107Y - 95 * enemy1Size,
    enemy107X + 15 * enemy1Size,
    enemy107Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy107X, enemy107Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy107X, enemy107Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy107X, enemy107Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy107X, enemy107Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy107X,
    enemy107Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy107X,
    enemy107Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}
function enemy108() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(55);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy108X - 70 * enemy1Size,
    enemy108Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy108X - 15 * enemy1Size,
    enemy108Y - 80 * enemy1Size,
    enemy108X - 10 * enemy1Size,
    enemy108Y - 95 * enemy1Size,
    enemy108X + 10 * enemy1Size,
    enemy108Y - 95 * enemy1Size,
    enemy108X + 15 * enemy1Size,
    enemy108Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy108X, enemy108Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy108X, enemy108Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy108X, enemy108Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy108X, enemy108Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy108X,
    enemy108Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy108X,
    enemy108Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}
function enemy109() {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate();
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy109X - 70 * enemy1Size,
    enemy109Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy109X - 15 * enemy1Size,
    enemy109Y - 80 * enemy1Size,
    enemy109X - 10 * enemy1Size,
    enemy109Y - 95 * enemy1Size,
    enemy109X + 10 * enemy1Size,
    enemy109Y - 95 * enemy1Size,
    enemy109X + 15 * enemy1Size,
    enemy109Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy109X, enemy109Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy109X, enemy109Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy109X, enemy109Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy109X, enemy109Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy109X,
    enemy109Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy109X,
    enemy109Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}

//Gem

//enemy2
function enemy2(enemy2X, enemy2Y) {
  angleMode(DEGREES);
  /* let enemy2X = 0;
  let enemy2Y = 0; */
  let enemy2Size = 1.0;
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy2Size);
  //iner
  circle(enemy2X, enemy2Y, 70 * enemy2Size);
  rect(
    enemy2X - 40 * enemy2Size,
    enemy2Y - 55 * enemy2Size,
    65 * enemy2Size,
    55 * enemy2Size
  );
  circle(enemy2X, enemy2Y, 30 * enemy2Size);
  //inner wings
  triangle(
    enemy2X + 25 * enemy2Size,
    enemy2Y - 100 * enemy2Size,
    enemy2X + 25 * enemy2Size,
    enemy2Y + 100 * enemy2Size,
    enemy2X + 100 * enemy2Size,
    enemy2Y - 100 * enemy2Size
  );
  triangle(
    enemy2X - 25 * enemy2Size,
    enemy2Y - 100 * enemy2Size,
    enemy2X - 25 * enemy2Size,
    enemy2Y + 100 * enemy2Size,
    enemy2X - 100 * enemy2Size,
    enemy2Y - 100 * enemy2Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy2Size);
  arc(
    enemy2X,
    enemy2Y + -10 * enemy2Size,
    70 * enemy2Size,
    70 * enemy2Size,
    60,
    120
  );
  strokeWeight(5 * enemy2Size);
  stroke(0, 40, 200);
  arc(
    enemy2X,
    enemy2Y + -10 * enemy2Size,
    70 * enemy2Size,
    70 * enemy2Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy2Size);
  stroke(0);
  triangle(
    enemy2X + 125 * enemy2Size,
    enemy2Y - 100 * enemy2Size,
    enemy2X + 125 * enemy2Size,
    enemy2Y,
    enemy2X + 90 * enemy2Size,
    enemy2Y - 100 * enemy2Size
  );
  triangle(
    enemy2X - 125 * enemy2Size,
    enemy2Y - 100 * enemy2Size,
    enemy2X - 125 * enemy2Size,
    enemy2Y,
    enemy2X - 90 * enemy2Size,
    enemy2Y - 100 * enemy2Size
  );
  noStroke();
  rect(
    enemy2X - 123 * enemy2Size,
    enemy2Y - 99 * enemy2Size,
    96 * enemy2Size,
    55 * enemy2Size
  );
  rect(
    enemy2X + 123 * enemy2Size,
    enemy2Y - 99 * enemy2Size,
    -96 * enemy2Size,
    55 * enemy2Size
  );
  noFill();
  stroke(3 * enemy2Size);
  arc(
    enemy2X + 95 * enemy2Size,
    enemy2Y - 10 * enemy2Size,
    50 * enemy2Size,
    70 * enemy2Size,
    225,
    311
  );
  arc(
    enemy2X - 95 * enemy2Size,
    enemy2Y - 10 * enemy2Size,
    50 * enemy2Size,
    70 * enemy2Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy2Size);
  rect(
    enemy2X - 90 * enemy2Size,
    enemy2Y - 125 * enemy2Size,
    40 * enemy2Size,
    60 * enemy2Size
  );
  arc(
    enemy2X - 70 * enemy2Size,
    enemy2Y - 67 * enemy2Size,
    40.6 * enemy2Size,
    20 * enemy2Size,
    0,
    180
  );
  rect(
    enemy2X + 90 * enemy2Size,
    enemy2Y - 125 * enemy2Size,
    -40 * enemy2Size,
    60 * enemy2Size
  );
  arc(
    enemy2X + 70 * enemy2Size,
    enemy2Y - 67 * enemy2Size,
    40.6 * enemy2Size,
    20 * enemy2Size,
    0,
    180
  );
  pop();
}

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

function draw() {
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "stage0") {
    stage0.draw();
    projectile();
    ship();
    enemy101();
    enemy102();
    enemy103();
    enemy104();
    enemy105();
    enemy106();
    enemy107();
    enemy108();
    enemy109();
  } else if (gameState === "stage1") {
    stage1.draw();
  } else if (gameState === "stage2") {
    stage2.draw();
  } else if (gameState === "stageFinal") {
    stageFinal.draw();
  } else if (gameState === "howToPlay") {
    howToPlayScreen.draw();
  } else if (gameState === "instructions") {
    instructionsScreen.draw();
  } else if (gameState === "lose") {
    loseScreen.draw();
  } else if (gameState === "win") {
    winScreen.draw();
  } /* else if (gameState === "pause") {
    pauseScreen.draw();
  } */

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

  //gameplay in stage0

  if (gameState === "stage0") {
    //key functionalities
    if (keyIsDown(38) || keyIsDown(87)) {
      shipY -= shipVelocity;
      projectileY -= shipVelocity;
    } else if (keyIsDown(39) || keyIsDown(68)) {
      shipRotate += 10;
    } else if (keyIsDown(37) || keyIsDown(65)) {
      shipRotate -= 10;
    }

    //stopping at shY && eY1 = 0
    if (shipY <= 0) {
      shipVelocity = 0;
      shipY = 0;
      enemy101Y += enemyVelocity;
      enemy102Y += enemyVelocity;
      enemy103Y += enemyVelocity;
      enemy104Y += enemyVelocity;
      enemy105Y += enemyVelocity;
      enemy106Y += enemyVelocity;
      enemy107Y += enemyVelocity;
      enemy108Y += enemyVelocity;
      enemy109Y += enemyVelocity;
      console.log(enemyVelocity);
      if (enemyY >= -45) {
        enemyVelocity = 0;
      }
    } else if (shipY >= 0) {
      shipRotate = 0;
    }
  }

  //gameplay in stage1

  //gameplay in stage2

  //gameplay in stage3
}

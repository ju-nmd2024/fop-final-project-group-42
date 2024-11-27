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
let enemy1X = -100;
let enemy1Y = 0;
let enemy1Size = 0.4;
let enemyVelocity = 2;
function enemy1(enemy1X, enemy1Y, enemy1Angle) {
  angleMode(DEGREES);
  push();
  translate(300, 400);
  rotate(enemy1Angle);
  //connections
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(100);
  rect(
    enemy1X - 70 * enemy1Size,
    enemy1Y - 10 * enemy1Size,
    140 * enemy1Size,
    20 * enemy1Size
  );
  //turbine
  quad(
    enemy1X - 15 * enemy1Size,
    enemy1Y - 80 * enemy1Size,
    enemy1X - 10 * enemy1Size,
    enemy1Y - 95 * enemy1Size,
    enemy1X + 10 * enemy1Size,
    enemy1Y - 95 * enemy1Size,
    enemy1X + 15 * enemy1Size,
    enemy1Y - 80 * enemy1Size
  );
  //outer ring
  strokeWeight(20 * enemy1Size);
  noFill();
  arc(enemy1X, enemy1Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  strokeWeight(13 * enemy1Size);
  stroke(140);
  arc(enemy1X, enemy1Y, 150 * enemy1Size, 150 * enemy1Size, 115, 65);
  //mid section
  stroke(0);
  strokeWeight(5 * enemy1Size);
  fill(140);
  circle(enemy1X, enemy1Y, 90 * enemy1Size);
  strokeWeight(4 * enemy1Size);
  circle(enemy1X, enemy1Y - 55 * enemy1Size, 20 * enemy1Size);
  noFill();
  //window
  strokeWeight(15 * enemy1Size);
  arc(
    enemy1X,
    enemy1Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  strokeWeight(10 * enemy1Size);
  stroke(170, 40, 0);
  arc(
    enemy1X,
    enemy1Y + -5 * enemy1Size,
    70 * enemy1Size,
    70 * enemy1Size,
    50,
    130
  );
  pop();
}

//Gem

//enemy2
let enemy201X = 0;
let enemy201Y = 0;
let enemy201Size = 1.0;

let enemy2Size = 0.4;
let enemy2X = 3;
enemy2Y = 4;

let enemy202X = 0;
let enemy202Y = 0;
let enemy202Size = 1.0;

let enemy203X = 0;
let enemy203Y = 0;
let enemy203Size = 1.0;

let enemy204X = 0;
let enemy204Y = 0;
let enemy204Size = 1.0;

let enemy205X = 0;
let enemy205Y = 0;
let enemy205Size = 1.0;

let enemy206X = 0;
let enemy206Y = 0;
let enemy206Size = 1.0;

let enemy207X = 0;
let enemy207Y = 0;
let enemy207Size = 1.0;

let enemy208X = 0;
let enemy208Y = 0;
let enemy208Size = 1.0;

let enemy209X = 0;
let enemy209Y = 0;
let enemy209Size = 1.0;

function enemy2model(enemy2X, enemy2Y) {
  angleMode(DEGREES);
  // let enemy2X = 0;
  // let enemy2Y = 0;
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
function enemy201(enemy201X, enemy201Y) {
  angleMode(DEGREES);
  let enemy201Size = 1.0;
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy201Size);
  //iner
  circle(enemy201X, enemy201Y, 70 * enemy201Size);
  rect(
    enemy201X - 40 * enemy201Size,
    enemy201Y - 55 * enemy201Size,
    65 * enemy201Size,
    55 * enemy201Size
  );
  circle(enemy201X, enemy201Y, 30 * enemy201Size);
  //inner wings
  triangle(
    enemy201X + 25 * enemy201Size,
    enemy201Y - 100 * enemy201Size,
    enemy201X + 25 * enemy201Size,
    enemy201Y + 100 * enemy201Size,
    enemy201X + 100 * enemy201Size,
    enemy201Y - 100 * enemy201Size
  );
  triangle(
    enemy201X - 25 * enemy201Size,
    enemy201Y - 100 * enemy201Size,
    enemy201X - 25 * enemy201Size,
    enemy201Y + 100 * enemy201Size,
    enemy201X - 100 * enemy201Size,
    enemy201Y - 100 * enemy201Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy201Size);
  arc(
    enemy201X,
    enemy201Y + -10 * enemy201Size,
    70 * enemy201Size,
    70 * enemy201Size,
    60,
    120
  );
  strokeWeight(5 * enemy201Size);
  stroke(0, 40, 200);
  arc(
    enemy201X,
    enemy201Y + -10 * enemy201Size,
    70 * enemy201Size,
    70 * enemy201Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy201Size);
  stroke(0);
  triangle(
    enemy201X + 125 * enemy201Size,
    enemy201Y - 100 * enemy201Size,
    enemy201X + 125 * enemy201Size,
    enemy201Y,
    enemy201X + 90 * enemy201Size,
    enemy201Y - 100 * enemy201Size
  );
  triangle(
    enemy201X - 125 * enemy201Size,
    enemy201Y - 100 * enemy201Size,
    enemy201X - 125 * enemy201Size,
    enemy201Y,
    enemy201X - 90 * enemy201Size,
    enemy201Y - 100 * enemy201Size
  );
  noStroke();
  rect(
    enemy201X - 123 * enemy201Size,
    enemy201Y - 99 * enemy201Size,
    96 * enemy201Size,
    55 * enemy201Size
  );
  rect(
    enemy201X + 123 * enemy201Size,
    enemy201Y - 99 * enemy201Size,
    -96 * enemy201Size,
    55 * enemy201Size
  );
  noFill();
  stroke(3 * enemy201Size);
  arc(
    enemy201X + 95 * enemy201Size,
    enemy201Y - 10 * enemy201Size,
    50 * enemy201Size,
    70 * enemy201Size,
    225,
    311
  );
  arc(
    enemy201X - 95 * enemy201Size,
    enemy201Y - 10 * enemy201Size,
    50 * enemy201Size,
    70 * enemy201Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy201Size);
  rect(
    enemy201X - 90 * enemy201Size,
    enemy201Y - 125 * enemy201Size,
    40 * enemy201Size,
    60 * enemy201Size
  );
  arc(
    enemy201X - 70 * enemy201Size,
    enemy201Y - 67 * enemy201Size,
    40.6 * enemy201Size,
    20 * enemy201Size,
    0,
    180
  );
  rect(
    enemy201X + 90 * enemy201Size,
    enemy201Y - 125 * enemy201Size,
    -40 * enemy201Size,
    60 * enemy201Size
  );
  arc(
    enemy201X + 70 * enemy201Size,
    enemy201Y - 67 * enemy201Size,
    40.6 * enemy201Size,
    20 * enemy201Size,
    0,
    180
  );
  pop();
}

function enemy202() {
  function enemy2() {
    angleMode(DEGREES);

    push();
    translate(300, 300);
    fill(150);
    stroke(0);
    strokeWeight(3 * enemy202Size);
    //iner
    circle(enemy202X, enemy202Y, 70 * enemy202Size);
    rect(
      enemy202X - 40 * enemy202Size,
      enemy202Y - 55 * enemy202Size,
      65 * enemy202Size,
      55 * enemy202Size
    );
    circle(enemy202X, enemy202Y, 30 * enemy202Size);
    //inner wings
    triangle(
      enemy202X + 25 * enemy202Size,
      enemy202Y - 100 * enemy202Size,
      enemy202X + 25 * enemy202Size,
      enemy202Y + 100 * enemy202Size,
      enemy202X + 100 * enemy202Size,
      enemy202Y - 100 * enemy202Size
    );
    triangle(
      enemy202X - 25 * enemy202Size,
      enemy202Y - 100 * enemy202Size,
      enemy202X - 25 * enemy202Size,
      enemy202Y + 100 * enemy202Size,
      enemy202X - 100 * enemy202Size,
      enemy202Y - 100 * enemy202Size
    );
    //window
    noFill();
    strokeWeight(10 * enemy202Size);
    arc(
      enemy202X,
      enemy202Y + -10 * enemy202Size,
      70 * enemy202Size,
      70 * enemy202Size,
      60,
      120
    );
    strokeWeight(5 * enemy202Size);
    stroke(0, 40, 200);
    arc(
      enemy202X,
      enemy202Y + -10 * enemy202Size,
      70 * enemy202Size,
      70 * enemy202Size,
      60,
      120
    );
    //outer wings
    fill(150);
    strokeWeight(3 * enemy202Size);
    stroke(0);
    triangle(
      enemy202X + 125 * enemy202Size,
      enemy202Y - 100 * enemy202Size,
      enemy202X + 125 * enemy202Size,
      enemy202Y,
      enemy202X + 90 * enemy202Size,
      enemy202Y - 100 * enemy202Size
    );
    triangle(
      enemy202X - 125 * enemy202Size,
      enemy202Y - 100 * enemy202Size,
      enemy202X - 125 * enemy202Size,
      enemy202Y,
      enemy202X - 90 * enemy202Size,
      enemy202Y - 100 * enemy202Size
    );
    noStroke();
    rect(
      enemy202X - 123 * enemy202Size,
      enemy202Y - 99 * enemy202Size,
      96 * enemy202Size,
      55 * enemy202Size
    );
    rect(
      enemy202X + 123 * enemy202Size,
      enemy202Y - 99 * enemy202Size,
      -96 * enemy202Size,
      55 * enemy202Size
    );
    noFill();
    stroke(3 * enemy202Size);
    arc(
      enemy202X + 95 * enemy202Size,
      enemy202Y - 10 * enemy202Size,
      50 * enemy202Size,
      70 * enemy202Size,
      225,
      311
    );
    arc(
      enemy202X - 95 * enemy202Size,
      enemy202Y - 10 * enemy202Size,
      50 * enemy202Size,
      70 * enemy202Size,
      235,
      310
    );
    noStroke();
    fill(150);
    // engines
    fill(80);
    stroke(3 * enemy202Size);
    rect(
      enemy202X - 90 * enemy202Size,
      enemy202Y - 125 * enemy202Size,
      40 * enemy202Size,
      60 * enemy202Size
    );
    arc(
      enemy202X - 70 * enemy202Size,
      enemy202Y - 67 * enemy202Size,
      40.6 * enemy202Size,
      20 * enemy202Size,
      0,
      180
    );
    rect(
      enemy202X + 90 * enemy202Size,
      enemy202Y - 125 * enemy202Size,
      -40 * enemy202Size,
      60 * enemy202Size
    );
    arc(
      enemy202X + 70 * enemy202Size,
      enemy202Y - 67 * enemy202Size,
      40.6 * enemy202Size,
      20 * enemy202Size,
      0,
      180
    );
    pop();
  }
}
function enemy203() {
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy203Size);
  //iner
  circle(enemy203X, enemy203Y, 70 * enemy203Size);
  rect(
    enemy203X - 40 * enemy203Size,
    enemy203Y - 55 * enemy203Size,
    65 * enemy203Size,
    55 * enemy203Size
  );
  circle(enemy203X, enemy203Y, 30 * enemy203Size);
  //inner wings
  triangle(
    enemy203X + 25 * enemy203Size,
    enemy203Y - 100 * enemy203Size,
    enemy203X + 25 * enemy203Size,
    enemy203Y + 100 * enemy203Size,
    enemy203X + 100 * enemy203Size,
    enemy203Y - 100 * enemy203Size
  );
  triangle(
    enemy203X - 25 * enemy203Size,
    enemy203Y - 100 * enemy203Size,
    enemy203X - 25 * enemy203Size,
    enemy203Y + 100 * enemy203Size,
    enemy203X - 100 * enemy203Size,
    enemy203Y - 100 * enemy203Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy203Size);
  arc(
    enemy203X,
    enemy203Y + -10 * enemy203Size,
    70 * enemy203Size,
    70 * enemy203Size,
    60,
    120
  );
  strokeWeight(5 * enemy203Size);
  stroke(0, 40, 200);
  arc(
    enemy203X,
    enemy203Y + -10 * enemy203Size,
    70 * enemy203Size,
    70 * enemy203Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy203Size);
  stroke(0);
  triangle(
    enemy203X + 125 * enemy203Size,
    enemy203Y - 100 * enemy203Size,
    enemy203X + 125 * enemy203Size,
    enemy203Y,
    enemy203X + 90 * enemy203Size,
    enemy203Y - 100 * enemy203Size
  );
  triangle(
    enemy203X - 125 * enemy203Size,
    enemy203Y - 100 * enemy203Size,
    enemy203X - 125 * enemy203Size,
    enemy203Y,
    enemy203X - 90 * enemy203Size,
    enemy203Y - 100 * enemy203Size
  );
  noStroke();
  rect(
    enemy203X - 123 * enemy203Size,
    enemy203Y - 99 * enemy203Size,
    96 * enemy203Size,
    55 * enemy203Size
  );
  rect(
    enemy203X + 123 * enemy203Size,
    enemy203Y - 99 * enemy203Size,
    -96 * enemy203Size,
    55 * enemy203Size
  );
  noFill();
  stroke(3 * enemy203Size);
  arc(
    enemy203X + 95 * enemy203Size,
    enemy203Y - 10 * enemy203Size,
    50 * enemy203Size,
    70 * enemy203Size,
    225,
    311
  );
  arc(
    enemy203X - 95 * enemy203Size,
    enemy203Y - 10 * enemy203Size,
    50 * enemy203Size,
    70 * enemy203Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy203Size);
  rect(
    enemy203X - 90 * enemy203Size,
    enemy203Y - 125 * enemy203Size,
    40 * enemy203Size,
    60 * enemy203Size
  );
  arc(
    enemy203X - 70 * enemy203Size,
    enemy203Y - 67 * enemy203Size,
    40.6 * enemy203Size,
    20 * enemy203Size,
    0,
    180
  );
  rect(
    enemy203X + 90 * enemy203Size,
    enemy203Y - 125 * enemy203Size,
    -40 * enemy203Size,
    60 * enemy203Size
  );
  arc(
    enemy203X + 70 * enemy203Size,
    enemy203Y - 67 * enemy203Size,
    40.6 * enemy203Size,
    20 * enemy203Size,
    0,
    180
  );
  pop();
}
function enemy204() {
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy204Size);
  //iner
  circle(enemy204X, enemy204Y, 70 * enemy204Size);
  rect(
    enemy204X - 40 * enemy204Size,
    enemy204Y - 55 * enemy204Size,
    65 * enemy204Size,
    55 * enemy204Size
  );
  circle(enemy204X, enemy204Y, 30 * enemy204Size);
  //inner wings
  triangle(
    enemy204X + 25 * enemy204Size,
    enemy204Y - 100 * enemy204Size,
    enemy204X + 25 * enemy204Size,
    enemy204Y + 100 * enemy204Size,
    enemy204X + 100 * enemy204Size,
    enemy204Y - 100 * enemy204Size
  );
  triangle(
    enemy204X - 25 * enemy204Size,
    enemy204Y - 100 * enemy204Size,
    enemy204X - 25 * enemy204Size,
    enemy204Y + 100 * enemy204Size,
    enemy204X - 100 * enemy204Size,
    enemy204Y - 100 * enemy204Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy204Size);
  arc(
    enemy204X,
    enemy204Y + -10 * enemy204Size,
    70 * enemy204Size,
    70 * enemy204Size,
    60,
    120
  );
  strokeWeight(5 * enemy204Size);
  stroke(0, 40, 200);
  arc(
    enemy204X,
    enemy204Y + -10 * enemy204Size,
    70 * enemy204Size,
    70 * enemy204Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy204Size);
  stroke(0);
  triangle(
    enemy204X + 125 * enemy204Size,
    enemy204Y - 100 * enemy204Size,
    enemy204X + 125 * enemy204Size,
    enemy204Y,
    enemy204X + 90 * enemy204Size,
    enemy204Y - 100 * enemy204Size
  );
  triangle(
    enemy204X - 125 * enemy204Size,
    enemy204Y - 100 * enemy204Size,
    enemy204X - 125 * enemy204Size,
    enemy204Y,
    enemy204X - 90 * enemy204Size,
    enemy204Y - 100 * enemy204Size
  );
  noStroke();
  rect(
    enemy204X - 123 * enemy204Size,
    enemy204Y - 99 * enemy204Size,
    96 * enemy204Size,
    55 * enemy204Size
  );
  rect(
    enemy204X + 123 * enemy204Size,
    enemy204Y - 99 * enemy204Size,
    -96 * enemy204Size,
    55 * enemy204Size
  );
  noFill();
  stroke(3 * enemy204Size);
  arc(
    enemy204X + 95 * enemy204Size,
    enemy204Y - 10 * enemy204Size,
    50 * enemy204Size,
    70 * enemy204Size,
    225,
    311
  );
  arc(
    enemy204X - 95 * enemy204Size,
    enemy204Y - 10 * enemy204Size,
    50 * enemy204Size,
    70 * enemy204Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy204Size);
  rect(
    enemy204X - 90 * enemy204Size,
    enemy204Y - 125 * enemy204Size,
    40 * enemy204Size,
    60 * enemy204Size
  );
  arc(
    enemy204X - 70 * enemy204Size,
    enemy204Y - 67 * enemy204Size,
    40.6 * enemy204Size,
    20 * enemy204Size,
    0,
    180
  );
  rect(
    enemy204X + 90 * enemy204Size,
    enemy204Y - 125 * enemy204Size,
    -40 * enemy204Size,
    60 * enemy204Size
  );
  arc(
    enemy204X + 70 * enemy204Size,
    enemy204Y - 67 * enemy204Size,
    40.6 * enemy204Size,
    20 * enemy204Size,
    0,
    180
  );
  pop();
}
function enemy205() {
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy205Size);
  //iner
  circle(enemy205X, enemy205Y, 70 * enemy205Size);
  rect(
    enemy205X - 40 * enemy205Size,
    enemy205Y - 55 * enemy205Size,
    65 * enemy205Size,
    55 * enemy205Size
  );
  circle(enemy205X, enemy205Y, 30 * enemy205Size);
  //inner wings
  triangle(
    enemy205X + 25 * enemy205Size,
    enemy205Y - 100 * enemy205Size,
    enemy205X + 25 * enemy205Size,
    enemy205Y + 100 * enemy205Size,
    enemy205X + 100 * enemy205Size,
    enemy205Y - 100 * enemy205Size
  );
  triangle(
    enemy205X - 25 * enemy205Size,
    enemy205Y - 100 * enemy205Size,
    enemy205X - 25 * enemy205Size,
    enemy205Y + 100 * enemy205Size,
    enemy205X - 100 * enemy205Size,
    enemy205Y - 100 * enemy205Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy205Size);
  arc(
    enemy205X,
    enemy205Y + -10 * enemy205Size,
    70 * enemy205Size,
    70 * enemy205Size,
    60,
    120
  );
  strokeWeight(5 * enemy205Size);
  stroke(0, 40, 200);
  arc(
    enemy205X,
    enemy205Y + -10 * enemy205Size,
    70 * enemy205Size,
    70 * enemy205Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy205Size);
  stroke(0);
  triangle(
    enemy205X + 125 * enemy205Size,
    enemy205Y - 100 * enemy205Size,
    enemy205X + 125 * enemy205Size,
    enemy205Y,
    enemy205X + 90 * enemy205Size,
    enemy205Y - 100 * enemy205Size
  );
  triangle(
    enemy205X - 125 * enemy205Size,
    enemy205Y - 100 * enemy205Size,
    enemy205X - 125 * enemy205Size,
    enemy205Y,
    enemy205X - 90 * enemy205Size,
    enemy205Y - 100 * enemy205Size
  );
  noStroke();
  rect(
    enemy205X - 123 * enemy205Size,
    enemy205Y - 99 * enemy205Size,
    96 * enemy205Size,
    55 * enemy205Size
  );
  rect(
    enemy205X + 123 * enemy205Size,
    enemy205Y - 99 * enemy205Size,
    -96 * enemy205Size,
    55 * enemy205Size
  );
  noFill();
  stroke(3 * enemy205Size);
  arc(
    enemy205X + 95 * enemy205Size,
    enemy205Y - 10 * enemy205Size,
    50 * enemy205Size,
    70 * enemy205Size,
    225,
    311
  );
  arc(
    enemy205X - 95 * enemy205Size,
    enemy205Y - 10 * enemy205Size,
    50 * enemy205Size,
    70 * enemy205Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy205Size);
  rect(
    enemy205X - 90 * enemy205Size,
    enemy205Y - 125 * enemy205Size,
    40 * enemy205Size,
    60 * enemy205Size
  );
  arc(
    enemy205X - 70 * enemy205Size,
    enemy205Y - 67 * enemy205Size,
    40.6 * enemy205Size,
    20 * enemy205Size,
    0,
    180
  );
  rect(
    enemy205X + 90 * enemy205Size,
    enemy205Y - 125 * enemy205Size,
    -40 * enemy205Size,
    60 * enemy205Size
  );
  arc(
    enemy205X + 70 * enemy205Size,
    enemy205Y - 67 * enemy205Size,
    40.6 * enemy205Size,
    20 * enemy205Size,
    0,
    180
  );
  pop();
}
function enemy206() {
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy206Size);
  //iner
  circle(enemy206X, enemy206Y, 70 * enemy206Size);
  rect(
    enemy206X - 40 * enemy206Size,
    enemy206Y - 55 * enemy206Size,
    65 * enemy206Size,
    55 * enemy206Size
  );
  circle(enemy206X, enemy206Y, 30 * enemy206Size);
  //inner wings
  triangle(
    enemy206X + 25 * enemy206Size,
    enemy206Y - 100 * enemy206Size,
    enemy206X + 25 * enemy206Size,
    enemy206Y + 100 * enemy206Size,
    enemy206X + 100 * enemy206Size,
    enemy206Y - 100 * enemy206Size
  );
  triangle(
    enemy206X - 25 * enemy206Size,
    enemy206Y - 100 * enemy206Size,
    enemy206X - 25 * enemy206Size,
    enemy206Y + 100 * enemy206Size,
    enemy206X - 100 * enemy206Size,
    enemy206Y - 100 * enemy206Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy206Size);
  arc(
    enemy206X,
    enemy206Y + -10 * enemy206Size,
    70 * enemy206Size,
    70 * enemy206Size,
    60,
    120
  );
  strokeWeight(5 * enemy206Size);
  stroke(0, 40, 200);
  arc(
    enemy206X,
    enemy206Y + -10 * enemy206Size,
    70 * enemy206Size,
    70 * enemy206Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy206Size);
  stroke(0);
  triangle(
    enemy206X + 125 * enemy206Size,
    enemy206Y - 100 * enemy206Size,
    enemy206X + 125 * enemy206Size,
    enemy206Y,
    enemy206X + 90 * enemy206Size,
    enemy206Y - 100 * enemy206Size
  );
  triangle(
    enemy206X - 125 * enemy206Size,
    enemy206Y - 100 * enemy206Size,
    enemy206X - 125 * enemy206Size,
    enemy206Y,
    enemy206X - 90 * enemy206Size,
    enemy206Y - 100 * enemy206Size
  );
  noStroke();
  rect(
    enemy206X - 123 * enemy206Size,
    enemy206Y - 99 * enemy206Size,
    96 * enemy206Size,
    55 * enemy206Size
  );
  rect(
    enemy206X + 123 * enemy206Size,
    enemy206Y - 99 * enemy206Size,
    -96 * enemy206Size,
    55 * enemy206Size
  );
  noFill();
  stroke(3 * enemy206Size);
  arc(
    enemy206X + 95 * enemy206Size,
    enemy206Y - 10 * enemy206Size,
    50 * enemy206Size,
    70 * enemy206Size,
    225,
    311
  );
  arc(
    enemy206X - 95 * enemy206Size,
    enemy206Y - 10 * enemy206Size,
    50 * enemy206Size,
    70 * enemy206Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy206Size);
  rect(
    enemy206X - 90 * enemy206Size,
    enemy206Y - 125 * enemy206Size,
    40 * enemy206Size,
    60 * enemy206Size
  );
  arc(
    enemy206X - 70 * enemy206Size,
    enemy206Y - 67 * enemy206Size,
    40.6 * enemy206Size,
    20 * enemy206Size,
    0,
    180
  );
  rect(
    enemy206X + 90 * enemy206Size,
    enemy206Y - 125 * enemy206Size,
    -40 * enemy206Size,
    60 * enemy206Size
  );
  arc(
    enemy206X + 70 * enemy206Size,
    enemy206Y - 67 * enemy206Size,
    40.6 * enemy206Size,
    20 * enemy206Size,
    0,
    180
  );
  pop();
}
function enemy207() {
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy207Size);
  //iner
  circle(enemy207X, enemy207Y, 70 * enemy207Size);
  rect(
    enemy207X - 40 * enemy207Size,
    enemy207Y - 55 * enemy207Size,
    65 * enemy207Size,
    55 * enemy207Size
  );
  circle(enemy207X, enemy207Y, 30 * enemy207Size);
  //inner wings
  triangle(
    enemy207X + 25 * enemy207Size,
    enemy207Y - 100 * enemy207Size,
    enemy207X + 25 * enemy207Size,
    enemy207Y + 100 * enemy207Size,
    enemy207X + 100 * enemy207Size,
    enemy207Y - 100 * enemy207Size
  );
  triangle(
    enemy207X - 25 * enemy207Size,
    enemy207Y - 100 * enemy207Size,
    enemy207X - 25 * enemy207Size,
    enemy207Y + 100 * enemy207Size,
    enemy207X - 100 * enemy207Size,
    enemy207Y - 100 * enemy207Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy207Size);
  arc(
    enemy207X,
    enemy207Y + -10 * enemy207Size,
    70 * enemy207Size,
    70 * enemy207Size,
    60,
    120
  );
  strokeWeight(5 * enemy207Size);
  stroke(0, 40, 200);
  arc(
    enemy207X,
    enemy207Y + -10 * enemy207Size,
    70 * enemy207Size,
    70 * enemy207Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy207Size);
  stroke(0);
  triangle(
    enemy207X + 125 * enemy207Size,
    enemy207Y - 100 * enemy207Size,
    enemy207X + 125 * enemy207Size,
    enemy207Y,
    enemy207X + 90 * enemy207Size,
    enemy207Y - 100 * enemy207Size
  );
  triangle(
    enemy207X - 125 * enemy207Size,
    enemy207Y - 100 * enemy207Size,
    enemy207X - 125 * enemy207Size,
    enemy207Y,
    enemy207X - 90 * enemy207Size,
    enemy207Y - 100 * enemy207Size
  );
  noStroke();
  rect(
    enemy207X - 123 * enemy207Size,
    enemy207Y - 99 * enemy207Size,
    96 * enemy207Size,
    55 * enemy207Size
  );
  rect(
    enemy207X + 123 * enemy207Size,
    enemy207Y - 99 * enemy207Size,
    -96 * enemy207Size,
    55 * enemy207Size
  );
  noFill();
  stroke(3 * enemy207Size);
  arc(
    enemy207X + 95 * enemy207Size,
    enemy207Y - 10 * enemy207Size,
    50 * enemy207Size,
    70 * enemy207Size,
    225,
    311
  );
  arc(
    enemy207X - 95 * enemy207Size,
    enemy207Y - 10 * enemy207Size,
    50 * enemy207Size,
    70 * enemy207Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy207Size);
  rect(
    enemy207X - 90 * enemy207Size,
    enemy207Y - 125 * enemy207Size,
    40 * enemy207Size,
    60 * enemy207Size
  );
  arc(
    enemy207X - 70 * enemy207Size,
    enemy207Y - 67 * enemy207Size,
    40.6 * enemy207Size,
    20 * enemy207Size,
    0,
    180
  );
  rect(
    enemy207X + 90 * enemy207Size,
    enemy207Y - 125 * enemy207Size,
    -40 * enemy207Size,
    60 * enemy207Size
  );
  arc(
    enemy207X + 70 * enemy207Size,
    enemy207Y - 67 * enemy207Size,
    40.6 * enemy207Size,
    20 * enemy207Size,
    0,
    180
  );
  pop();
}
function enemy208() {
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy208Size);
  //iner
  circle(enemy208X, enemy208Y, 70 * enemy208Size);
  rect(
    enemy208X - 40 * enemy208Size,
    enemy208Y - 55 * enemy208Size,
    65 * enemy208Size,
    55 * enemy208Size
  );
  circle(enemy208X, enemy208Y, 30 * enemy208Size);
  //inner wings
  triangle(
    enemy208X + 25 * enemy208Size,
    enemy208Y - 100 * enemy208Size,
    enemy208X + 25 * enemy208Size,
    enemy208Y + 100 * enemy208Size,
    enemy208X + 100 * enemy208Size,
    enemy208Y - 100 * enemy208Size
  );
  triangle(
    enemy208X - 25 * enemy208Size,
    enemy208Y - 100 * enemy208Size,
    enemy208X - 25 * enemy208Size,
    enemy208Y + 100 * enemy208Size,
    enemy208X - 100 * enemy208Size,
    enemy208Y - 100 * enemy208Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy208Size);
  arc(
    enemy208X,
    enemy208Y + -10 * enemy208Size,
    70 * enemy208Size,
    70 * enemy208Size,
    60,
    120
  );
  strokeWeight(5 * enemy208Size);
  stroke(0, 40, 200);
  arc(
    enemy208X,
    enemy208Y + -10 * enemy208Size,
    70 * enemy208Size,
    70 * enemy208Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy208Size);
  stroke(0);
  triangle(
    enemy208X + 125 * enemy208Size,
    enemy208Y - 100 * enemy208Size,
    enemy208X + 125 * enemy208Size,
    enemy208Y,
    enemy208X + 90 * enemy208Size,
    enemy208Y - 100 * enemy208Size
  );
  triangle(
    enemy208X - 125 * enemy208Size,
    enemy208Y - 100 * enemy208Size,
    enemy208X - 125 * enemy208Size,
    enemy208Y,
    enemy208X - 90 * enemy208Size,
    enemy208Y - 100 * enemy208Size
  );
  noStroke();
  rect(
    enemy208X - 123 * enemy208Size,
    enemy208Y - 99 * enemy208Size,
    96 * enemy208Size,
    55 * enemy208Size
  );
  rect(
    enemy208X + 123 * enemy208Size,
    enemy208Y - 99 * enemy208Size,
    -96 * enemy208Size,
    55 * enemy208Size
  );
  noFill();
  stroke(3 * enemy208Size);
  arc(
    enemy208X + 95 * enemy208Size,
    enemy208Y - 10 * enemy208Size,
    50 * enemy208Size,
    70 * enemy208Size,
    225,
    311
  );
  arc(
    enemy208X - 95 * enemy208Size,
    enemy208Y - 10 * enemy208Size,
    50 * enemy208Size,
    70 * enemy208Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy208Size);
  rect(
    enemy208X - 90 * enemy208Size,
    enemy208Y - 125 * enemy208Size,
    40 * enemy208Size,
    60 * enemy208Size
  );
  arc(
    enemy208X - 70 * enemy208Size,
    enemy208Y - 67 * enemy208Size,
    40.6 * enemy208Size,
    20 * enemy208Size,
    0,
    180
  );
  rect(
    enemy208X + 90 * enemy208Size,
    enemy208Y - 125 * enemy208Size,
    -40 * enemy208Size,
    60 * enemy208Size
  );
  arc(
    enemy208X + 70 * enemy208Size,
    enemy208Y - 67 * enemy208Size,
    40.6 * enemy208Size,
    20 * enemy208Size,
    0,
    180
  );
  pop();
}
function enemy209() {
  push();
  translate(300, 300);
  fill(150);
  stroke(0);
  strokeWeight(3 * enemy209Size);
  //iner
  circle(enemy209X, enemy209Y, 70 * enemy209Size);
  rect(
    enemy209X - 40 * enemy209Size,
    enemy209Y - 55 * enemy209Size,
    65 * enemy209Size,
    55 * enemy209Size
  );
  circle(enemy209X, enemy209Y, 30 * enemy209Size);
  //inner wings
  triangle(
    enemy209X + 25 * enemy209Size,
    enemy209Y - 100 * enemy209Size,
    enemy209X + 25 * enemy209Size,
    enemy209Y + 100 * enemy209Size,
    enemy209X + 100 * enemy209Size,
    enemy209Y - 100 * enemy209Size
  );
  triangle(
    enemy209X - 25 * enemy209Size,
    enemy209Y - 100 * enemy209Size,
    enemy209X - 25 * enemy209Size,
    enemy209Y + 100 * enemy209Size,
    enemy209X - 100 * enemy209Size,
    enemy209Y - 100 * enemy209Size
  );
  //window
  noFill();
  strokeWeight(10 * enemy209Size);
  arc(
    enemy209X,
    enemy209Y + -10 * enemy209Size,
    70 * enemy209Size,
    70 * enemy209Size,
    60,
    120
  );
  strokeWeight(5 * enemy209Size);
  stroke(0, 40, 200);
  arc(
    enemy209X,
    enemy209Y + -10 * enemy209Size,
    70 * enemy209Size,
    70 * enemy209Size,
    60,
    120
  );
  //outer wings
  fill(150);
  strokeWeight(3 * enemy209Size);
  stroke(0);
  triangle(
    enemy209X + 125 * enemy209Size,
    enemy209Y - 100 * enemy209Size,
    enemy209X + 125 * enemy209Size,
    enemy209Y,
    enemy209X + 90 * enemy209Size,
    enemy209Y - 100 * enemy209Size
  );
  triangle(
    enemy209X - 125 * enemy209Size,
    enemy209Y - 100 * enemy209Size,
    enemy209X - 125 * enemy209Size,
    enemy209Y,
    enemy209X - 90 * enemy209Size,
    enemy209Y - 100 * enemy209Size
  );
  noStroke();
  rect(
    enemy209X - 123 * enemy209Size,
    enemy209Y - 99 * enemy209Size,
    96 * enemy209Size,
    55 * enemy209Size
  );
  rect(
    enemy209X + 123 * enemy209Size,
    enemy209Y - 99 * enemy209Size,
    -96 * enemy209Size,
    55 * enemy209Size
  );
  noFill();
  stroke(3 * enemy209Size);
  arc(
    enemy209X + 95 * enemy209Size,
    enemy209Y - 10 * enemy209Size,
    50 * enemy209Size,
    70 * enemy209Size,
    225,
    311
  );
  arc(
    enemy209X - 95 * enemy209Size,
    enemy209Y - 10 * enemy209Size,
    50 * enemy209Size,
    70 * enemy209Size,
    235,
    310
  );
  noStroke();
  fill(150);
  // engines
  fill(80);
  stroke(3 * enemy209Size);
  rect(
    enemy209X - 90 * enemy209Size,
    enemy209Y - 125 * enemy209Size,
    40 * enemy209Size,
    60 * enemy209Size
  );
  arc(
    enemy209X - 70 * enemy209Size,
    enemy209Y - 67 * enemy209Size,
    40.6 * enemy209Size,
    20 * enemy209Size,
    0,
    180
  );
  rect(
    enemy209X + 90 * enemy209Size,
    enemy209Y - 125 * enemy209Size,
    -40 * enemy209Size,
    60 * enemy209Size
  );
  arc(
    enemy209X + 70 * enemy209Size,
    enemy209Y - 67 * enemy209Size,
    40.6 * enemy209Size,
    20 * enemy209Size,
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
    let enemy1X = 0;
    let enemy1Y = 0;

    enemy1(enemy1X, enemy1Y - 250, 40);
    enemy201(100, 100);
    //enemy1(100, 0,10);
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
      console.log(shipY);
    } else if (keyIsDown(39) || keyIsDown(68)) {
      shipRotate += 10;
    } else if (keyIsDown(37) || keyIsDown(65)) {
      shipRotate -= 10;
    }

    //stopping at shY && eY1 = 0
    if (shipY <= 0) {
      shipVelocity = 0;
      shipY = 0;
      enemy1Y += enemyVelocity;
      if (enemy1Y >= 300) {
        enemy1Y = 300;
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

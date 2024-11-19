function setup() {
  createCanvas(600, 800);
}

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 2500; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function draw() {
  noStroke();
  background(5, 5, 15);

  for (let index in starX) {
    fill(255, 255, 255, starAlpha[index] * 255);
    ellipse(starX[index], starY[index], 1.25);
  }

  textSize(30);
  textFont("stencil");
  text("Final Stage", 210, 30);
}

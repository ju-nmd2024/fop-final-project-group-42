export default class HowToPlayScreen {
  constructor() {
    this.starX = [];
    this.starY = [];
    this.starAlpha = [];

    for (let i = 0; i < 2500; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      const alpha = Math.random();

      this.starX.push(x);
      this.starY.push(y);
      this.starAlpha.push(alpha);
    }
  }
  draw() {
    noStroke();
    background(5, 5, 15);
    /*  starX = [];
      starY = [];
      starAlpha = []; */

    for (let index in this.starX) {
      fill(255, 255, 255, this.starAlpha[index] * 255);
      ellipse(this.starX[index], this.starY[index], 1.25);
    }

    push();
    textSize(30);
    fill(255);
    textFont("stencil");
    text("How to play:", 205, 82.5);
    pop();

    push();
    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(20, 150, 560, 600, 50);
    pop();
  }
}
function setup() {
  createCanvas(600, 800);
}

function draw() {
  gameStage1.draw();
}
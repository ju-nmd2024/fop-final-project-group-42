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
    rect(20, 150, 560, 562.5, 50);
    pop();

    //back to menu and start the game and how to play button
    push();
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(50, 612.5, 200, 70, 25);
    textFont("stencil");
    textSize(25);
    fill(255);
    strokeWeight(1);
    noStroke();
    text("back to menu", 62, 655);
    pop();

    push();
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(350, 612.5, 200, 70, 25);
    textFont("stencil");
    textSize(25);
    fill(255);
    strokeWeight(1);
    noStroke();
    text("instructions", 363, 655);
    pop();

    push();
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(200, 512.5, 200, 70, 25);
    textFont("stencil");
    textSize(25);
    fill(255);
    strokeWeight(1);
    noStroke();
    text("start to play", 211, 555.5);
    pop();
  }
}
function setup() {
  createCanvas(600, 800);
}

function draw() {
  gameStage1.draw();
}

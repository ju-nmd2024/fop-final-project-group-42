export default class InstructionsScreen {
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

    //top text
    push();
    textSize(30);
    fill(255);
    textFont("stencil");
    text("Instructions:", 190, 82.5);
    pop();

    //text box
    push();
    stroke(255);
    strokeWeight(3);
    fill(0);
    rect(20, 150, 560, 637.5, 50);
    pop();

    //back to menu and start the game and how to play button
    push();
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(50, 687.5, 200, 70, 25);
    textFont("stencil");
    textSize(25);
    fill(255);
    strokeWeight(1);
    noStroke();
    text("back to menu", 62, 730);
    pop();

    push();
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(350, 687.5, 200, 70, 25);
    textFont("stencil");
    textSize(25);
    fill(255);
    strokeWeight(1);
    noStroke();
    text("start to play", 360, 730);
    pop();

    push();
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(200, 587.5, 200, 70, 25);
    textFont("stencil");
    textSize(28);
    fill(255);
    strokeWeight(1);
    noStroke();
    text("HOW TO PLAY", 213, 632.5);
    pop();
  }
}
function setup() {
  createCanvas(600, 800);
}
function draw() {
  gameStage1.draw();
}

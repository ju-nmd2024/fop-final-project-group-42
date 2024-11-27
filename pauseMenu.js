export default class PauseScreen {
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
    text("game Paused", 201.5, 120);
    pop();

    //text box
    push();
    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(125, 212.5, 350, 450, 50);
    pop();

    //resume button
    push();
    stroke(255);
    strokeWeight(3);
    fill(0);
    rect(200, 280, 200, 50, 18);
    textFont("stencil");
    textSize(30);
    fill(255);
    strokeWeight(0);
    text("Resume", 242.5, 315);
    pop();

    //restart button
    push();
    stroke(255);
    strokeWeight(3);
    fill(0);
    rect(200, 370, 200, 50, 18);
    textFont("stencil");
    textSize(30);
    fill(255);
    strokeWeight(0);
    text("restart", 235, 405);
    pop();

    //how to play button
    push();
    stroke(255);
    strokeWeight(3);
    fill(0);
    rect(200, 460, 200, 50, 18);
    textFont("stencil");
    textSize(27);
    fill(255);
    strokeWeight(0);
    text("how to play", 215, 494);
    pop();

    //main menu button
    push();
    stroke(255);
    strokeWeight(3);
    fill(0);
    rect(200, 550, 200, 50, 18);
    textFont("stencil");
    textSize(30);
    fill(255);
    strokeWeight(0);
    text("main menu", 220, 585);
    pop();
  }
}
function setup() {
  createCanvas(600, 800);
}

function draw() {
  gameStage1.draw();
}

export default class LoseScreen {
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
    text("Results:", 232.5, 82.5);
    pop();

    //text box
    push();
    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(20, 150, 560, 562.5, 50);
    pop();

    push();
    textSize(45);
    textFont("stencil");
    fill(200, 0, 0);
    stroke(255);
    strokeWeight(3);
    text("mission failed", 128.5, 230);

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
    textSize(40);
    fill(255);
    strokeWeight(1);
    noStroke();
    text("retry", 387.5, 660);
    pop();

    push();
    fill(255);
    noStroke();
    textFont("stencil");
    textSize(30);
    text("time:", 200, 340);
    text("enemies killed:", 35, 480);
    pop();

    pop();
  }
}
function setup() {
  createCanvas(600, 800);
}

function draw() {
  gameStage1.draw();
}

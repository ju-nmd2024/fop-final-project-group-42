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

    //WAD buttons
    push();
    fill(0);
    strokeWeight(2);
    stroke(255);
    textFont("stencil");
    textSize(30);
    //W button
    rect(125, 210, 50, 50, 10);
    noStroke();
    fill(255);
    text("W", 138, 244);
    textSize(18);
    textFont("arial");
    textAlign(CENTER);
    text("Move Up", 125, 160, 55, 100);

    //A button
    fill(0);
    strokeWeight(2);
    stroke(255);
    rect(65, 270, 50, 50, 10);
    noStroke();
    fill(255);
    textSize(30);
    textFont("stencil");
    textAlign(LEFT);
    text("A", 80, 303);
    textSize(18);
    textFont("arial");
    textAlign(CENTER);
    text("Rotate Left", 65, 330, 55, 100);

    //D button
    fill(0);
    strokeWeight(2);
    stroke(255);
    rect(185, 270, 50, 50, 10);
    noStroke();
    fill(255);
    textSize(30);
    textFont("stencil");
    textAlign(LEFT);
    text("D", 200, 303);
    textSize(18);
    textFont("arial");
    textAlign(CENTER);
    text("Rotate Right", 185, 330, 55, 100);
    pop();

    //pg UP, LEFT, RIGHT buttons
    push();
    fill(0);
    strokeWeight(2);
    stroke(255);
    textFont("stencil");
    textSize(30);
    //PG UP
    rect(425, 210, 50, 50, 10);
    noStroke();
    fill(255);
    textSize(18);
    textFont("arial");
    textAlign(CENTER);
    text("Move Up", 425, 160, 55, 100);
    beginShape();
    stroke(255);
    strokeWeight(4);
    line(450, 250, 450, 230);
    triangle(450, 220, 440, 230, 460, 230);
    endShape();

    //PG LEFT
    fill(0);
    strokeWeight(2);
    stroke(255);
    rect(365, 270, 50, 50, 10);
    noStroke();
    fill(255);
    textSize(18);
    textFont("arial");
    textAlign(CENTER);
    text("Rotate Left", 365, 330, 55, 100);
    beginShape();
    stroke(255);
    strokeWeight(4);
    line(405, 295, 385, 295);
    triangle(375, 295, 385, 285, 385, 305);
    endShape();

    //PG RIGHT
    fill(0);
    strokeWeight(2);
    stroke(255);
    rect(485, 270, 50, 50, 10);
    noStroke();
    fill(255);
    textSize(18);
    textFont("arial");
    textAlign(CENTER);
    text("Rotate Right", 485, 330, 55, 100);
    beginShape();
    stroke(255);
    strokeWeight(4);
    line(495, 295, 515, 295);
    triangle(525, 295, 515, 305, 515, 285);
    endShape();

    //SPACE BAR button
    fill(0);
    strokeWeight(2);
    stroke(255);
    rect(185, 405, 225, 50, 10);
    textFont("stencil");
    textSize(20);
    textAlign(LEFT);
    fill(255);
    strokeWeight(0);
    text("space bar", 245, 436);
    textFont("arial");
    textSize(18);
    text("Shoot", 275, 480);

    pop();
  }
}
// function setup() {
//   createCanvas(600, 800);
// }

// function draw() {
//   gameStage1.draw();
// }

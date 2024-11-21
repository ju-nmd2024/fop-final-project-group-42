class GameStage1 {
  constructor(x, y, starX, starY) {
    this.x = x;
    this.y = y;
    this.starX = [];
    this.starY = [];
    this.starAlpha = [];
  }
  draw() {
    noStroke();
    background(5, 5, 15);
    let starX = [];
    let starY = [];
    let starAlpha = [];

    for (let index in starX) {
      fill(255, 255, 255, starAlpha[index] * 255);
      ellipse(starX[index], starY[index], 1.25);
    }

    push();
    textSize(30);
    fill(255);
    textFont("stencil");
    text("Stage 1", 250, 30);
    pop();
  }
  setup() {
    createCanvas(600, 800);

    for (let i = 0; i < 2500; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      const alpha = Math.random();

      starX.push(x);
      starY.push(y);
      starAlpha.push(alpha);
    }
  }
}

const gameStage1 = new GameStage1(100, 100, 30, 30);

function draw() {
  gameStage1.setup();
  gameStage1.draw();
}

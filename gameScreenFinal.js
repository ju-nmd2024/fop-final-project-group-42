export default class GameScreenFinal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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
  }
}
// function setup() {
//   createCanvas(600, 800);
// }
// //do this in game.js and call it then you can use it

// function draw() {
//   gameStage1.draw();
// }

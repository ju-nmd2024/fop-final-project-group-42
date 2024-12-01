let projectiles = [];
let projectileX = -10;
let projectileY = 350;
let projectileSize = 0.3;

class Projectile {
  constructor(projectileX, projectileY) {
    this.projectileX = projectileX;
    this.projectileY = projectileY;
    this.projectileSize = 0.3;
    this.velocity = -50;
  }

  draw() {
    push();
    angleMode(DEGREES);
    strokeWeight(1.5);
    stroke(110, 220, 255);
    fill(181, 255, 255);
    translate(0);
    rotate(0);
    rect(
      this.projectileX - 4,
      this.projectileY - 10,
      20 * this.projectileSize,
      70 * this.projectileSize,
      20 * this.projectileSize
    );
    pop();
  }
  move() {
    this.projectileY += this.velocity;
  }
}

let projectile = new Projectile(projectileX, projectileY);

function createProjectiles(proyectileX, projectileY) {
  for (let i = 0; i < 10; i++) {
    projectile = new Projectile(proyectileX, projectileY);
    projectiles.push(projectile);
  }
}

function draw() {
  background(255, 255, 255);
  // for (let projectile of projectiles) {
  //   projectile.draw();
  // }
  projectile.move();
  projectile.draw();
}

function mousePressed() {
  createProjectiles(mouseX, mouseY); // draw();
}

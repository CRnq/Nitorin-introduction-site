let cookies = [];
let clicking = false;
let cookieImage;

function preload() {
  cookieImage = loadImage("./src/image/pixel-cookie.svg");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("cookie-rain");
  noSmooth();
  imageMode(CENTER);

  for (let i = 0; i < 200; i++) {
    cookies.push(new Cookie(random(width), random(height), 10));
  }
}

function draw() {
  clear();

  for (let cookie of cookies) {
    cookie.move();
    cookie.checkWalls();
  }

  for (let i = 0; i < cookies.length; i++) {
    for (let j = i + 1; j < cookies.length; j++) {
      cookies[i].collideWith(cookies[j]);
    }
  }

  for (let cookie of cookies) {
    cookie.show();
  }

}

function mousePressed() {
  clicking = true;
}

function mouseReleased() {
  clicking = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Cookie {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(1.2);
    this.r = r;
  }

  move() {
    this.pos.add(this.vel);
    this.vel.y += 0.1;
  }

  checkWalls() {
    if (this.pos.x - this.r < 0) {
      this.vel.x *= -0.9;
      this.pos.x = this.r;
    }

    if (this.pos.x + this.r > width) {
      this.vel.x *= -0.9;
      this.pos.x = width - this.r;
    }

    if (this.pos.y - this.r < 0) {
      this.vel.y *= -0.9;
      this.pos.y = this.r;
    }

    if (this.pos.y + this.r > height) {
      this.vel.y *= -0.9;
      this.pos.y = height - this.r;
    }

  if (
      this.pos.y - this.r < mouseY + 50 &&
      this.pos.y + this.r > mouseY - 50 &&
      this.pos.x - this.r < mouseX + 50 &&
      this.pos.x + this.r > mouseX - 50 &&
      clicking
    ) {
      this.vel.y += (this.pos.y - mouseY) / 10;
      this.vel.x += (this.pos.x - mouseX) / 10;
    }
  }

  collideWith(other) {
    let distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    let minDistance = this.r + other.r;

    if (distance < minDistance) {
      let overlap = minDistance - distance;
      let direction = p5.Vector.sub(this.pos, other.pos).normalize();

      this.pos.add(direction.copy().mult(overlap / 2));
      other.pos.sub(direction.copy().mult(overlap / 2));

      let temp = this.vel.copy();
      this.vel = other.vel.copy();
      this.vel.x *= 0.9;
      this.vel.y *= 0.9;
      other.vel = temp;
    }
  }

  show() {
    image(cookieImage, this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}

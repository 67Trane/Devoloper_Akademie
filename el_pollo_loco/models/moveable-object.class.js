class MoveableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  groundLevel = 340;
  energy = 100;
  lastHit = 0;

  applyGravity() {
    this.intervalHelper(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      //throwable object should always fall
      return true;
    }
    return this.y < this.groundLevel;
  }

  playAnimation(images, loop = false) {
    if (loop == false) {
      let i = this.currentImage % images.length; // let i = 7 % 6; 1 rest 1
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    } else {
      if (this.currentImage < images.length) {
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
      } else {
        // Stoppe die Animation, wenn alle Bilder einmal abgespielt wurden
        this.currentImage = 0; // Optional: Setze zurück, falls du wieder neu starten willst
      }
    }
  }

  intervalHelper(fn, time) {
    let id = setInterval(() => {
      fn();
    }, time);
    window.intervalIds.push(id);
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  isColliding(mo) {
    return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timepass = new Date().getTime() - this.lastHit; //  Difference in ms
    timepass = timepass / 1000; // Difference in s
    return timepass < 0.5;
  }
}

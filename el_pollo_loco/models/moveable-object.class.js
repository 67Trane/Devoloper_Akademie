class MoveableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  groundLevel = 342;
  energy = 1000;
  lastHit = 0;
  thorws = 100;
  coins = 0;

  applyGravity() {
    this.intervalHelper(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      } else if (this.isAboveGround) {
        this.speedY = 0
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
    } else if (loop == true) {
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

  playAnimationOnce(images, loop = false) {
    if (loop) {
      // Animation in einer Schleife abspielen
      let i = this.currentImage % images.length; // Zyklisches Abspielen
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    } else {
      // Animation nur einmal abspielen
      if (this.currentImage < images.length) {
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
      } else {
        // Animation ist durchgelaufen, keine weitere Änderung von this.img
        console.log("Animation beendet.");
      }
    }
  }
  

  intervalHelper(fn, time) {
    let id = setInterval(() => {
      fn();
    }, time);
    window.intervalIds.push(id);
    return id;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  isColliding(mo) {
    let tolerance = 40;
    return (
      this.x + this.width - tolerance > mo.x &&
      this.x + tolerance < mo.x + mo.width &&
      this.y + this.height - tolerance > mo.y &&
      this.y + tolerance < mo.y + mo.height
    );
  }

  isJumpingOn(mo) {
    let tolerance = 0;
    return (
      this.x + this.width + tolerance > mo.x &&
      this.x - tolerance < mo.x + mo.width &&
      this.y + this.height > mo.y &&
      this.y < mo.y + mo.height &&
      this.speedY < 0
    );
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

  skullIsDying() {
    let interval = setInterval(() => {
      clearInterval(this.moveInterval);
      this.playAnimation(this.IMAGES_DYING, true);
      if (this instanceof Skull) {
        this.width = 140;
        this.height = 130;
      } else if (this instanceof Endboss) {
       this.height = 450;
       this.width = 400;
      }

      if (this.currentImage >= this.IMAGES_DYING.length) {
        clearInterval(interval);
        this.isDead = true;
      }
    }, 600);
  }
}

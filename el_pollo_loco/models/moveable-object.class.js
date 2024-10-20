class MoveableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  groundLevel = 342;
  energy = 100;
  lastHit = 0;
  thorws = 100;
  coins = 0;
  intervalIds = [];

  playSoundIfNotMuted(sound) {
    if (!allSoundsMute) {
      if (sound && typeof sound.play === "function") {
        sound.play();
      }
    }
  }

  applyGravity() {
    this.intervalHelper(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      } else if (this.isAboveGround) {
        this.speedY = 0;
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
      }
    }
  }

  intervalHelper(fn, time) {
    let id = setInterval(() => {
      fn();
    }, time);
    this.intervalIds.push(id);
    return id;
  }

  pushIntervalIds() {
    this.intervalIds.forEach((id) => {
      window.gameIntervalIds.push(id);
    });
  }

  stopInterval() {
    this.intervalIds.forEach((id) => {
      clearInterval(id);
    });
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
    let xTolerance = -70;
    let yTolerance = 5;
    return (
      this.x + this.width + xTolerance > mo.x &&
      this.x - xTolerance < mo.x + mo.width &&
      this.y + this.height - yTolerance > mo.y &&
      this.y < mo.y &&
      this.speedY < 0
    );
  }

  hit() {
    this.energy -= 5;
    if (!allSoundsMute) {
      if (this.energy > 5) {
        let hit_sound = new Audio("./audio/hit.mp3");
        hit_sound.play();
      }
    }
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
    let speed;
    this.currentImage = 0;
    if (this instanceof Skull) {
      speed = 40;
    } else if (this instanceof Endboss) {
      speed = 80;
    }
    let interval = setInterval(() => {
      clearInterval(this.moveId);
      this.playAnimation(this.IMAGES_DYING, true);
      if (this instanceof Skull) {
        this.width = 150;
        this.height = 130;
        this.y = 342.5 - 13;
      } else if (this instanceof Endboss) {
        this.height = 500;
        this.width = 400;
        this.y = 10;
      }
      if (this.currentImage >= this.IMAGES_DYING.length) {
        clearInterval(interval);
        this.isDead = true;
      }
    }, speed);
  }
}

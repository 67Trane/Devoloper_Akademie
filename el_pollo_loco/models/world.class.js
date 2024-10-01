class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  bottleBar = new StatusBar("THROW", 50);
  coinBar = new StatusBar("COIN", 100);
  allCoins = [];
  throwableObject = [];
  collectibleBottles = [];
  groundlevel = 400;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.addCollectibleBottleToMap();
    this.addCollectibleCoinToMap();
  }

  setWorld() {
    this.character.world = this;

    this.level.enemies.forEach((enemy) => {
      enemy.world = this;
      if (enemy instanceof Skull) {
        enemy.initialize();
      }
      // andere Gegnertypen, die ähnlich behandelt werden sollen, hier hinzufügen
    });
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
    }, 50);

    setInterval(() => {
      this.checkThrowObjects();
    }, 150);

    setInterval(() => {
      this.checkItemCollection();
    }, 50);

    setInterval(() => {
      this.throwHitsSomething();
    }, 30);
  }

  checkThrowObjects() {
    if (this.keyboard.F) {
      if (this.character.thorws > 0) {
        this.character.thorws -= 10;
        this.bottleBar.setPercentage(this.character.thorws);
        let throwbottle = new ThrowableObject(this.character.x + 100, this.character.y);
        this.throwableObject.push(throwbottle);
      }
    }
  }

  throwHitsSomething() {
    this.throwableObject.forEach((throwable, index) => {
      if (throwable.y > this.groundlevel) {
        console.log(throwable.y);
        this.throwableObject.splice(index, 1);
      }
    });
  }

  checkItemCollection() {
    this.checkCoins();
    this.checkBottles();
  }

  checkBottles() {
    this.bottleBar.setPercentage(this.character.thorws);
    this.collectibleBottles.some((bottle, index) => {
      if (this.collectItem(bottle)) {
        this.collectibleBottles.splice(index, 1);
        if (this.character.thorws < 100) {
          this.character.thorws += 10;
        }
      }
    });
  }

  checkCoins() {
    this.coinBar.setPercentage(this.character.coins);
    this.allCoins.some((coin, index) => {
      if (this.collectItem(coin)) {
        this.allCoins.splice(index, 1);
        this.character.coins += 20;
        this.coinBar.setPercentage(this.character.coins);
      }
    });
  }

  checkCollisions() {
    this.level.enemies.some((enemy, index) => {
      if (this.character.isJumpingOn(enemy)) {
        this.character.jump();
        enemy.skullIsDying();
        clearInterval(enemy.moveId);
        clearInterval(enemy.idleId);
        setTimeout(() => {
          this.level.enemies.splice(index, 1);
        }, 1000);
        return true;
      }
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.character.knockBack();
        this.statusBar.setPercentage(this.character.energy);
        return true;
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Hintergrundobjekte mit Parallaxeneffekt zeichnen
    this.level.backgroundObjects.forEach((backgroundObject) => {
      this.ctx.save();
      let parallaxTranslation = this.camera_x * backgroundObject.parallaxFactor;
      this.ctx.translate(parallaxTranslation, 0);
      this.addToMap(backgroundObject);
      this.ctx.restore();
    });

    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.collectibleBottles);
    this.addObjectsToMap(this.allCoins);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.throwableObject);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(() => {
      self.draw();
    });
  }

  addCollectibleBottleToMap() {
    let bottleAmount = 10;
    for (let i = 0; i < bottleAmount; i++) {
      let random = Math.random() * 2300 + 200;
      let collectBottle = new Bottle(random, 400);
      this.collectibleBottles.push(collectBottle);
    }
  }

  addCollectibleCoinToMap() {
    let coinsAmount = 10;
    for (let i = 0; i < coinsAmount; i++) {
      let random = Math.random() * 2300 + 500;
      let coin = new Coin(random, 230);
      this.allCoins.push(coin);
    }
  }

  collectItem(mo) {
    const tolerance = 15;
    return (
      this.character.x + tolerance < mo.x + mo.width - tolerance &&
      this.character.x + this.character.width - tolerance > mo.x + tolerance &&
      this.character.y + tolerance < mo.y + mo.height - tolerance &&
      this.character.y + this.character.height - tolerance > mo.y + tolerance
    );
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}

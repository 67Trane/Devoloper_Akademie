backgroundMusic = new Audio("./audio/background_music.mp3")
class World {
  character = new Character();
  level
  canvas;
  ctx;
  isMobile = window.isMobile
  
  bottleSound= new Audio("./audio/bottle-shatter.mp3")
  keyboard;
  camera_x = 0;
  gameOver = new GameOver()
  statusBar = new StatusBar();
  bottleBar = new StatusBar("THROW", 50);
  coinBar = new StatusBar("COIN", 100);
  allCoins = [];
  throwableObject = [];
  collectibleBottles = [];
  groundlevel = 400;
  explosions = [];
 

  constructor(canvas, keyboard) {
    this.level = new Level(
      [new Skull(), new Skull(), new Skull(), new Skull(), new Skull(), new Skull(), new Skull(), new Skull(), new Endboss()],
      [new Cloud(), new Cloud(), new Cloud(), new Cloud()],
      [
        new BackgroundObject("img/background/PNG/3_game_background/layers/1.png", -719, 1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/1.png", 0, 0.1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/2.png", 0, 0.1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/3.png", 0, 0.1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/4.png", 0, 0.1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/5.png", 0, 0.1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/6.png", 0, 0.1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/7.png", 0, 0.1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", 0, 1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", -719, 1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", 720, 1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", 720 * 2, 1),
        new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", 720 * 3, 1),
      ]
    );
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.addCollectibleBottleToMap();
    this.addCollectibleCoinToMap();
    this.pushAllSounds()
    loaded = true
  }

  pushAllSounds() {
    allSounds.push(backgroundMusic)
    allSounds.push(this.bottleSound)
  }
    
  playBackgroundMusic() {
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
    backgroundMusic.loop = true
  }

  setWorld() {
    this.character.world = this;
    this.level.enemies.forEach((enemy) => {
      enemy.world = this;
      enemy.initialize();
    });
  }


  run() {
    setInterval(() => {
      if(!allSoundsMute) {
        this.playBackgroundMusic()
      }
    }, 500)

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

    setInterval(() => {
      this.checkExplosions();
    }, 30);
  }



  checkThrowObjects() {
    if (this.keyboard.F) {
      this.throwObject()
    }
  }

  throwObject() {
    if (this.character.thorws > 0) {
        this.character.thorws -= 10;
        this.bottleBar.setPercentage(this.character.thorws);
        let throwbottle = new ThrowableObject(this.character.x + 100, this.character.y);
        this.throwableObject.push(throwbottle);
      }
  }

  checkExplosions() {
    this.explosions.forEach((explosion, i) => {
      if(!allSoundsMute) {
        this.bottleSound.play()
      }
      if (explosion.done == true) {
        this.explosions.splice(i, 1);
      }
    });
  }

  throwHitsSomething() {
    this.throwableObject.forEach((throwable, index) => {
      if (throwable.y > this.groundlevel) {
        this.objectExplodes(throwable);
        this.throwableObject.splice(index, 1);
      }
    });
  }

  objectExplodes(throwable) {
    let explosion = new Explosion(throwable.x - 130, throwable.y - 150);
    this.explosions.push(explosion);
    this.addObjectsToMap(this.explosions);
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
    let collectCoinSound = new Audio("./audio/collect-coin.mp3")
    this.coinBar.setPercentage(this.character.coins);
    this.allCoins.some((coin, index) => {
      if (this.collectItem(coin)) {
        this.allCoins.splice(index, 1);
        this.character.coins += 20;
        if(!allSoundsMute) {
          collectCoinSound.play()
        }
        this.coinBar.setPercentage(this.character.coins);
      }
    });
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy, index) => {
      this.throwHit(enemy);
      if (enemy.isDead == true) {
        this.level.enemies.splice(index, 1);
      }
      if (this.character.isJumpingOn(enemy)) {
        this.character.jump();
        enemy.skullIsDying();
        clearInterval(enemy.moveId);
        clearInterval(enemy.idleId);

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

  throwHit(enemy) {
    if (this.throwableObject.length > 0) {
      this.throwableObject.forEach((bottle, index) => {
        if (bottle.collisionThrowable(enemy)) {
          this.throwableObject.splice(index, 1);
          this.objectExplodes(bottle);
          enemy.hp -= 10;
          if (enemy instanceof Endboss) {
            enemy.healthbar.setPercentage(enemy.hp)
          }
          if (enemy.hp <= 0) {
            enemy.skullIsDying();
            clearInterval(enemy.moveId);
            clearInterval(enemy.idleId);
          }
        }
      });
    }
  }

  parallaxEffect() {
    // Hintergrundobjekte mit Parallaxeneffekt zeichnen
    this.level.backgroundObjects.forEach((backgroundObject) => {
      this.ctx.save();
      let parallaxTranslation = this.camera_x * backgroundObject.parallaxFactor;
      this.ctx.translate(parallaxTranslation, 0);
      this.addToMap(backgroundObject);
      this.ctx.restore();
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.parallaxEffect()
    this.ctx.translate(this.camera_x, 0);
    this.placeInWorld()
    this.ctx.translate(-this.camera_x, 0);
    this.runWithCamera()

    let self = this;
    requestAnimationFrame(() => {
      self.draw();
    });
  }

  placeInWorld() {
    this.addToMap(this.character);
    this.addObjectsToMap(this.collectibleBottles);
    this.addObjectsToMap(this.allCoins);
    this.addObjectsToMap(this.explosions);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObject);
  }

  runWithCamera() {
    this.characterDeadGameOver();
    this.addToMap(this.statusBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);
  }

  characterDeadGameOver() {
    if(this.character.energy <= 0) {
      this.addToMap(this.gameOver)
      this.gameOver.init()
    }
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
    let tolerance = 15;
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
    //mo.drawFrame(this.ctx); //als kommentar deklarieren um rahmen wegzumachen
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

class Endboss extends MoveableObject {
  IMAGES_DYING = [
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_000.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_001.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_002.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_003.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_004.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_005.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_006.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_007.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_008.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_009.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_010.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_011.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_012.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_013.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_014.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_015.png",
  ];

  IMAGES_WALKING = [
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_000.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_001.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_002.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_003.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_004.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_005.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_006.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_007.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_008.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_009.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_010.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_011.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_012.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_013.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_014.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_015.png",
  ];

  IMAGES_HP = [
    "img/statusbar/0.png",
    "img/statusbar/20.png",
    "img/statusbar/40.png",
    "img/statusbar/60.png",
    "img/statusbar/80.png",
    "img/statusbar/100.png",
  ];

  height = 400;
  width = 200;
  y = 50;
  x = 2400;
  isDead = false;
  moveId;
  speed = 2
  hp = 100;


  constructor() {
    super();
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DYING);
    this.loadImages(this.IMAGES_HP);
    this.healthbar = new StatusBar();
    this.updateHealthbar()
  }

  initialize() {
    this.animate();
    this.pushIntervalIds();
  }

  updateHealthbar() {
    setInterval(() => {
      this.healthbar.x = this.x;
      this.healthbar.y = this.y;
    }, 60)

  }

  draw(ctx) {
    super.draw(ctx)
    this.healthbar.draw(ctx)
  }

  animate() {
    let moveId = this.intervalHelper(() => {
      this.moveId = moveId;
      this.playAnimation(this.IMAGES_WALKING);
      this.moveLeft();
    }, 60);
  }
}
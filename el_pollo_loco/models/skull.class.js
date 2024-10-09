class Skull extends MoveableObject {
  y = 342.5;
  height = 100;
  width = 100;
  IMAGES_WALKING = [
    "img/skull/PNG/Wariors/Walk/Warior_walk_001.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_001.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_002.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_003.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_004.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_005.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_006.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_007.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_008.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_009.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_010.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_011.png",
  ];

  IMAGES_DYING = [
    "img/skull/PNG/Wariors/Die/Warior_Die_000.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_001.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_002.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_003.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_004.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_005.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_006.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_007.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_008.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_009.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_010.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_011.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_012.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_013.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_014.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_015.png",
  ];

  moveId;
  idleId;
  isDead = false;
  hp = 10;

  constructor() {
    super();
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DYING);
    this.x = 500 + Math.random() * 1500;
    this.speed = 0.15 + Math.random() * 0.5;
  }

  initialize() {
    this.animate();
    this.pushIntervalIds();
  }

  animate() {
    let moveSkullId = this.intervalHelper(() => {
      this.moveId = moveSkullId;
      this.moveLeft();
    }, 1000 / 60);

    let idle = this.intervalHelper(() => {
      this.idleId = idle;
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }
}
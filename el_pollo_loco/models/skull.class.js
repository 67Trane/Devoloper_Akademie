class Skull extends MoveableObject {
  y = 360;
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

  constructor() {
    super().loadImage("img/skull/PNG/Wariors/Walk/Warior_walk_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500; //Zahl zwischen 200 und 700
    this.speed = 0.15 + Math.random() * 0.5;
  }

  initialize() {
    this.animate();
  }

  animate() {
    this.intervalHelper(() => {
      this.moveLeft();
    }, 1000 / 60);

    this.intervalHelper(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }
}

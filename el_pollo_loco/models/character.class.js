class Character extends MoveableObject {
  height = 120;
  width = 120;
  y = 350;
  speed = 10;
  IMAGES_WALKING = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_011.png",
  ];
  world;
  walking_sound= new Audio('./audio/steps.mp3')

  constructor() {
    super().loadImage("img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_000.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.ortherDirection = false;
        this.walking_sound.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.ortherDirection = true;
        this.x -= this.speed;
        this.walking_sound.play();
      }
      this.world.camera_x = -this.x + 100;

    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //walk animation
        this.playAnimation(this.IMAGES_WALKING)
      }
    }, 50);
  }

  jump() {}
}

class Character extends MoveableObject {
  height = 120;
  width = 120;
  y = 80;
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

  IMAGES_JUMPING = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_005.png",
  ];

  IMAGES_ISDEAD = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_011.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_012.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_013.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_014.png",
  ];

  IMAGES_HURT = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_011.png",
  ];

  IMAGES_IDLE = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_011.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_012.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_013.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_014.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_015.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_016.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_017.png",
  ];

  world;
  walking_sound = new Audio("./audio/steps.mp3");

  constructor() {
    super().loadImage("img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_ISDEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_IDLE);
    }, 60);
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.ortherDirection = false;
        this.moveRight();
        this.walking_sound.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.ortherDirection = true;
        this.moveLeft();
        this.walking_sound.play();
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_ISDEAD);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          //walk animation
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 60);
  }

  jump() {
    this.speedY = 30;
  }
}
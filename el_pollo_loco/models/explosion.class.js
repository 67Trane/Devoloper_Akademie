class Explosion extends MoveableObject {
  x;
  y;
  width = 300;
  height = 300;
  IMAGES_EXPLOSIONS = [
    "img/explosioneffect/PNG/9/1.png",
    "img/explosioneffect/PNG/9/2.png",
    "img/explosioneffect/PNG/9/3.png",
    "img/explosioneffect/PNG/9/4.png",
    "img/explosioneffect/PNG/9/5.png",
    "img/explosioneffect/PNG/9/6.png",
    "img/explosioneffect/PNG/9/7.png",
    "img/explosioneffect/PNG/9/8.png",
    "img/explosioneffect/PNG/9/9.png",
  ];
  done = false;


  constructor(x, y) {
    super();
    this.loadImages(this.IMAGES_EXPLOSIONS);
    this.x = x;
    this.y = y;
    this.playAnimationOnce(this.IMAGES_EXPLOSIONS, true);
    this.animateOnce()
  }


  animateOnce() {
    let interval = setInterval(() => {
      this.playAnimationOnce(this.IMAGES_EXPLOSIONS, true);
      if (this.currentImage >= this.IMAGES_EXPLOSIONS.length) {
        clearInterval(interval);
        this.done = true
      }
    }, 60);
  }
  
}

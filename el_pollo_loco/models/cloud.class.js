class Cloud extends MoveableObject {
  y = -100;
  height = 250;
  width = 500;
  intervalIds = []
  
  constructor() {
    super().loadImage("img/background/PNG/3_game_background/layers/5.png");
    this.x = Math.random() * 2000;
    this.animate();
    this.pushIntervalIds();
  }

  animate() {
    this.intervalHelper(() => {
      this.moveLeft();
    }, 60)
  }
}

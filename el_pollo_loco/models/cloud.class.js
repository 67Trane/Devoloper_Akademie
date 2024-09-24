class Cloud extends MoveableObject {
  y = 20;
  height = 250;
  width = 500;

  constructor() {
    super().loadImage("img/background/PNG/3_game_background/layers/5.png");
    this.x = Math.random() * 500;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
 
}

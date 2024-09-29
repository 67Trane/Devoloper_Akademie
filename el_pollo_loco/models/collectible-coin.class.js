class Coin extends Collectible {
  x;
  y;
  width = 20;
  height = 30;
  IMAGES_COIN = [
    "img/coins/Coin_01.png",
    "img/coins/Coin_02.png",
    "img/coins/Coin_03.png",
    "img/coins/Coin_04.png",
    "img/coins/Coin_05.png",
    "img/coins/Coin_06.png",
  ];
  currentImage = 0;

  constructor(x, y) {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.x = x;
    this.y = y;
    this.currentImage = 0;
    this.img = this.imageCache[this.IMAGES_COIN[0]];
    this.animate();
  }

  animate() {
    setInterval(() => {
        this.playAnimation(this.IMAGES_COIN);
    }, 60)
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 7 % 6; 1 rest 1
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}

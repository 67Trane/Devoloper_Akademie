class MoveableObject {
  x = 100;
  y = 330;
  img;
  height = 150;
  width = 150;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  ortherDirection = false;

  //loadImage('img/test.png);
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   *
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 7 % 6; 1 rest 1
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 150);
  }
}

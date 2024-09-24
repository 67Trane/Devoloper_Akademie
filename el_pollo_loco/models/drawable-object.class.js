class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 100;
  y = 330;
  height = 150;
  width = 150;

  //loadImage('img/test.png);
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
  
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Skull) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}

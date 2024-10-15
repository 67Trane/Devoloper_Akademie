class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 100;
  y = 330;
  height = 150;
  width = 150;

  loadImage(path) {
    //loadImage('img/test.png);
    this.img = new Image();
    this.img.src = path;
  }
  draw(ctx) { 
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (error) {
      console.warn(error);
      console.log("This image makes Trouble: ", this.img.src);
    }
  }

  /**
   *
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      this.img = new Image();
      this.img.src = path;
      this.imageCache[path] = this.img;
    });
  }

  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Button || this instanceof Skull || this instanceof Bottle || this instanceof Coin || this instanceof Endboss || this instanceof MobileGui) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}

class Button extends DrawableObject {
  img;
  background = "./img/button.png";

  constructor(x, y, width, height, text) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.loadImage(this.background);
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
  }

  isClicked(mouseX, mouseY) {
    return mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
  }
}

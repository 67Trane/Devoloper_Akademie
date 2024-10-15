class Button extends Hud {
  img;
  background = "./img/button.png";

  constructor(x, y, width, height, text, showtext = false) {
    super();
    this.showtext = showtext
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.loadImage(this.background);
    this.canvas = document.getElementById("canvas");
    text == "fl" && this.fullscreen()
    text == "pause" && this.pauseGame()
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    if (this.showtext) {
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }
  }

  isClicked(mouseX, mouseY) {
    return mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
  }

  fullscreen() {
    this.clickListener(() => this.openFullscreen(), 30, 30)
  }

  clickListener(func, offsetWidth = 0, offsetHeight = 0, conditionCallback = () => true) {
    this.canvas.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      let rect = this.canvas.getBoundingClientRect();
      let x = (event.clientX - rect.left) / rect.width * this.canvas.width;
      let y = (event.clientY - rect.top) / rect.height * this.canvas.height;
      if (
        x >= this.x + offsetWidth &&
        x <= this.x + this.width - offsetWidth &&
        y >= this.y + offsetHeight &&
        y <= this.y + this.height - offsetHeight
      ) {
        const currentCondition = conditionCallback();
        if (currentCondition) {
          func()
        }
      }
    });
  }

  pauseGame(func) {
    this.loadImage("img/mobile-imgs/pause.png")
    if (typeof func === 'function') {
      this.clickListener(() => func(), 0, 0, () => window.gameIsPaused)
    }
  }
}

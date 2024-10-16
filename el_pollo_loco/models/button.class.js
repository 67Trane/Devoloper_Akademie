class Button extends Hud {
  img;
  defaultButton = "./img/button.png";
  pauseIcon = "img/mobile-imgs/pause.png";
  fullscreenIcon = "img/mobile-imgs/fullscreen.png"
  restartIcon = "img/mobile-imgs/restart.png"

  constructor(x, y, width, height, text, showtext = false) {
    super();
    this.showtext = showtext
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.loadImage(this.defaultButton);
    this.canvas = document.getElementById("canvas");
    text == "fl" && this.fullscreen()
    text == "pause" && this.pauseGame()
    text == "restart" && this.clickOnRestart()
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

  clickOnRestart() {
    this.loadImage(this.restartIcon)
    this.clickListener(() => restartGame(), 0, 0)
  }

  isClicked(mouseX, mouseY) {
    return mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
  }

  fullscreen() {
    this.loadImage(this.fullscreenIcon)
    this.clickListener(() => this.openFullscreen(), 0, 0)
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
    this.loadImage(this.pauseIcon)
    if (typeof func === 'function') {
      this.clickListener(() => func(), 0, 0, () => window.gameIsPaused)
    }
  }
}

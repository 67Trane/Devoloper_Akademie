class StartScreen extends DrawableObject {
  width = 720;
  height = 480;
  x = 0;
  y = 0;
  start = false;
  titelscreen = "./img/titelscreen.png";
  img;



  constructor() {
    super();
    this.loadImage(this.titelscreen);
    this.img.onload = () => {
      this.draw();
    };
    this.button = new Button(300, 200, 120, 100, "Start", true);
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setupEventListeners();
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.button.draw(this.ctx);
  }

  setupEventListeners() {
    this.clickListener(() => this.startGame(), 30, 30)
  }

  clickListener(func, offsetWidth = 0, offsetHeight = 0) {
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
        func()
      }
    });
  }

  startGame() {
    this.start = true
  }
}

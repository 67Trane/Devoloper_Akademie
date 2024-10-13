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
    this.button = new Button(300, 200, 120, 100, "Start");
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setupEventListeners();
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.button.draw(this.ctx);
  }

  setupEventListeners() {
    this.canvas.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      let rect = this.canvas.getBoundingClientRect();
      let mouseX = event.clientX - rect.left;
      let mouseY = event.clientY - rect.top;
      if (this.button.isClicked(mouseX, mouseY)) {
        this.startGame();
      }
    });
  }

  startGame() {
    this.start = true
  }
}

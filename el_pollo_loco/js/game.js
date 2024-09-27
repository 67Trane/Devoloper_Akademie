let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  let startScreen = new StartScreen();

  let checkStart = setInterval(() => {
    if (startScreen.start) {
      clearInterval(checkStart); 
      startGame();
    }
  }, 500);
}

function startGame() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log("my chracter is", world.character);
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 80) {
    console.log(intervalIds);
    stopAllIntervals();
    console.log(intervalIds);
  }

  if (event.keyCode == 70) {
    keyboard.F = true;
  }
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
  }

  if (event.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (event.keyCode == 38) {
    keyboard.UP = true;
  }

  if (event.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }

  if (event.keyCode == 70) {
    keyboard.F = false;
  }

  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (event.keyCode == 38) {
    keyboard.UP = false;
  }

  if (event.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
});

function stopAllIntervals() {
  window.intervalIds.forEach(clearInterval);
  window.intervalIds = [];
}

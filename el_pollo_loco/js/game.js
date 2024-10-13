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
    console.log("STOP")
    stopAllIntervals();
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
  window.gameIntervalIds.forEach(clearInterval);
  window.gameIntervalIds = [];
}

function isMobileRotate() {
  let rotate = document.getElementById("rotate")
  if (window.innerWidth < window.innerHeight) {
    rotate.style.display = "flex"
  } else {
    rotate.style.display = "none"
  }
}

window.addEventListener("resize", isMobileRotate)
window.addEventListener("load", isMobileRotate)

function isMobileDevice() {
  return /Mobi|Android|iPhonei|iPad|iPod/i.test(navigator.userAgent)
}

function changeHud() {
  if (isMobileDevice()) {
    window.isMobile = true;
  } else {
    window.isMobile = false;
  }
}

changeHud()
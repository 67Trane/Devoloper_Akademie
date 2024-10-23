let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  let checkStart = setInterval(() => {
    if (gameStart) {
      loadingScreen();
      clearInterval(checkStart);
      startGame();
    }
  }, 500);
}

function startButton() {
  document.getElementById("start-screen").classList.add("d-none");
  gameStart = true;
}

function loadingScreen() {
  loadingScreenDiv = document.getElementById("loading-screen");
  loadingScreenImg = document.getElementById("loading-screen-img");
  loadingScreenDiv.classList.remove("d-none");
  count = 0;
  amountOfPics = 26;

  intervalId = setInterval(() => {
    i = (count % amountOfPics) + 1;
    formatedNumber = smallerThenTen(i);
    loadingScreenImg.src = `./img/text-animation/PNG/LoadGame/LoadGame_${formatedNumber}.png`;
    count++;
    if (loaded) {
      loadingScreenDiv.classList.add("d-none");
      clearInterval(intervalId);
    }
  }, 60);
}

function smallerThenTen(number) {
  return number < 10 ? `0${number}` : number;
}

function startGame() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 80) {
    stopAllIntervals();
  }

  if (event.keyCode == 82) {
    restartGame();
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
  window.gameIsPaused = true;
  window.gameIntervalIds.forEach(clearInterval);
  window.gameIntervalIds = [];
}

function isMobileRotate() {
  let rotate = document.getElementById("rotate");
  if (window.innerWidth < window.innerHeight) {
    rotate.style.display = "flex";
  } else {
    rotate.style.display = "none";
  }
}

window.addEventListener("resize", isMobileRotate);
window.addEventListener("load", isMobileRotate);

function isMobileDevice() {
  return /Mobi|Android|iPhonei|iPad|iPod/i.test(navigator.userAgent);
}

function changeHud() {
  if (isMobileDevice()) {
    window.isMobile = true;
  } else {
    window.isMobile = false;
  }
}

changeHud();

function closeInfo() {
  document.getElementById("info-field-wrapper").classList.add("d-none");
}

function openInfo() {
  document.getElementById("info-field-wrapper").classList.remove("d-none");
}



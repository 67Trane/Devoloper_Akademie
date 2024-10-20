keyboard = new Keyboard();

document.getElementById("left-btn").addEventListener("touchstart", function (event) {
  event.preventDefault();
  keyboard.LEFT = true;
});

document.getElementById("right-btn").addEventListener("touchstart", function (event) {
  event.preventDefault();
  keyboard.RIGHT = true;
});

document.getElementById("up-btn").addEventListener("touchstart", function (event) {
  event.preventDefault();
  keyboard.SPACE = true;
});

document.getElementById("molotov-btn").addEventListener("touchstart", function (event) {
  event.preventDefault();
  keyboard.F = true;
});

document.addEventListener("touchend", function () {
  for (let key in keyboard) {
    keyboard[key] = false;
  }
});


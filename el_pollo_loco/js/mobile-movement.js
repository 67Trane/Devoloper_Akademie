keyboard = new Keyboard();

document.getElementById("left-btn").addEventListener("touchstart", function () {
  keyboard.LEFT = true;
});

document.getElementById("right-btn").addEventListener("touchstart", function () {
  keyboard.RIGHT = true;
});

document.getElementById("up-btn").addEventListener("touchstart", function () {
  keyboard.SPACE = true;
});

document.getElementById("molotov-btn").addEventListener("touchstart", function () {
  keyboard.F = true;
});

document.addEventListener("touchend", function () {
  for (let key in keyboard) {
    keyboard[key] = false;
  }
});

document.addEventListener((event)=> {
  event.stopPropagation()
})

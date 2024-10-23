keyboard = new Keyboard();

// Touchstart-Events für die Buttons
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

// Touchend-Events für die Buttons
document.getElementById("left-btn").addEventListener("touchend", function (event) {
  event.preventDefault();
  keyboard.LEFT = false;
});

document.getElementById("right-btn").addEventListener("touchend", function (event) {
  event.preventDefault();
  keyboard.RIGHT = false;
});

document.getElementById("up-btn").addEventListener("touchend", function (event) {
  event.preventDefault();
  keyboard.SPACE = false;
});

document.getElementById("molotov-btn").addEventListener("touchend", function (event) {
  event.preventDefault();
  keyboard.F = false;
});

function isOnMobile() {
  if (window.innerWidth > window.innerHeight) {
    document.getElementById("mobile-movement").classList.add("d-none");
  }
}

isOnMobile();

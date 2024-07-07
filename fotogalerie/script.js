let images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
];

function addpic() {
  let add = document.getElementById("addpic").files[0].name;
  let box = document.getElementById("imgbox");
  images.push(add);

  let id = images.length - 1;

  box.innerHTML += `<img src="img/${images[id]}" alt="" id="img${id}" onclick="full(${id})">`;
}

function load() {
  for (let i = 0; i < images.length; i++) {
    let render = document.getElementById("imgbox");

    render.innerHTML += `<img src="img/${images[i]}" alt="" id="img${i}" onclick="full(${i})">`;
  }
}

function full(i) {
  let fullscreen = document.getElementById("fullscreen");
  let content = document.getElementById("imgbox");

  content.classList.add("d-none");

  fullscreen.classList.remove("d-none");

  fullscreen.innerHTML = renderFullscreen(i);
}

function renderFullscreen(i) {
  return `
    <div class="leftside">
      <div class="arrowleft" id="arrowleft" onclick="left(${i})"></div>
    </div>
    <img src="./img/${images[i]}" alt="" class="fullScreenimg">
    <div class="rightside">
      <div class="close" onclick="closeFull()"></div>
      <div class="arrowright" onclick="right(${i})"></div>
    </div>
    `;
}

function left(i) {
  let fullscreen = document.getElementById("fullscreen");

  if (i > 0) {
    fullscreen.innerHTML = "";
    x = i - 1;
    fullscreen.innerHTML = renderFullscreen(x);
  }
}

function right(i) {
  let fullscreen = document.getElementById("fullscreen");

  if (i < images.length - 1) {
    fullscreen.innerHTML = "";
    x = i + 1;
    fullscreen.innerHTML = renderFullscreen(x);
  }
}

function closeFull() {
  let fullscreen = document.getElementById("fullscreen");
  let content = document.getElementById("imgbox");

  content.classList.remove("d-none");

  fullscreen.classList.add("d-none");
}

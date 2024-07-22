let selectedmaschineid = 0;

function loaded() {
  load();
}

function selectmaschine(id) {
  renderMaschineHeader(id);
  allselectedOff();
  maschines[id].selected = true;
  for (let i = 0; i < maschines.length; i++) {
    let selected = maschines[i].selected;
    if (selected == true) {
      selectedmaschineid = id;
    }
  }
  clearTextField();
  renderTextfield(id);
  colorMaschine(id);
}

function textfield() {
  let text = document.getElementById("textarea").value;
  maschines[selectedmaschineid].text = text;
  save();
}

function allselectedOff() {
  for (let i = 0; i < maschines.length; i++) {
    maschines[i].selected = false;
  }
}

function clearTextField() {
  let textfield = document.getElementById("textarea");
  textfield.value = "";
}

function renderMaschineHeader(id) {
  let header = document.getElementById("maschineheader");
  header.innerHTML = maschines[id].name;
}

function save() {
  localStorage.setItem("maschines", JSON.stringify(maschines));
}

function load() {
  let maschinesinfos = localStorage.getItem("maschines");
  let parsedinfos = JSON.parse(maschinesinfos);
  maschines = parsedinfos;
}

function renderTextfield(id) {
  let text = maschines[id].text;
  let textfield = document.getElementById("textarea");
  textfield.value = text;
}

/* Checkbox Bereich */

function checkbox(colour) {
  let green = document.getElementById("green");
  let yellow = document.getElementById("yellow");
  let red = document.getElementById("red");

  green.checked = false;
  yellow.checked = false;
  red.checked = false;

  colour.checked = true;
}

function colorMaschine(id) {
  let maschine = document.getElementById(`maschine${id + 1}`);
  maschine.style.backgroundColor = "rgb(201, 194, 194)";
}

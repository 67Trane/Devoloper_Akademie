let selectedmaschineid = 0;
maschinecount = 34;

function loaded() {
  load();
  renderColoursMaschines();
}

function selectmaschine(id) {
  renderMaschineHeader(id);
  allselectedOff();
  selectedmaschine(id);
  clearTextField();
  renderTextfield(id);
  colorMaschine(id);
  save();
  clearcheckbox();
  buttonClicked(id)
}

function selectedmaschine(id) {
  maschines[id].selected = true;
  for (let i = 0; i < maschines.length; i++) {
    let selected = maschines[i].selected;
    if (selected == true) {
      selectedmaschineid = id;
    }
  }
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

  if (!parsedinfos) {
    parsedinfos = maschines;
  }
  maschines = parsedinfos;
}

function renderTextfield(id) {
  let text = maschines[id].text;
  let textfield = document.getElementById("textarea");
  textfield.value = text;
}

/* Checkbox/Farben Bereich */

function checkbox(colour) {
  maschines[selectedmaschineid].color = colour;
  clearcheckbox();
  let checkedcolor = document.getElementById(colour);
  checkedcolor.checked = true;

  colorMaschine(selectedmaschineid);
  save();
}

function colorMaschine(id) {
  let maschine = document.getElementById(`maschine${id + 1}`);
  maschine.style.backgroundColor = maschines[id].color;
}

function renderColoursMaschines() {
  for (let i = 0; i < maschines.length; i++) {
    colorMaschine(i);
  }
}

function clearcheckbox() {
  let green = document.getElementById("green");
  let yellow = document.getElementById("yellow");
  let red = document.getElementById("red");
  let blue = document.getElementById("blue");

  green.checked = false;
  yellow.checked = false;
  red.checked = false;
  blue.checked = false;
}


function buttonClicked(id) {
  let maschine = document.getElementById(`maschine${id+1}`)
  
  for (let i = 0; i < maschinecount; i++) {
    let allmaschines = document.getElementById(`maschine${i+1}`)
    allmaschines.classList.remove("clicked")
  }
  maschine.classList.toggle("clicked")
}
let selectedmaschineid = 0;
let maschinecount = 34;
let BASE_URL = "https://dgs-projekt-default-rtdb.europe-west1.firebasedatabase.app/";
let allMachines = {}
let allOrders = {}


function loaded() {
  download().then(() => {
    load();
    renderColoursMaschines();
    getOrderIds()
  })
}

function getOrderIds() {
  let keys = Object.keys(allOrders)
  for (let i = 0; i < keys.length; i++) {
    renderOrder(allOrders[keys[i]].ordernumber)
  }
}


async function download() {
  await fetch(BASE_URL + "/.json")
    .then((res) => res.json())
    .then((infos) => splitInfos(infos))
}

function splitInfos(infos) {
  allOrders = infos.orderinfos
  allMachines = infos
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
  let maschine = document.getElementById(`maschine${id + 1}`)

  for (let i = 0; i < maschinecount; i++) {
    let allmaschines = document.getElementById(`maschine${i + 1}`)
    allmaschines.classList.remove("clicked")
  }
  maschine.classList.toggle("clicked")
}

function searchOrder() {
  let input = document.getElementById("search-machine-input").value
  let list = document.getElementById("orders").getElementsByTagName("ul")
  for (let i = 0; i < list.length; i++) {
    if (input == list[i].innerHTML) {
      alert("auftrag gefunden")
      list[i].classList.add("found-background-color")
      return
    } else {
      alert("Auftrag nicht vorhanden, neuen erstellen?")
      getOrderNumber(input)
      showCard()
      return
    }
  }
}

function showCard() {
  document.getElementById("machine-card-container").classList.remove("d-none")
}

function getOrderNumber(input) {
  let cardOrderNumber = document.getElementById("order-number-input")
  cardOrderNumber.value = input
}

let orderInfos = {}

function uploadInfos() {
  fetch(BASE_URL + "/orderinfos/" + ".json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderInfos),
  });
}

function renderOrder(orderNumber) {
  let orderList = document.getElementById("orders")
  orderList.innerHTML += `<ul class="order" id="order">${orderNumber} <button onclick="calcAmount('${orderNumber}')">Menge</button></ul>`
}

function saveData() {
  getInfosline1()
  uploadInfos()
}

function getInfosline1() {
  let inputAmount = document.getElementById("amount")
  let inputOrderNumber = document.getElementById("order-number-input")
  orderInfos["amount"] = inputAmount.value
  orderInfos["ordernumber"] = inputOrderNumber.value
  console.log(orderInfos)
}

function calcAmount(order) {
  let target = document.getElementById("target-amount")

  calculateAmount()
  let keys = Object.keys(allOrders)
  for (let i = 0; i < keys.length; i++) {
    if (order == allOrders[keys[i]].ordernumber) {
      console.log(allOrders[keys[i]].amount)
      openCalculator()
      target.innerHTML = allOrders[keys[i]].amount
    } else {
      console.log("noo")
    }
  }
}

function openCalculator() {
  let card = document.getElementById("amount-calculator")
  card.classList.remove("d-none")
}

function calculateAmount() {
  let target = document.getElementById("target-amount")
  let input =document.getElementById("input-weight").value

  let result = target.innerHTML - input
  console.log(result)
  target.innerHTML = result 
  renderWeights(input)
  
  console.log(target)
}

function renderWeights(result) {
  let weights = document.getElementById("all-weights")
  weights.innerHTML += `<ul>${result}kg</ul>`
}

function closeWindow(id) {
  let window = document.getElementById(id)
  window.classList.add("d-none")
}
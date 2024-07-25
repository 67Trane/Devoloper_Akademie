let allempty = true;

function render() {
  let content = document.getElementById("dishes");

  for (let i = 0; i < alldishes.length; i++) {
    content.innerHTML += `
    <div id="dishesimg${i}"class="dishesimg"></div>
      <div class="dishestitle">
        <h2>${alldishes[i].title}</h2>
      </div>`;
    renderdishes(i);
    renderCategoryImg(i);
  }
  makeitempty();
  loadSlider();
  renderCategorys();
}

function renderCategoryImg(i) {
  let img = document.getElementById(`dishesimg${i}`);
  img.style.backgroundImage = `url(${alldishes[i].img})`;
}

function renderdishes(j) {
  let dishes = document.getElementById(`dishes`);
  for (let i = 0; i < alldishes[j].dishes.length; i++) {
    dishes.innerHTML += `
    <div id="dish${i}" class="dish">
     <div id="dishinfo" class="dishinfo">
            <h2>${alldishes[j].dishes[i].name}</h2>
            <p>${alldishes[j].dishes[i].ingredients}</p>
            <h2>${parseFloat(alldishes[j].dishes[i].price)
              .toFixed(2)
              .replace(".", ",")}€</h2>
        </div>
        <div class="addbtn" id="addbtn${j}${i}" onclick="addbasket(${j}, ${i})">
                <button id="addbtn-button${j}${i}"></button>
            </div>
        </div>`;
  }
}

function addbasket(j, i) {
  let basket = document.getElementById(`basket-section`);
  let basketcontainer = document.getElementById(`basket-container${i}${j}`);
  alldishes[i].dishes[j].amount = 1;
  let price = alldishes[i].dishes[j].price;

  if (!basketcontainer) {
    basket.innerHTML += renderBasketInfos(
      j,
      i,
      alldishes[i].dishes[j].amount,
      price
    );
    switchBasketInfo();
  } else {
    addAmount(i, j);
  }
  if (allempty == true) {
    checkBasektIsEmpty(j, i);
  }
  calculatePrice();
  calculateAllPrices();
  numberInCircel(j, i);
  updateSlider();
}

function makeitempty() {
  let empty = document.getElementById("costs");
  empty.innerHTML = "";
}

function renderBasketInfos(j, i, amount, price) {
  alldishes[i].dishes[j].amount++;

  return ` <div id="basket-container${i}${j}" class="basket-container" name="basket-container">
                <div class="basket-infos">
                    <div class="amount-price">
                        <div class="amount-name">
                            <h3 id="amount1${i}${j}">${amount}</h3>
                            <h3 class="dishname">${
                              alldishes[j].dishes[i].name
                            }</h3>
                        </div>
                        <h3 class="price" id="price${i}${j}">${parseFloat(price)
    .toFixed(2)
    .replace(".", ",")}€</h3>
                    </div>
                    <div class="ingridients">
                        <p>${alldishes[j].dishes[i].ingredients}</p>
                    </div>

                    <div class="add-amount">
                        <a href="#">Anmerkung<br> hinzufügen</a>
                        <div class="add-remove">
                            <button class="remove" onclick="removeButton(${i},${j})"></button>
                            <h3 id="amount2${i}${j}">${amount}</h3>
                            <button class="add" onclick="addButton(${i},${j})"></button>
                        </div>
                    </div>
                </div>

            </div>`;
}

function switchBasketInfo() {
  let basketisempty = document.getElementsByName("basket-container");
  let basket = document.getElementById("basketempty");
  let empty = document.getElementById("costs");

  if (basketisempty.length >= 1) {
    basket.classList.add("d-none");
    empty.classList.remove("d-none");
  } else {
    basket.classList.toggle("d-none");
    empty.classList.add("d-none");
  }
}

function addAmount(i, j) {
  let amounts = document.getElementById(`amount1${i}${j}`);
  let amounts2 = document.getElementById(`amount2${i}${j}`);

  amounts.innerHTML++;
  amounts2.innerHTML++;
  calculateAmount(i, j);
  calculatePrice();
  calculateAllPrices();
  deliveryCost();
  numberInCircel(j, i);
}

function removeAmount(i, j) {
  let amounts = document.getElementById(`amount1${i}${j}`);
  let amounts2 = document.getElementById(`amount2${i}${j}`);
  let basket = document.getElementById(`basket-container${i}${j}`);

  if (checkAmount(amounts.innerHTML)) {
    basket.remove();
  } else {
    amounts.innerHTML--;
    amounts2.innerHTML--;
    calculateAmountDecrese(i, j);
  }
  calculatePrice();
  calculateAllPrices();
  numberInCircel(j, i);
}

function addButton(i, j) {
  addAmount(i, j);
}

function removeButton(i, j) {
  removeAmount(i, j);
  switchBasketInfo();
}

function checkAmount(amount) {
  if (amount <= 1) {
    return true;
  }
}

function renderCosts(j, i) {
  let costs = document.getElementById("costs");

  return (costs.innerHTML += `
                <div class="titlecosts">
                    <p>Zwischensumme</p>
                    <p>Lieferkosten</p>
                    <p>Transaktionskosten PayPal</p>
                    <p class="overallcost">Gesamt</p>
                </div>
                <div class="prices">
                    <p id="price"></p>
                    <p id="deliver">4,00€</p>
                    <p id="paypal">0,29€</p>
                    <p class="overallcost" id="total"></p>
                </div>
            `);
}

function checkBasektIsEmpty(j, i) {
  if (allempty == true) {
    renderCosts(j, i);
    allempty = false;
  }
}

function calculateAmount(i, j) {
  let price = document.getElementById(`price${i}${j}`).innerHTML;
  let cost = alldishes[i].dishes[j].price;
  let res = parseInt(price) + cost;
  document.getElementById(`price${i}${j}`).innerHTML = `${parseFloat(res)
    .toFixed(2)
    .replace(".", ",")}€`;
  return res;
}

function calculateAmountDecrese(i, j) {
  let price = document.getElementById(`price${i}${j}`).innerHTML;
  let cost = alldishes[i].dishes[j].price;
  let res = parseInt(price) - cost;
  document.getElementById(`price${i}${j}`).innerHTML = `${parseFloat(res)
    .toFixed(2)
    .replace(".", ",")}€`;
  return res;
}

function countPriceElements() {
  let elements = document.querySelectorAll(".price");
  return elements;
}

function calculatePrice() {
  let amount = countPriceElements();
  let sum = 0;
  let renderprice = document.getElementById("price");

  amount.forEach((element) => {
    let price = element.innerHTML;
    let res = (sum += parseFloat(price));
    renderprice.innerHTML = `${parseFloat(res).toFixed(2).replace(".", ",")}€`;
  });
}

function calculateAllPrices() {
  let subtotal = document.getElementById("price").innerHTML;
  let deliver = document.getElementById("deliver").innerHTML;
  let paypal = document.getElementById("paypal").innerHTML;
  let newpaypal = paypal.replace(",", ".");

  if (!parseFloat(deliver)) {
    deliver = 0;
  }
  let total = document.getElementById("total");
  let newtotal =
    parseFloat(subtotal) + parseFloat(deliver) + parseFloat(newpaypal);
  total.innerHTML = `${parseFloat(newtotal).toFixed(2).replace(".", ",")}€`;
}

function deliveryCost() {
  let checkbox = document.getElementById("checkbox");
  let deliver = document.getElementById("deliver");
  let paypal = document.getElementById("paypal");

  if (checkbox.checked) {
    deliver.innerHTML = "Kostenlos";
    paypal.innerHTML = "0€";
  } else {
    deliver.innerHTML = "4,00€";
    paypal.innerHTML = "0,29€";
  }
  calculateAllPrices();
  renderSlider();
  updateSlider();
}

function numberInCircel(j, i) {
  let amount = document.getElementById(`amount1${i}${j}`);
  let button = document.getElementById(`addbtn-button${j}${i}`);
  if (amount) {
    button.style.background = "none";
    button.style.color = "white";
    button.style.backgroundColor = "black";
    button.innerHTML = `<h2>${amount.innerHTML}</h2>`;
  } else {
    button.style.backgroundColor = "transparent";
    button.style.backgroundImage = "url(./Logo/add.png)";
    button.style.backgroundSize = "50%";
    button.style.backgroundRepeat = "no-repeat";
    button.style.backgroundPosition = "center";
    button.innerHTML = "";
  }
}

function renderSlider() {
  let checkbox = document.getElementById("checkbox");

  if (checkbox.checked) {
    localStorage.setItem("checkbox", "checked");
  } else {
    localStorage.setItem("checkbox", "notchecked");
  }
}

function loadSlider() {
  let checked = localStorage.getItem("checkbox");
  return checked;
}

function updateSlider() {
  let checkbox = document.getElementById("checkbox");
  if (loadSlider() == "checked") {
    checkbox.checked = true;
  }
}

function renderCategorys() {
  let categoryline = document.getElementById("categorylist");

  for (let i = 0; i < alldishes.length; i++)
    categoryline.innerHTML += `<a class="btn-long" href="#dishesimg${i}">${alldishes[i].title}</a>`;
}


function bottomBasket() {
  let basketcontainer = document.getElementById("bottom-basket-container")
  let basketleftside = document.getElementById("basket-section")
  
  basketleftside.classList.add("fullscreen")
  basketcontainer.classList.add("d-none")
}



/*
2. Seite responsiv machen
*/

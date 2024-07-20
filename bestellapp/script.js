let alldishes = [
  {
    title: "Salat",
    img: "./imgs/salad.png",
    dishes: [
      {
        name: "Grüner Salat",
        ingredients: "mit Gurken, Tomaten",
        price: 6.0,
        img: "./asd.png",
        amount: 1,
      },
      {
        name: "Tomaten Salat",
        ingredients: "mit Zwiebeln, Tomaten",
        price: 6.0,
        img: "./asd.png",
        amount: 1,
      },
      {
        name: "Caesar Salat",
        ingredients: "mit Hähnchen, Parmesan, Croutons",
        price: 8.0,
        img: "./asd.png",
        amount: 1,
      },
    ],
  },
  {
    title: "Pizza",
    img: "./imgs/pizza.jpg",
    dishes: [
      {
        name: "Pizza Roma",
        ingredients: "mit Schinken, Salami und Champignons",
        price: 10.0,
        img: "./asd.png",
        amount: 1,
      },
      {
        name: "Pizza Margherita",
        ingredients: "mit Tomatensauce und Mozzarella",
        price: 8.0,
        img: "./asd.png",
        amount: 1,
      },
      {
        name: "Pizza Funghi",
        ingredients: "mit Champignons und Mozzarella",
        price: 9.0,
        img: "./asd.png",
        amount: 1,
      },
    ],
  },
  {
    title: "Pasta",
    img: "./imgs/pasta.png",
    dishes: [
      {
        name: "Spaghetti Bolognese",
        ingredients: "mit Hackfleischsauce",
        price: 12.0,
        img: "./asd.png",
        amount: 1,
      },
      {
        name: "Penne Arrabbiata",
        ingredients: "mit scharfer Tomatensauce",
        price: 10.0,
        img: "./asd.png",
        amount: 1,
      },
    ],
  },
  {
    title: "Desserts",
    img: "./imgs/desserts.png",
    dishes: [
      {
        name: "Tiramisu",
        ingredients: "klassisches italienisches Dessert",
        price: 6.0,
        img: "./asd.png",
        amount: 1,
      },
      {
        name: "Panna Cotta",
        ingredients: "mit Beeren",
        price: 5.0,
        img: "./asd.png",
        amount: 1,
      },
    ],
  },
];

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
                <button></button>
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
    console.log(allempty);
  }
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
                        <h3 class="price" id="price">${parseFloat(price)
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
  calculateAmount(amounts.innerHTML);
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
    calculateAmountDecrese(amounts.innerHTML);
  }
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
                    <p>21,10€</p>
                    <p>Kostenlos</p>
                    <p>0,29€</p>
                    <p class="overallcost">21,39€</p>
                </div>
            `);
}

function checkBasektIsEmpty(j, i) {
  if (allempty == true) {
    renderCosts(j, i);
    allempty = false;
  } else {
    console.log("nothere");
  }
}


function calculateAmount(amount) {
  let cost = alldishes[0].dishes[0].price;
  let res = cost * amount;
  document.getElementById("price").innerHTML = `${parseFloat(res).toFixed(2).replace(".",",")}€`;
  return res;
}

function calculateAmountDecrese(amount) {
  let price = document.getElementById("price").innerHTML;
  let cost = alldishes[0].dishes[0].price;
  let res = parseInt(price) - cost;
  document.getElementById("price").innerHTML = `${parseFloat(res).toFixed(2).replace(".",",")}€`;
  return res;
}

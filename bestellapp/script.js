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
      },
      {
        name: "Tomaten Salat",
        ingredients: "mit Zwiebeln, Tomaten",
        price: 6.0,
        img: "./asd.png",
      },
      {
        name: "Caesar Salat",
        ingredients: "mit Hähnchen, Parmesan, Croutons",
        price: 8.0,
        img: "./asd.png",
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
      },
      {
        name: "Pizza Margherita",
        ingredients: "mit Tomatensauce und Mozzarella",
        price: 8.0,
        img: "./asd.png",
      },
      {
        name: "Pizza Funghi",
        ingredients: "mit Champignons und Mozzarella",
        price: 9.0,
        img: "./asd.png",
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
      },
      {
        name: "Penne Arrabbiata",
        ingredients: "mit scharfer Tomatensauce",
        price: 10.0,
        img: "./asd.png",
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
      },
      {
        name: "Panna Cotta",
        ingredients: "mit Beeren",
        price: 5.0,
        img: "./asd.png",
      },
    ],
  },
];

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
  let clicked = 0
  
  if (clicked == 0) {
    alert("test")
    clicked = 2
  } 

  console.log(clicked)
  let basket = document.getElementById("basket-section")
  switchBasketInfo();
  let amount = 1;

  basket.innerHTML += renderBasketInfos(j, i, amount);
 

}

function renderBasketInfos(j, i, amount) {
  return ` <div id="basket-container" class="basket-container">
                <div class="basket-infos">
                    <div class="amount-price">
                        <div class="amount-name">
                            <h3>${amount}</h3>
                            <h3 class="dishname">${alldishes[j].dishes[i].name}</h3>
                        </div>
                        <h3 class="price">${parseFloat(alldishes[j].dishes[i].price)
                          .toFixed(2)
                          .replace(".", ",")}€</h3>
                    </div>
                    <div class="ingridients">
                        <p>${alldishes[j].dishes[i].ingredients}</p>
                    </div>

                    <div class="add-amount">
                        <a href="#">Anmerkung<br> hinzufügen</a>
                        <div class="add-remove">
                            <button class="remove"></button>
                            <h3>${amount}</h3>
                            <button class="add"></button>
                        </div>
                    </div>
                </div>

            </div>`;
}

function switchBasketInfo() {
  let basket = document.getElementById("basketempty");
  basket.classList.add("d-none");
}

let alldishes = [
  {
    title: "Salat",
    img: "./img/tst.png",
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
    ],
  },
  {
    title: "Pizza",
    img: "./img/tst.png",
    dishes: [
      {
        name: "PizzaRoma",
        ingredients: "mit Schinken, Salami und Champignons",
        price: 10.0,
        img: "./asd.png",
      },
    ],
  },
];

function render() {
  let content = document.getElementById("dishes");

  for (let i = 0; i < alldishes.length; i++) {
    content.innerHTML += `
    <div class="dishesimg"></div>
      <div class="dishestitle">
        <h2>${alldishes[i].title}</h2>
      </div>
                   `;
    renderdishes(i);
  }
}

function renderdishes(j) {
  let dishes = document.getElementById(`dishes`);
  console.log(dishes);

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
        <div class="addbtn" id="addbtn${j}">
                <button></button>
            </div>
        </div>`;
  }
}

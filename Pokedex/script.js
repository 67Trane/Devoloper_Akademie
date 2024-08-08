const POKEDEX_API = "https://pokeapi.co/api/v2";

let pokemonCount = 0;
let allPokemonNames = [];

function init() {
  
  loadingScreen();
  loadPokemons();
  searchLength()
}

function loadingScreen() {
  document.getElementById("loading-screen").classList.remove("d-none");
}

async function loadPokemons() {
  loadingScreen();
  fetch(POKEDEX_API + "/pokemon?limit=20&offset=0")
    .then((response) => response.json())
    .then((data) => renderPokemonCard(data.results))
    .catch((error) => console.error(error));
}

async function loadPokemon(number) {
  loadingScreen();
  fetch(POKEDEX_API + "/pokemon/" + number)
  .then((response) => response.json())
  .then((data) => pokemon(data, number))
  .catch((error) => console.error(error));
}

function pokemon(pokemon, i) {
  let pokemonId = pokemon.id;
  document.getElementById(`pokemon-id${i}`).innerHTML += pokemonId;
  document.getElementById(`pokemonpicture${i}`).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  renderPokemonType(pokemon, i);
  document.getElementById("loading-screen").classList.add("d-none");
}

function renderPokemonType(pokemon, i) {
  document.getElementById(`card${i}`).classList.add(pokemon.types[0].type.name + "-bg");
  for (let z = 0; z < pokemon.types.length; z++) {
    let type = pokemon.types[z].type.name;
    document.getElementById(`type${i}`).innerHTML += `<span class="badge ${type}">${pokemon.types[z].type.name}</span>`;
  }
}

function renderPokemonCard(AllPokemons, lenghts) {
  if (lenghts === undefined) {
    for (let i = pokemonCount; i < pokemonCount + AllPokemons.length; i++) {
      loadPokemon(i + 1);
      let Pokemon = AllPokemons[i - pokemonCount];
      renderCard(Pokemon.name, i);
    }
  } else {
    for (let z = 0; z < lenghts; z++) {
      let Pokemonid = AllPokemons[z].id;
      loadPokemon(Pokemonid);
      renderCard(AllPokemons[z].name, Pokemonid - 1);
    }
  }
  pokemonCount += AllPokemons.length;
}

function renderCard(AllPokemons, i) {
  let pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML += renderCardTemplate(AllPokemons, i);
}

function renderCardTemplate(AllPokemons, i) {
  return `
  <div class="card" id="card${i + 1}" style="width: 18rem;" onclick="openPokemonCard(${i + 1})">
        <img src="#" class="card-img-top" alt="..." id="pokemonpicture${i + 1}">
        <div class="card-body">
            <div class="pokemon-info-text">
                <p class="card-text" id="pokemon-id${i + 1}">Nr. </p>
                <h5 class="card-title">${AllPokemons.toUpperCase()}</h5>
            </div>
            <div class="type" id="type${i + 1}">
            </div>
        </div>
    </div>`
}

async function loadMore() {
  loadingScreen();
  fetch(`${POKEDEX_API}/pokemon?limit=20&offset=${pokemonCount}`)
  .then((response) => response.json())
  .then((data) => renderPokemonCard(data.results))
  .catch((error) => console.error(error));
}

function openPokemonCard(i) {
  document.getElementById("fullscreen-container").classList.remove("d-none");
  document.getElementById("body").style.overflowY = "hidden";
  loadPokemonInformations(i);
}

function closeFullscreen() {
  document.getElementById("fullscreen-container").classList.add("d-none");
  document.getElementById("body").style.overflowY = "auto";
  document.getElementById("types").innerHTML = "";
  document.getElementById("allabilities").innerHTML = "";
  document.getElementById("fullscreen").className = "fullscreen-card";
}

function checkClick(event) {
  if (event.target.id === "fullscreen-container") {
    closeFullscreen();
  }
}

async function loadPokemonInformations(id) {
  loadingScreen();
  fetch(POKEDEX_API + "/pokemon/" + id)
  .then((response) => response.json())
  .then((data) => renderFullscreenPokemon(data))
  .then(() =>document.getElementById("loading-screen").classList.add("d-none"))
  .catch((error) => console.error(error));
}

function renderFullscreenPokemon(pokemon) {
  renderFullscreenTitles(pokemon)
  renderFullscreenTypes(pokemon)
  renderFullscreenImage(pokemon)
  renderFullscreenSize(pokemon)
  renderFullscreenAbilities(pokemon)
  renderFullscreenStats(pokemon)
  document.getElementById("arrows").innerHTML = `
<img src="./icon/left.png" alt="" onclick="next('left', ${pokemon.id})" class="hover">
<img src="./icon/right.png" alt="" onclick="next('right', ${pokemon.id})" class="hover">
`;
}

function renderFullscreenImage(pokemon) {
  document.getElementById("pokemon-image").src = pokemon.sprites.front_default;
}

function renderFullscreenAbilities(pokemon) {
  for (let i = 0; i < pokemon.abilities.length; i++) {
    document.getElementById("allabilities").innerHTML += `<h2 class="badge rounded-pill text-bg-success">${pokemon.abilities[i].ability.name}</h2>`;
  }
}

function renderFullscreenTitles(pokemon) {
  document.getElementById("pokemon-id").innerHTML = "ID: " + pokemon.id
  document.getElementById("pokemon-name").innerHTML = "Name: " + pokemon.name.toUpperCase()
}

function renderFullscreenTypes(pokemon) {
  for (let i = 0; i < pokemon.types.length; i++) {
    document.getElementById("types").innerHTML += `<h2 class="badge ${pokemon.types[i].type.name}-bg">${pokemon.types[i].type.name}</h2>`;
    document.getElementById("fullscreen").classList.add(pokemon.types[0].type.name);
  }
}

function renderFullscreenSize(pokemon) {
  document.getElementById("height").innerHTML = parseFloat(pokemon.height / 10).toFixed(2) + " m"
  document.getElementById("weight").innerHTML = parseFloat(pokemon.weight / 10).toFixed(2) + " kg"
}

function renderFullscreenStats(pokemon) {
  let stats= ["hp", "attack", "defense", "speed", "sp.atk", "sp.def"]

  for (let i = 0; i < stats.length; i++) {
    document.getElementById(stats[i]).style.height = pokemon.stats[i].base_stat + "%";
    document.getElementById(stats[i] + "-text").innerHTML = pokemon.stats[i].base_stat;
  }
}

function next(arrow, id) {
  if (arrow == "left") {
    nextLeft(id)
  } else {
    nextRight(id)
  }
}

function nextLeft(id){
  if (id <= 1) {
    showMessage("Das ist das erste Pokemon. Es gibt keine vorherigen Pokemon.")
  } else {
    loadPokemonInformations(id - 1);
    clear()
  }
}

function nextRight(id){
  if (id > 1302) {
    showMessage("Das ist das letzte Pokemon.")
  } else {
    loadPokemonInformations(id + 1);
    document.getElementById("message").classList.remove("visible");
  }
  clear();
}

function showMessage(message) {
  let messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.classList.add("visible");
}

function clear() {
  document.getElementById("types").innerHTML = "";
  document.getElementById("fullscreen").className = "fullscreen-card";
  document.getElementById("allabilities").innerHTML = "";
}

async function collectPokemonNames() {
  fetch(POKEDEX_API + "/pokemon?offset=0&limit=100")
  .then((response) => response.json())
  .then((data) => getPokemons(data.results))
  .catch((error) => console.error(error));
}

function getPokemons(data) {
  for (let i = 0; i < 100; i++) {
    allPokemonNames[i + 1] = { name: data[i].name, id: i + 1 };
  }
}

function searchLength() {
  let input = document.getElementById("input-search")
  input.addEventListener("input", () => {
    if (input.value.length >= 3) {
      document.getElementById("search-btn").disabled = false
    } else {
      document.getElementById("search-btn").disabled = true
    }
  })
}

function searchPokemon() {
  let input = document.getElementById("input-search").value.toLowerCase();
  let results = allPokemonNames.filter((pokemon) => pokemon.name.toLowerCase().includes(input));
  let lengths = results.length;

  if (input.length >= 3) {
    if (lengths > 0) {
      pokemonCount = 0;
      document.getElementById("pokemon-container").innerHTML = "";
      renderPokemonCard(results, lengths);
      document.getElementById("load-more").style.display = "none";
    }
  }
}

function reset() {
  location.reload();
}

collectPokemonNames();
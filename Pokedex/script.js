const POKEDEX_API = "https://pokeapi.co/api/v2";

let pokemonCount = 0;

function init() {
  loadingScreen();
  loadPokemons();
}

function loadingScreen() {
  document.getElementById("loading-screen").classList.remove("d-none");
}

async function loadPokemons() {
  loadingScreen();
  fetch(POKEDEX_API + "/pokemon?limit=20&offset=0")
    .then((response) => response.json())
    .then((data) => renderPokemonCard(data.results))
    .then(() =>
      document.getElementById("loading-screen").classList.add("d-none")
    )
    .catch((error) => console.error(error));
}

async function loadPokemon(number) {
  loadingScreen();
  fetch(POKEDEX_API + "/pokemon/" + number)
    .then((response) => response.json())
    .then((data) => pokemon(data, number))
    .then(() =>
      document.getElementById("loading-screen").classList.add("d-none")
    )
    .catch((error) => console.error(error));
}

function pokemon(pokemon, i) {
  let pokemonId = pokemon.id;
  document.getElementById(`pokemon-id${i}`).innerHTML += pokemonId;
  document.getElementById(
    `pokemonpicture${i}`
  ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  renderPokemonType(pokemon, i);
}

function renderPokemonType(pokemon, i) {
  document
    .getElementById(`card${i}`)
    .classList.add(pokemon.types[0].type.name + "-bg");

  for (let z = 0; z < pokemon.types.length; z++) {
    let type = pokemon.types[z].type.name;
    document.getElementById(
      `type${i}`
    ).innerHTML += `<span class="badge ${type}">${pokemon.types[z].type.name}</span>`;
  }
}

function renderPokemonCard(AllPokemons) {
  console.log(AllPokemons)
  for (let i = pokemonCount; i < pokemonCount + AllPokemons.length; i++) {
    loadPokemon(i + 1);
    let Pokemon = AllPokemons[i - pokemonCount];
    let pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.innerHTML += `<div class="card shadow" id="card${
      i + 1
    }" style="width: 18rem;" onclick="openPokemonCard(${i + 1})">
                    <img src="#" class="card-img-top" alt="..." id="pokemonpicture${
                      i + 1
                    }">
                    <div class="card-body">
                        <div class="pokemon-info-text">
                            <p class="card-text" id="pokemon-id${
                              i + 1
                            }">Nr. </p>
                            <h5 class="card-title">${Pokemon.name.toUpperCase()}</h5>
                        </div>
                        <div class="type" id="type${i + 1}">
                        </div>
                    </div>
                </div>`;
  }
  pokemonCount += AllPokemons.length;
}

async function loadMore() {
  loadingScreen();
  fetch(`${POKEDEX_API}/pokemon?limit=20&offset=${pokemonCount}`)
    .then((response) => response.json())
    .then((data) => renderPokemonCard(data.results, pokemonCount))
    .then(() =>
      document.getElementById("loading-screen").classList.add("d-none")
    )
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
    .then(() =>
      document.getElementById("loading-screen").classList.add("d-none")
    );
}

function renderHelp(id, content) {
  document.getElementById(id).innerHTML = content;
}

function renderFullscreenPokemon(pokemon) {
  console.log(pokemon);
  renderHelp("pokemon-id", "ID: " + pokemon.id);
  renderHelp("pokemon-name", "Name: " + pokemon.name.toUpperCase());

  for (let i = 0; i < pokemon.types.length; i++) {
    document.getElementById(
      "types"
    ).innerHTML += `<h2 class="badge ${pokemon.types[i].type.name}-bg">${pokemon.types[i].type.name}</h2>`;
    document
      .getElementById("fullscreen")
      .classList.add(pokemon.types[0].type.name);
  }
  document.getElementById("pokemon-image").src = pokemon.sprites.front_default;

  renderHelp("height", parseFloat(pokemon.height / 100).toFixed(2) + " m");
  renderHelp("weight", parseFloat(pokemon.weight / 10).toFixed(2) + " kg");

  for (let i = 0; i < pokemon.abilities.length; i++) {
    document.getElementById(
      "allabilities"
    ).innerHTML += `<h2>${pokemon.abilities[i].ability.name}</h2>`;
  }

  document.getElementById("hp").style.height = pokemon.stats[0].base_stat + "%";
  document.getElementById("hp-text").innerHTML = pokemon.stats[0].base_stat;

  document.getElementById("attack").style.height =
    pokemon.stats[1].base_stat + "%";
  document.getElementById("attack-text").innerHTML = pokemon.stats[1].base_stat;

  document.getElementById("defense").style.height =
    pokemon.stats[2].base_stat + "%";
  document.getElementById("defense-text").innerHTML =
    pokemon.stats[2].base_stat;

  document.getElementById("speed").style.height =
    pokemon.stats[3].base_stat + "%";
  document.getElementById("speed-text").innerHTML = pokemon.stats[3].base_stat;

  document.getElementById("sp.atk").style.height =
    pokemon.stats[4].base_stat + "%";
  document.getElementById("sp.atk-text").innerHTML = pokemon.stats[4].base_stat;

  document.getElementById("sp.def").style.height =
    pokemon.stats[5].base_stat + "%";
  document.getElementById("sp.def-text").innerHTML = pokemon.stats[5].base_stat;

  document.getElementById("arrows").innerHTML = `
<img src="./icon/left.png" alt="" onclick="next('left', ${pokemon.id})" class="hover">
<img src="./icon/right.png" alt="" onclick="next('right', ${pokemon.id})" class="hover">
`;
}

function next(arrow, id) {
  document.getElementById("types").innerHTML = "";
  document.getElementById("fullscreen").className = "fullscreen-card";
  document.getElementById("allabilities").innerHTML = "";
  console.log(id);
  if (arrow == "left") {
    if (id < 1) {
      alert("nein");
    } else {
      loadPokemonInformations(id - 1);
    }
  } else {
    if (id > 1302) {
      alert("Ende");
    } else {
      loadPokemonInformations(id + 1);
    }
  }
}

let allPokemonNames = [];

async function collectPokemonNames() {
  fetch(POKEDEX_API + "/pokemon?offset=0&limit=100")
    .then((response) => response.json())
    .then((data) => getPokemons(data.results));
}

function getPokemons(data) {
  for (let i = 0; i < 100; i++) {
    allPokemonNames.push(data[i].name);
  }
}

let test = [{name:"bulbasaur"}]

function searchPokemon() {
  let input = document.getElementById("input-search").value.toLowerCase();

  let result = allPokemonNames.filter((pokemon) => pokemon.includes(input));

  if (input.length < 3) {
    alert("Bitte zum suchen ein Namen eingeben!");
  } else {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
      document.getElementById("pokemon-container").innerHTML ="";
    }
  }
}



collectPokemonNames();

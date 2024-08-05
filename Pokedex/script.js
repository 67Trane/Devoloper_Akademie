const POKEDEX_API = "https://pokeapi.co/api/v2";

function init() {
  loadingScreen();
  loadPokemons();
}

function loadingScreen() {
  document.getElementById("test").style.backgroundColor = "red";
}

async function loadPokemons() {
  fetch(POKEDEX_API + "/pokemon?limit=20&offset=0")
    .then((response) => response.json())
    .then((data) => renderPokemonCard(data.results))
    .then(
      () =>
        (document.getElementById("test").style.backgroundColor = "green")
    )
    .catch((error) => console.error(error));
}

async function loadPokemon(number) {
  fetch(POKEDEX_API + "/pokemon/" + number)
    .then((response) => response.json())
    .then((data) => pokemon(data, number))
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
  for (let z = 0; z < pokemon.types.length; z++) {
    let type = pokemon.types[z].type.name;
    document.getElementById(
      `type${i}`
    ).innerHTML += `<span class="badge ${type}">${pokemon.types[z].type.name}</span>`;
  }
}

function renderPokemonCard(AllPokemons) {
  for (let i = 0; i < AllPokemons.length; i++) {
    loadPokemon(i + 1);
    let Pokemon = AllPokemons[i];
    let pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.innerHTML += `<div class="card" id="card" style="width: 18rem;" onclick="openPokemonCard(${i})">
                    <img src="icon/1.png" class="card-img-top" alt="..." id="pokemonpicture${
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
}

function openPokemonCard(i) {
  console.log(i);
}

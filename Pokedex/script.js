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
  fetch(POKEDEX_API + "/pokemon?limit=20&offset=0")
    .then((response) => response.json())
    .then((data) => renderPokemonCard(data.results))
    .then(
      () => (document.getElementById("loading-screen").classList.add("d-none"))
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
    document.getElementById(`card${i}`).classList.add(pokemon.types[0].type.name+ "-bg")

  for (let z = 0; z < pokemon.types.length; z++) {
    let type = pokemon.types[z].type.name;
    document.getElementById(`type${i}`).innerHTML += `<span class="badge ${type}">${pokemon.types[z].type.name}</span>`;
    
  }
}

function renderPokemonCard(AllPokemons) {
  for (let i = pokemonCount; i < pokemonCount + AllPokemons.length; i++) {
    loadPokemon(i + 1);
    let Pokemon = AllPokemons[i - pokemonCount];
    let pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.innerHTML += `<div class="card shadow" id="card${i+1}" style="width: 18rem;" onclick="openPokemonCard(${i+1})">
                    <img src="#" class="card-img-top" alt="..." id="pokemonpicture${i + 1}">
                    <div class="card-body">
                        <div class="pokemon-info-text">
                            <p class="card-text" id="pokemon-id${i + 1}">Nr. </p>
                            <h5 class="card-title">${Pokemon.name.toUpperCase()}</h5>
                        </div>
                        <div class="type" id="type${i + 1}">
                        </div>
                    </div>
                </div>`;
  }
  pokemonCount += AllPokemons.length;
}

function openPokemonCard(i) {
  document.getElementById("fullscreen-container").classList.remove("d-none")
}

async function loadMore() {
  fetch(`${POKEDEX_API}/pokemon?limit=20&offset=${pokemonCount}`)
    .then((response) => response.json())
    .then((data) => renderPokemonCard(data.results, pokemonCount))
    .catch((error) => console.error(error));
}

function renderFullscreenPokemon() {

}
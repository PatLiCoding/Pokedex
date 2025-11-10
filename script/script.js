let pokemon = [];
let pokemonDetail = [];
const pokedexContantRef = document.getElementById("pokedexContant");
const btnSectionRef = document.getElementById("btnSection");
const loadingtextContainerRef = document.getElementById("loadingtextContainer");
const loadingspinnerContainerRef = document.getElementById(
  "loadingspinnerContainer"
);

async function init(i, j) {
  promiseAll();
  await loadMorePokemon(i, j);
}

async function loadMorePokemon(i, j) {
  startLoadingspinner();
  await fetchPokemon(i, j);
  renderPokedex();
  renderLoadingBtn(i, j);
  stopLoadingspinner();
}

function startLoadingspinner() {
  pokedexContantRef.style.display = "none";
  btnSectionRef.style.display = "none";
  document.getElementById("searchInput").style.display = "none";
  loadingtextContainerRef.innerHTML = getTemplatesloadingtextContainer();
  loadingspinnerContainerRef.style.display = "flex";
}

function stopLoadingspinner() {
  pokedexContantRef.style.display = "flex";
  btnSectionRef.style.display = "flex";
  document.getElementById("searchInput").style.display = "flex";
  loadingtextContainerRef.innerHTML = "";
  loadingspinnerContainerRef.style.display = "none";
}

async function fetchPokemon(i) {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${i}&offset=0`
  );
  pokemon = await response.json();
  let responsesAsPromise = [];
  for (let index = 0; index < pokemon.results.length; index++) {
    responsesAsPromise.push(getPokemonDetails(pokemon.results[index]));
  }
  pokemonDetail = await Promise.all(responsesAsPromise);
}

async function getPokemonDetails(singledata) {
  let response = await fetch(singledata.url);
  return await response.json();
}

function renderPokedex() {
  pokedexContantRef.innerHTML = "";

  for (let i = 0; i < pokemonDetail.length; i++) {
    pokedexContantRef.innerHTML += getTemplatesPokedexContent(i);
    renderPokemonTyp(i);
  }
}

function renderPokemonTyp(i) {
  for (let j = 0; j < pokemonDetail[i].types.length; j++) {
    document.getElementById(`id${i}`).innerHTML += getTemplatesPokedexTyp(i, j);
  }
}

function renderLoadingBtn(i, j) {
  j = i;
  i = i + 20;

  btnSectionRef.innerHTML = getTemplatesLoadingBtn(i, j);
}

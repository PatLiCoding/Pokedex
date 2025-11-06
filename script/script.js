let pokemon = [];
let pokemonDetail = [];
const pokedexContantRef = document.getElementById("pokedexContant");
const btnSectionRef = document.getElementById("btnSection");
const loadingtextContainerRef = document.getElementById("loadingtextContainer");
const loadingspinnerContainerRef = document.getElementById(
  "loadingspinnerContainer"
);

async function init(i, j) {
  startLoadingspinner();
  pokemon = await fetchPokemon(i, j);
  await fetchPokemonDetail();
  renderPokedex();
  renderLoadingBtn(i, j);
  stopLoadingspinner();
}

function startLoadingspinner() {
  pokedexContantRef.style.display = "none";
  btnSectionRef.style.display = "none";
  loadingtextContainerRef.innerHTML = getTemplatesloadingtextContainer();
  loadingspinnerContainerRef.style.display = "flex";
}

function stopLoadingspinner() {
  pokedexContantRef.style.display = "flex";
  btnSectionRef.style.display = "flex";
  loadingtextContainerRef.innerHTML = "";
  loadingspinnerContainerRef.style.display = "none";
}

async function fetchPokemon(i, j) {
  let responseJson = [];
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${i}&offset=${j}`
    );
    responseJson = await response.json();
  } catch (error) {
    console.log(error);
  }
  return responseJson;
}

async function fetchPokemonDetail() {
  try {
    for (let i = 0; i < 20; i++) {
      let response = await fetch(pokemon.results[i].url);
      pokemonDetail.push(await response.json());
    }
  } catch (error) {
    console.log(error);
  }
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

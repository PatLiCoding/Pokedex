let allPokemon = [];
let searchResult = [];
const searchInputRef = document.getElementById("searchInput");

function searchPokemon() {
  let searchValue = searchInputRef.value.toLowerCase();

  if (searchValue.length >= 3) {
    filterPokemon(searchValue);
    removeSearchBtn();
  } else {
    pokedexContantRef.innerHTML = "";
    renderPokedex();
    btnSectionRef.innerHTML = getTemplatesLoadingBtn(
      pokemonDetail.length + 20,
      pokemonDetail.length
    );
  }
}

function filterPokemon(searchValue) {
  searchResult = allPokemon.filter((pokemon) =>
    pokemon.name.includes(searchValue)
  );
  searchResult.length == 0
    ? (pokedexContantRef.innerHTML = getTemplatesUnsuccessfulSearch())
    : renderPokedexSearch(searchResult);
}

async function promiseAll() {
  let response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0"
  );
  let data = await response.json();
  let responsesAsPromise = [];
  for (let index = 0; index < data.results.length; index++) {
    responsesAsPromise.push(getDetailsSearch(data.results[index]));
  }
  allPokemon = await Promise.all(responsesAsPromise);
}

async function getDetailsSearch(singledata) {
  let response = await fetch(singledata.url);
  return await response.json();
}

function renderPokedexSearch(searchResult) {
  pokedexContantRef.innerHTML = "";

  for (let i = 0; i < searchResult.length; i++) {
    pokedexContantRef.innerHTML += getTemplatesContentSearch(i);
    renderTypSearch(i);
  }
}

function renderTypSearch(i) {
  for (let j = 0; j < searchResult[i].types.length; j++) {
    document.getElementById(`idSearch${i}`).innerHTML += getTemplatesTypSearch(
      i,
      j
    );
  }
}

function removeSearchBtn() {
  btnSectionRef.innerHTML = getTemplatesRemoveSearchBtn();
}

function removeSearch() {
  searchInputRef.value = "";
  renderPokedex();
  btnSectionRef.innerHTML = getTemplatesLoadingBtn(
    pokemonDetail.length + 20,
    pokemonDetail.length
  );
}

//Search Dialog
function openDialogSearch(i) {
  dialogRef.showModal();
  hiddenBody();
  dialogRef.classList.add("opened");
  renderDialogSearch(i);
}

function renderDialogSearch(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogContentSearch(i);
  renderTypDialogSearch(i);
  setInformationContainerSearch(i);
}

function renderTypDialogSearch(i) {
  for (let j = 0; j < searchResult[i].types.length; j++) {
    document.getElementById(`idDialogSearch${i}`).innerHTML +=
      getTemplatesTypSearch(i, j);
  }
}

function renderAbilitiesSearch(i) {
  for (let j = 0; j < searchResult[i].abilities.length; j++) {
    document.getElementById("abilitiesContainerSearch").innerHTML +=
      getTemplatesAbilitiesSearch(i, j);
  }
}

function setInformationContainerSearch(i) {
  document.getElementById("pokemonDetailContainerSearch").innerHTML =
    getTemplatesInfomationSearch(i);
  renderAbilitiesSearch(i);
}

function setStatsContainerSearch(i) {
  document.getElementById("pokemonDetailContainerSearch").innerHTML = "";

  for (let j = 0; j < searchResult[i].stats.length; j++) {
    document.getElementById("pokemonDetailContainerSearch").innerHTML +=
      getTemplatesStatsSearch(i, j);
  }
}

function closeDialogSearch() {
  dialogRef.close();
  showBody();
  dialogRef.classList.remove("opened");
}

function changeToPreviousPokemonSearch(i) {
  if (i > 0) {
    dialogPokemonContentRef.innerHTML = getTemplatesDialogContentSearch(i - 1);
    renderTypDialogSearch(i - 1);
    renderDialogSearch(i - 1);
  } else {
    closeDialog();
  }
}

async function changeToNextPokemonSearch(i) {
  document.getElementById(`nextSearchBtn${i}`).disabled = true;

  if (i < searchResult.length - 1) {
    await renderNextPokemonDialogSearch(i);
  } else {
    closeDialog();
  }
}

async function renderNextPokemonDialogSearch(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogContentSearch(i + 1);
  renderDialogSearch(i + 1);
}

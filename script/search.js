let allPokemon = [];
let searchResult = [];
const searchInputRef = document.getElementById("searchInput");
let currentSearch = false;

function searchPokemon() {
  let searchValue = searchInputRef.value.toLowerCase();

  if (searchValue.length >= 3) {
    filterPokemon(searchValue);
    removeSearchBtn();
    currentSearch = true;
  } else {
    pokedexContantRef.innerHTML = "";
    renderPokedex();
    btnSectionRef.innerHTML = getTemplatesLoadingBtn(
      pokemonDetail.length + 20,
      pokemonDetail.length
    );
    currentSearch = false;
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

function renderPokedexSearch() {
  pokedexContantRef.innerHTML = "";
  let array = searchResult;

  for (let i = 0; i < searchResult.length; i++) {
    pokedexContantRef.innerHTML += getTemplatesPokedexContent(i, array);
    renderTypSearch(i, array);
  }
}

function renderTypSearch(i, array) {
  for (let j = 0; j < searchResult[i].types.length; j++) {
    document.getElementById(`id${i}`).innerHTML += getTemplatesPokedexTyp(
      i,
      j,
      array
    );
  }
}

function removeSearchBtn() {
  btnSectionRef.innerHTML = getTemplatesRemoveSearchBtn();
}

function removeSearch() {
  searchInputRef.value = "";
  renderPokedex();
  currentSearch = false;
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
  let array = searchResult;
  dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(i, array);
  currentSearchCheckInfo(i);
  renderTypDialogSearch(i);
}

function renderTypDialogSearch(i) {
  let array = searchResult;
  for (let j = 0; j < searchResult[i].types.length; j++) {
    document.getElementById(`idDialog${i}`).innerHTML += getTemplatesPokedexTyp(
      i,
      j,
      array
    );
  }
}

function renderAbilitiesSearch(i) {
  let array = searchResult;
  for (let j = 0; j < searchResult[i].abilities.length; j++) {
    document.getElementById("abilitiesContainer").innerHTML +=
      getTemplatesAbilities(i, j, array);
  }
}

function setInformationContainerSearch(i) {
  let array = searchResult;
  document.getElementById("pokemonDetailContainer").innerHTML =
    getTemplatesInfomation(i, array);
  renderAbilitiesSearch(i, array);
}

function setStatsContainerSearch(i) {
  document.getElementById("pokemonDetailContainer").innerHTML = "";
  let array = searchResult;

  for (let j = 0; j < searchResult[i].stats.length; j++) {
    document.getElementById("pokemonDetailContainer").innerHTML +=
      getTemplatesStats(i, j, array);
  }
}

function closeDialogSearch() {
  dialogRef.close();
  showBody();
  dialogRef.classList.remove("opened");
}

function changeToPreviousPokemonSearch(i) {
  let array = searchResult;
  if (i > 0) {
    dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(i - 1, array);
    renderTypDialogSearch(i - 1, array);
    renderDialogSearch(i - 1, array);
  } else {
    closeDialog();
  }
}

async function changeToNextPokemonSearch(i) {
  document.getElementById(`nextBtn${i}`).disabled = true;
  let array = searchResult;

  if (i < searchResult.length - 1) {
    await renderNextPokemonDialogSearch(i, array);
  } else {
    closeDialog();
  }
}

async function renderNextPokemonDialogSearch(i, array) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(i + 1, array);
  renderDialogSearch(i + 1);
}

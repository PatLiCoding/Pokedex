const dialogRef = document.getElementById("dialog");
const dialogPokemonContentRef = document.getElementById("dialogPokemonContent");

function eventBubbling(event) {
  if (event.target === dialogRef) {
    dialogRef.close(closeDialog());
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function openDialog(i) {
  dialogRef.showModal();
  hiddenBody();
  dialogRef.classList.add("opened");
  renderDialog(i);
}

function renderDialog(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(i);
  renderTypDialog(i);
  setInformationContainer(i);
}

function renderTypDialog(i) {
  for (let j = 0; j < pokemonDetail[i].types.length; j++) {
    document.getElementById(`idDialog${i}`).innerHTML += getTemplatesPokedexTyp(
      i,
      j
    );
  }
}

function renderAbilities(i) {
  for (let j = 0; j < pokemonDetail[i].abilities.length; j++) {
    document.getElementById("abilitiesContainer").innerHTML +=
      getTemplatesAbilities(i, j);
  }
}

function setInformationContainer(i) {
  document.getElementById("pokemonDetailContainer").innerHTML =
    getTemplatesInfomation(i);
  renderAbilities(i);
}

function setStatsContainer(i) {
  document.getElementById("pokemonDetailContainer").innerHTML = "";

  for (let j = 0; j < pokemonDetail[i].stats.length; j++) {
    document.getElementById("pokemonDetailContainer").innerHTML +=
      getTemplatesStats(i, j);
  }
}

function closeDialog() {
  dialogRef.close();
  showBody();
  dialogRef.classList.remove("opened");
}

function hiddenBody() {
  document.body.style.overflow = "hidden";
}

function showBody() {
  document.body.style.overflow = "";
}

function changeToPreviousPokemon(i) {
  if (i > 0) {
    dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(i - 1);
    renderTypDialog(i - 1);
    renderDialog(i - 1);
  } else {
    closeDialog();
  }
}

async function changeToNextPokemon(i) {
  document.getElementById(`nextBtn${i}`).disabled = true;

  if (i < pokemon.results.length - 1) {
    await renderNextPokemonDialog(i);
  } else {
    closeDialog();
    window.scrollTo(0, document.body.scrollHeight);
  }
}

async function renderNextPokemonDialog(i) {
  dialogPokemonContentRef.innerHTML = getTemplatesDialogContent(i + 1);
  renderTypDialog(i + 1);
  renderDialog(i + 1);
}

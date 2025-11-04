const dialogRef = document.getElementById("dialog");

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
  document.getElementById("dialogPokemonContent").innerHTML =
    getTemplatesDialogPokedexContent(i);
  renderPokemonTypDialog(i);
}

function renderPokemonTypDialog(i) {
  for (let j = 0; j < pokemonDetail[i].types.length; j++) {
    document.getElementById(`idDialog${i}`).innerHTML += getTemplatesPokedexTyp(
      i,
      j
    );
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

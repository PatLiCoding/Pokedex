function getTemplatesPokedexContent(i) {
  return /*HTML*/ `
        <div class="pokemonContainer" onclick="openDialog(${i})">
          <div class="pokemonCardHeadline">
            <p>#${i + 1}</p>
            <h2>${
              pokemonDetail[i].name.charAt(0).toUpperCase() +
              pokemonDetail[i].name.slice(1).toLowerCase()
            }</h2>
          </div>
          <div class="pokemonImgBox bg${
            pokemonDetail[i].types[0].type.name.charAt(0).toUpperCase() +
            pokemonDetail[i].types[0].type.name.slice(1).toLowerCase()
          }"">
            <img class="pokemonImage" src="${
              pokemonDetail[i].sprites.front_default
            }">
          </div>
          <div id="id${i}" class="typBox">
          </div>
        </div>`;
}

function getTemplatesPokedexTyp(i, j) {
  return /*HTML*/ `
    <p class="bgBorder bg${
      pokemonDetail[i].types[j].type.name.charAt(0).toUpperCase() +
      pokemonDetail[i].types[j].type.name.slice(1).toLowerCase()
    }"> ${
    pokemonDetail[i].types[j].type.name.charAt(0).toUpperCase() +
    pokemonDetail[i].types[j].type.name.slice(1).toLowerCase()
  }</p>`;
}

function getTemplatesDialogPokedexContent(i) {
  return /*HTML*/ `
        <div class="dialogPokemonContent">
          <div class="pokemonCardHeadline">
            <p>#${i + 1}</p>
            <h2>${
              pokemonDetail[i].name.charAt(0).toUpperCase() +
              pokemonDetail[i].name.slice(1).toLowerCase()
            }</h2>
          </div>
          <div class="pokemonImgBox bg${
            pokemonDetail[i].types[0].type.name.charAt(0).toUpperCase() +
            pokemonDetail[i].types[0].type.name.slice(1).toLowerCase()
          }"">
            <img class="pokemonImageDialog" src="${
              pokemonDetail[i].sprites.front_default
            }">
          </div>
          <div id="idDialog${i}" class="typBox">
          </div>
        </div>`;
}

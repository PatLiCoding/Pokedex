function getTemplatesPokedexContent(i) {
  return /*HTML*/ `
        <div class="pokemonContainer">
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

function getTemplatesPokedexTyp(j, i) {
  return /*HTML*/ `
    <p class="bgBorder bg${
      pokemonDetail[j].types[i].type.name.charAt(0).toUpperCase() +
      pokemonDetail[j].types[i].type.name.slice(1).toLowerCase()
    }"> ${
    pokemonDetail[j].types[i].type.name.charAt(0).toUpperCase() +
    pokemonDetail[j].types[i].type.name.slice(1).toLowerCase()
  }</p>`;
}

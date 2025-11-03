function getTemplatesPokedexContent(i) {
  return /*HTML*/ `
        <div class="pokemonContainer">
          <div class="headline">
            <p>#${i + 1}</p>
            <h2>${
              responseJsonPokemonDetail[i].name.charAt(0).toUpperCase() +
              responseJsonPokemonDetail[i].name.slice(1).toLowerCase()
            }</h2>
          </div>
          <div class="pokemonImgBox">
            <img class="pokemonImage" src="${
              responseJsonPokemonDetail[i].sprites.front_default
            }">
          </div>
          <div id="id${i}" class="typBox">
          </div>
        </div>`;
}

function getTemplatesPokedexTyp(j, i) {
  return /*HTML*/ `
    <p> ${
      responseJsonPokemonDetail[j].types[i].type.name.charAt(0).toUpperCase() +
      responseJsonPokemonDetail[j].types[i].type.name.slice(1).toLowerCase()
    }</p>`;
}

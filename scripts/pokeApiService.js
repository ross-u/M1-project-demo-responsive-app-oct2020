"use strict";

function getPokemons() {
  const section = document.querySelector(".pokemon-list");

  for (let i = 0; i < 21; i++) {
    // Every pokemon has a distinct id number,
    // which we can use when making the request to the API.
    // We use that number in the Request URL to get the particular pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
      .then((response) => {
        // We have to convert the Response into an object
        // because the data coming in the response.body is encoded as text

        return response.json(); // response.json() is an asynchronous operation
      })
      .then((data) => {
        const article = document.createElement("article");
        article.innerHTML = `
          <img src="${data.sprites.front_default}" alt="${data.name}"/>
          <h3>${data.name}</h3>
        `;

        section.appendChild(article);
      })
      .catch((err) => {});
  }
}

getPokemons();

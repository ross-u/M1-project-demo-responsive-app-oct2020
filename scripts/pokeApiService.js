"use strict";
<<<<<<< HEAD

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

        return response.json();
        // response.json() is an asynchronous operation
        // and it returns a Promise
      })
      .then((data) => {
        // we chain the second then, to help us manage the second promise

        // Each article will contain an h3 with the pokemon name and the image
        const article = document.createElement("article");
        article.innerHTML = `
          <img src="${data.sprites.front_default}" alt="${data.name}"/>
          <h3>${data.name}</h3>
        `;

        // we add the element to the section.pokemon-list
        section.appendChild(article);
      })
      .catch((err) => {});
  }
}

getPokemons();
=======
>>>>>>> m1-prep-oct2020

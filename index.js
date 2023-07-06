const APIBASE = 'https://www.anapioficeandfire.com/api';

const endpointsEntry = document.getElementById('endpoints-entrypoint');
const booksEntrypoint = document.getElementById('books-entrypoint');
const houseEntrypoint = document.getElementById('houses-entrypoint');
const charactersEntrypoint = document.getElementById('characters-entrypoint');

async function loadEndpoints() {
  return await fetch(APIBASE)
    .then((res) => res.json())
    .then((json) => {
      const lista = Object.keys(json);
      lista.forEach((l) => {
        let itemName = l.slice(0, 1).toUpperCase() + l.slice(1);
        const liItem = document.createElement('li');
        liItem.innerHTML = `<span>${itemName}: <a target="_new" href="${json[l]}">${json[l]}</a></span>`;
        endpointsEntry.appendChild(liItem);
      });
    });
}

async function loadBooks() {
  const URL = APIBASE + '/books';

  return await fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      json.forEach((l) => {
        let ID_URL = l.url.replace(URL, '');
        const liItem = document.createElement('li');
        liItem.innerHTML = `<span><a target="_new" href="${URL + ID_URL}">${
          l.name
        }</a></span>`;
        booksEntrypoint.appendChild(liItem);
      });
    });
}

loadEndpoints();
loadBooks();

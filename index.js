const APIBASE = 'https://www.anapioficeandfire.com/api'

const endpointsEntry = document.getElementById('endpoints-entrypoint')
const booksEntrypoint = document.getElementById('books-entrypoint')

async function loadEndpoints () {
  return await fetch(APIBASE)
    .then(res => res.json())
    .then(json => {
      const lista = Object.keys(json)
      lista.forEach(l => {
        let itemName = l.slice(0, 1).toUpperCase() + l.slice(1)
        const liItem = document.createElement('li')
        liItem.innerHTML = `<span>${itemName}: <a target="_new" href="${json[l]}">${json[l]}</a></span>`
        endpointsEntry.appendChild(liItem)
      })
    })
}

async function loadBooks () {
  return await fetch(APIBASE + '/books')
    .then(res => res.json())
    .then(json => {
      json.forEach(l => {
        const liItem = document.createElement('li')
        liItem.innerHTML = `<a target="_blank" href="${l.url}" >${l.name}</a>` //Alterei de o target para "_blank", assim abre em outra página.
        booksEntrypoint.appendChild(liItem)
        console.log(liItem);
      })
      
    })
}




loadEndpoints()
loadBooks()

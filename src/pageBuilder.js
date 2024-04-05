// pageBuilder.js is a module to help us create new HTML elements and append them to the DOM
// To use it, create a new .js file for your page (i.e, 'home.js')
// then import this module and call the functions below inside a single function as needed

const page = document.getElementById('content');

function newHeader(string) {
  page.innerHTML += `<h1>${string}</h1>`;
}

function newParagraph(string) {
  page.innerHTML += `<p>${string}</p>`;
}

//

export {
  newHeader,
  newParagraph
};


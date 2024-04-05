// index.js will handle our tab management

import './style.css';
import { buildHome } from './home.js';
import { buildMenu } from './menu.js';
import { buildContactUs } from './contact.js';

// tab buttons set-up

const homeButton = document.getElementById('home_button');
const menuButton = document.getElementById('menu_button');
const contactButton = document.getElementById('contact_button');

homeButton.addEventListener('click', function() {
  displayPage(buildHome);
});

menuButton.addEventListener('click', function() {
  displayPage(buildMenu);
});

contactButton.addEventListener('click', function() {
  displayPage(buildContactUs);
});


// tab-switching logic

function displayPage(pageBuilder) {
  clearPage();
  pageBuilder();
}

function clearPage() {
  const display = document.getElementById('content');

  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
}

// an initial call to display the contents of our main page

buildHome();

export {
  displayPage
}
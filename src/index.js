// index.js will handle tab switching logic and visual displays

import { buildHome } from './home.js';
import { buildMenu } from './menu.js';

// buttons set-up

const mainButton = document.getElementById('main_button');
const menuButton = document.getElementById('menu_button');

mainButton.addEventListener('click', function() {
  displayPage(buildHome);
});

menuButton.addEventListener('click', function() {
  displayPage(buildMenu);
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
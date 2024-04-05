import { newHeader, newParagraph } from './pageBuilder.js';
import { displayPage } from './index.js';

function buildContactUs() {
  newHeader('Contact Us');
  newParagraph('You can find us at @cool_restaurant');
}

const contactButton = document.getElementById('contact_button');

contactButton.addEventListener('click', function() {
  displayPage(buildContactUs);
});

//

export {
  buildContactUs
}
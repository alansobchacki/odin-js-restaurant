import { newHeader, newParagraph } from './pageBuilder.js';
import { displayPage } from './index.js';

function buildContactUs() {
  newHeader('Contact Us');
  newParagraph('For inquiries or reservations, please do not reach out to us.');
  newParagraph('If you must insist, you can find us at:');
  newParagraph('________________');
}

const contactButton = document.getElementById('contact_button');

contactButton.addEventListener('click', function() {
  displayPage(buildContactUs);
});

//

export {
  buildContactUs
}
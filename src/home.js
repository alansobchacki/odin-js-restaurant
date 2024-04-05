import { newHeader, newParagraph } from './pageBuilder.js';

function buildHome() {
  newHeader('Welcome To Our Restaurant!');
  newParagraph('Our food is good!');
}

//

export {
  buildHome
}
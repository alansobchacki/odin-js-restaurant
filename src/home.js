import { newHeader, newParagraph } from './pageBuilder.js';

function buildHome() {
  newHeader('Welcome to Bistro Minimalisté!');
  newParagraph('Whether you crave our signature "Deconstructed Delight" salad ' +
              'or our whimsically named "Less is More" pasta, each dish ' +
              'is crafted to evoke confusion and sometimes frustration.');
  newParagraph('We promise not to overwhelm you.');
}

//

export {
  buildHome
}
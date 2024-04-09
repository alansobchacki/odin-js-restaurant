import { newHeader, newParagraph } from './pageBuilder.js';

function buildMenu() {
  newHeader('Our Menu:');
  newParagraph('— Invisible Indulgence');
  newParagraph('— Deconstructed Delight');
  newParagraph('— Less Is More Pasta');
  newParagraph('— Bare Bones Burger');
  newParagraph('— Void');
}

//

export {
  buildMenu
}
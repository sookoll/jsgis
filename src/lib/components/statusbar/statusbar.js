/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */

import './statusbar.css!';

class Statusbar {
  constructor (jsgis) {
    this.jsgis = jsgis;
    if (typeof jsgis.getUi().getStatusBarContainer !== 'function') {
      // theme do not support statusbar
      return false;
    }
    
    this.el = jsgis.getUi().getStatusBarContainer();

    const templateNode = document.createElement('div');
    templateNode.className = 'statusbar-slot';
    let cln;
    Array.from(Array(6)).forEach((item, i) => {
      cln = templateNode.cloneNode(true);
      this.el.appendChild(cln);
    })
  }
  init () {
    console.log('init statusbar');

  }
  getEl () {
    return this.el
  }
  getElSlot (n) {
    const slots = this.el.querySelectorAll('.statusbar-slot');
    if (slots[n-1]) {
      return slots[n-1];
    }
    return null;
  }
}

export default Statusbar;

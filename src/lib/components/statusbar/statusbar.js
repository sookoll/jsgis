/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */
import './statusbar.css!';

class Statusbar {
  constructor () {
    this.el = document.createElement('footer');
    const templateNode = document.createElement('div');
    templateNode.className = 'statusbar-slot';
    let cln;
    Array.from(Array(6)).forEach((item, i) => {
      cln = templateNode.cloneNode(true);
      this.el.appendChild(cln);
    })
  }
  init (jsgis) {
    console.log('init statusbar');
    jsgis.getEl().appendChild(this.el);
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

/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */
import Ui from 'jsgis/lib/ui';
import './statusbar.css!';
import template from './statusbar.hbs!';
import button from './toggle_button.hbs!';

class Statusbar {
  constructor () {
    //this.el = document.createElement('footer');
    const ui = new Ui();
    this.el = ui.$(template());
    this.toggleBtn = ui.$(button());

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
    jsgis.getEl().querySelector('main').appendChild(this.el);
    jsgis.getEl().querySelector('main').appendChild(this.toggleBtn);
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

/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */
import Ui from 'jsgis/lib/ui';
import Map from 'jsgis/lib/map';
import * as Components from 'jsgis/lib/components';

class JsGIS {
  constructor () {
    this.components = {};
    this.setEl(document.querySelector('#container'));
  }
  init () {
    this.ui = new Ui();
    this.map = new Map();
    this.map.init(this);
    this.initComponents();
  }
  getMap () {
    return this.map
  }
  getUi () {
    return this.ui
  }
  getEl () {
    return this.el
  }
  setEl (el) {
    this.el = el;
  }
  initComponents () {
    Object.keys(Components).forEach((name) => {
      this.components[name] = new Components[name]();
    });
    Object.keys(this.components).forEach((name) => {
      if (typeof this.components[name].init === 'function') {
        this.components[name].init(this);
      }
    })
  }
  getComponent (name) {
    if (this.components[name]) {
      return this.components[name]
    }
    return null
  }
}

export default JsGIS;

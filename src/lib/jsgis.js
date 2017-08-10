/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */

import config from 'jsgis/config/jsgis.yml!text';
import YML from 'yamljs';
import Ui from 'jsgis/lib/ui';
import Map from 'jsgis/lib/map';
import * as Components from 'jsgis/lib/components';

class JsGIS {
  constructor () {
    this.components = {};
    this.config = YML.parse(config);
    this.setEl(document.querySelector('.jsgis-layout'));
  }
  init () {
    this.ui = Ui;
    this.map = new Map();
    this.map.init(this);
    this.initComponents();
  }
  getConfig () {
    return this.config
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

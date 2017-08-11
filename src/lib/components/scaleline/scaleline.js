/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */

import ol from 'openlayers';
import './scaleline.css!';

class Scaleline {
  constructor(jsgis) {
    this.jsgis = jsgis;
    this.el = document.createElement('div');
    this.el.id = 'scaleline';
  }
  init() {
    console.log('init zoombar')
    const statusbar = this.jsgis.getComponent('Statusbar');
    if (statusbar) {
      statusbar.getElSlot(6).appendChild(this.el);
    }

    const zoomslider = new ol.control.ScaleLine({
      target: statusbar ? this.el : null
    });
    this.jsgis.getMap().addControl(zoomslider);
  }
}

export default Scaleline;

/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */

import ol from 'openlayers';
import './scaleline.css!';

class Scaleline {
  constructor() {
    this.el = document.createElement('div');
    this.el.id = 'scaleline';
  }
  init(jsgis) {
    console.log('init zoombar')
    jsgis.getComponent('Statusbar').getElSlot(6).appendChild(this.el);

    const zoomslider = new ol.control.ScaleLine({
      target: this.el
    });
    jsgis.getMap().addControl(zoomslider);
  }
}

export default Scaleline;

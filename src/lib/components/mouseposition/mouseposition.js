/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */

import ol from 'openlayers';
import './mouseposition.css!';

class MousePosition {
  constructor() {
    this.el = document.createElement('div');
    this.el.id = 'mouseposition';
  }
  init(jsgis) {
    console.log('init mousepos')
    jsgis.getComponent('Statusbar').getElSlot(1).appendChild(this.el);

    const mousepos = new ol.control.MousePosition({
      target: this.el,
      coordinateFormat: ol.coordinate.createStringXY(5)
    });
    jsgis.getMap().addControl(mousepos);
  }
}

export default MousePosition;

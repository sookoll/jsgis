/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */

import ol from 'openlayers';
import './mouseposition.css!';

class MousePosition {
  constructor(jsgis) {
    this.jsgis = jsgis;
    this.el = document.createElement('div');
    this.el.id = 'mouseposition';
  }
  init() {
    console.log('init mousepos')
    const statusbar = this.jsgis.getComponent('Statusbar');
    if (statusbar) {
      statusbar.getElSlot(1).appendChild(this.el);
    }

    const mousepos = new ol.control.MousePosition({
      target: statusbar ? this.el : null,
      coordinateFormat: ol.coordinate.createStringXY(5)
    });
    this.jsgis.getMap().addControl(mousepos);
  }
}

export default MousePosition;

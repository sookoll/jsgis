/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */

import Map from 'jsgis/lib/map';
import * as Components from 'jsgis/lib/components';

class JsGIS {
  constructor () {
    console.log('jsgis init')
    console.log(components)
  }
  init () {
    console.log('jsgis loaded');
    const container = document.querySelector('#container');
    const map = new Map(container);
    map.init();

    this.map = map;
  }
  getMap () {
    return this.map
  }
}

export default JsGIS;

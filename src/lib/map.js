/**
 * map - ES6 class
 *
 * @author Mihkel Oviir
 */

import ol from 'openlayers';
import 'openlayers/css/ol.css!';

class Map {
  constructor (container) {
    this.setContainer(container)
  }
  setContainer (container) {
    this.container = container
  }
  getContainer () {
    return this.container
  }
  setMap (map) {
    this.map = map
  }
  getMap () {
    return this.map
  }
  init () {
    const el = document.createElement('div');
    this.getContainer().appendChild(el);
    const map = new ol.Map({
      target: el,
      layers: [],
      controls: [],
      view: new ol.View({
        projection: 'EPSG:4326',
        center: [0, 0],
        zoom: 0
      })
    });
    this.setMap(map)
  }

}

export default Map;

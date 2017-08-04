/**
 * map - ES6 class
 *
 * @author Mihkel Oviir
 */

import ol from 'openlayers';
import 'openlayers/css/ol.css!';
import './map.css!';

class Map {
  constructor () {
    this.el = document.createElement('div');
    this.el.id = 'map';
  }
  setMap (map) {
    this.map = map
  }
  getMap () {
    return this.map
  }
  init (jsgis) {
    jsgis.getEl().appendChild(this.el);
    const map = new ol.Map({
      target: this.el,
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
  addControl(control) {
    this.map.addControl(control);
  }
  getMapProjection() {
    return this.map.getView().getProjection()
  }
  setMapView(view) {
    this.map.setView(view)
  }
}

export default Map;

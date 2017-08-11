/**
 * jsgis - ES6 class
 *
 * @author Mihkel Oviir
 */

import proj4 from 'proj4';
import ol from 'openlayers';
import './viewprojection.css!';
import template from './template.hbs!';

class ViewProjection {
  constructor(jsgis) {
    this.jsgis = jsgis;
    this.el = document.createElement('div');
    this.el.id = 'viewprojection';
    ol.proj.setProj4(proj4);
  }
  init() {
    console.log('init epsg');
    const epsg = this.jsgis.getMap().getMapProjection().getCode().split(':');
    this.el.innerHTML = template({epsg: epsg[1]});
    
    this.jsgis.getComponent('Statusbar').getElSlot(5).appendChild(this.el);
    const btn = this.el.querySelector('button');
    const inp = this.el.querySelector('input');

    /**
     * Handle click event.
     * @param {Event} e The event.
     */
    btn.onclick = (e) => {
      this.searchEPSG(inp.value);
      e.preventDefault();
    };
  }

  searchEPSG (code) {
    fetch('https://epsg.io/?format=json&q=' + code).then((response) => {
      return response.json();
    }).then((json) => {
      const results = json['results'];
      if (results && results.length > 0) {
        for (let i = 0, ii = results.length; i < ii; i++) {
          let result = results[i];
          if (result) {
            let code = result['code'], name = result['name'],
                proj4def = result['proj4'], bbox = result['bbox'];
            if (code && code.length > 0 && proj4def && proj4def.length > 0 &&
                bbox && bbox.length == 4) {
              this.setProjection(code, name, proj4def, bbox);
              return;
            }
          }
        }
      }
      this.setProjection(null, null, null, null);
    });
  }

  setProjection (code, name, proj4def, bbox) {
    if (code === null || name === null || proj4def === null || bbox === null) {
      /*resultSpan.innerHTML = 'Nothing usable found, using EPSG:3857...';
      map.setView(new ol.View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 1
      }));*/
      return;
    }

    //resultSpan.innerHTML = '(' + code + ') ' + name;

    const newProjCode = 'EPSG:' + code;
    proj4.defs(newProjCode, proj4def);
    const newProj = ol.proj.get(newProjCode);
    console.log(newProj, newProjCode, proj4)
    const fromLonLat = ol.proj.getTransform('EPSG:4326', newProj);

    // very approximate calculation of projection extent
    const extent = ol.extent.applyTransform(
        [bbox[1], bbox[2], bbox[3], bbox[0]], fromLonLat);
    newProj.setExtent(extent);
    const newView = new ol.View({
      projection: newProj
    });
    this.jsgis.getMap().setMapView(newView);
    newView.fit(extent);
  }
}

export default ViewProjection;

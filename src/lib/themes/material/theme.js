/**
 * map - ES6 class
 *
 * @author Mihkel Oviir
 */

import './material.css!';
import Ui from 'jsgis/lib/ui';
import template from './main.hbs!';

class MaterialTheme extends Ui {
  constructor () {
    super();
    this.el.insertBefore(this.$(template()), this.el.childNodes[0]);
  }

  setMapContainer (el) {
    this.el.querySelector('.map-container').appendChild(el)
  }

  getMapContainer () {
    return this.el.querySelector('.map-container')
  }

  getStatusBarContainer () {
    return this.el.querySelector('footer')
  }

}

export default MaterialTheme;

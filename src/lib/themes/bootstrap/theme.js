/**
 * map - ES6 class
 *
 * @author Mihkel Oviir
 */

import Ui from 'jsgis/lib/ui';
import template from './main.hbs!';

class BootstrapTheme extends Ui {
  constructor () {
    super();
    this.el.insertBefore(this.$(template()), this.el.childNodes[0]);
  }

  setMapContainer (el) {
    this.el.querySelector('main').appendChild(el);
  }

}

export default BootstrapTheme;

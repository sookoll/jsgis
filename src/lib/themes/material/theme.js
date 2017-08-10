/**
 * map - ES6 class
 *
 * @author Mihkel Oviir
 */

import Ui from 'jsgis/lib/ui';
import template from './main.hbs!';

class Theme extends Ui {
  constructor () {
    super();
    const el = document.body;
    el.insertBefore(this.$(template()), el.childNodes[0]);
  }

}

export default Theme;

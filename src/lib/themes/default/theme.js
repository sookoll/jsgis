/**
 * map - ES6 class
 *
 * @author Mihkel Oviir
 */

import Ui from 'jsgis/lib/ui';

class DefaultTheme extends Ui {
  constructor () {
    super();
    this.el.insertBefore(this.$('<div></div>'), this.el.childNodes[0]);
  }

}

export default DefaultTheme;

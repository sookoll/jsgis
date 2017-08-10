/**
 * map - ES6 class
 *
 * @author Mihkel Oviir
 */


class Ui {
  constructor () {

  }

  init () {

  }

  $ (string) {
    const template = document.createElement('template');
    template.innerHTML = string;
    return template.content.firstChild;
  }

}

export default Ui;

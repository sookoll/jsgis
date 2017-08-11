/**
 * map - ES6 class
 *
 * @author Mihkel Oviir
 */


class Ui {
  constructor () {
    this.el = document.body;
  }

  init () {

  }

  $ (string) {
    const template = document.createElement('template');
    template.innerHTML = string;
    return template.content.firstChild;
  }

  setMapContainer (el) {
    this.el.querySelector('div').appendChild(el)
  }

  getMapContainer () {
    return this.el.querySelector('div')
  }

}

export default Ui;

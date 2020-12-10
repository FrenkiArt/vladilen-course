/**
 * Main class DomListener
 * @params {int} test - some number
 * @return {int} sum of test and 10
 */
export class DomListener {
  /**
   * Непонятно, вроде Владилен пытается
   * заранее получить доступ к чему-то,
   * что будет передаваться в этот Класс
   * @param {*} $root
   * @param {array} listeners - Массив слушателей
   */
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  /**
   * Добавление слушателей
   */
  initDOMListeners() {
    console.log(this.listeners);
  }

  /**
   * Удаление слушателей
   */
  removeDOMListeners() {}
}

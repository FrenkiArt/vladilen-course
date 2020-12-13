import {DomListener} from './DomListener';

/**
 * class ExcelComponent
 * @params {int} test - some number
 * @return {int} sum of test and 10
 */
export class ExcelComponent extends DomListener {
  /**
   * Непонятно опка
   * @param {*} $root Передаётся $root
   * @param {object} options Передаются опции в объекте
   */
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  /**
   * will return template
   * Возвращает шаблон компонента
   * @params {int} test
   * @return {string}
   */
  toHTML() {
    return '';
  }

  /**
   * Вызывает подключение слушателей
   */
  init() {
    this.initDOMListeners();
  }

  /**
   * Вызывает удаление слушателей
   */
  destroy() {
    this.removeDOMListeners();
  }
}

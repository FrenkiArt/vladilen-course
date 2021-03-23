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
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.prepare();
  }

  /**
   * Настраиваем наш компонент до init
   */
  prepare() {}

  /**
   * Уведомляем слушателей про события event
   * @param {event} event Евент
   * @param  {...any} args Вектор аргументов
   */
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  /**
   * Подписываемся на событие event
   * @param {event} event Событие
   * @param {function} fn Функция
   */
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
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
   * Инициализируем компонент
   * Добавляем дом слушателей
   */
  init() {
    this.initDOMListeners();
  }

  /**
   * Вызывает удаление слушателей
   * Удаляем компонент
   * Чистим слушателей
   */
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}

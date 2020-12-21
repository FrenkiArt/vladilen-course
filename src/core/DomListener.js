import {capitalize} from './utils';

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

    /**
     * Для всех компонентов пробегаемся по массиву с их слушателями.
     * Есть ли эти слушатели вообще.
     */
    this.listeners.forEach((listener) => {
      console.log(listener);

      const method = getMethodName(listener);

      if (!this[method]) {
        const textForError1 = `Method ${method} is not implemented`;
        const textForError2 = ` in ${this.name || ''} component`;
        const textForErrorFinish = textForError1 + textForError2;
        throw new Error(textForErrorFinish);
      }

      // тоже самое что addEventListener
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  /**
   * Удаление слушателей
   * @param {*} listener 222
   * @param {*} callBackName 222
   */
  removeDOMListeners() {
    // аналог removeEventListener

    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);

      this.$root.off(listener, this[method]);
    });
  }
}

/**
 * Приватная функция для этого модуля
 * input => onInput
 * @param {*} eventName Делаем из обычного евента, евент в стиле JQuery
 * @return {string} Возвращает строку on + Имя события
 */
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}

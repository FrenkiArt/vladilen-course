/**
 * Класс Эмиттер (Обсервер)
 */
export class Emitter {
  /**
   * Констуктор этого класса
   */
  constructor() {
    this.listeners = {};
  }

  /**
   * dispath, fire, trigger
   * Уведомляем слушателей если они есть
   * @param {event} event Само событие
   * @param  {...any} args Аргументы
   * @return {*}
   */
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });

    return true;
  }

  /**
   * on, listen
   * Подписываемся на уведомления или добавляем нового слушателя
   * @param {event} event Само событие
   * @param {function} fn функция
   * @return {*}
   */
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);

    return () => {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== fn
      );
    };
  }
}

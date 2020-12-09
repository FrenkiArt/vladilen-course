/**
 * Какой-то класс Дом, который
 * будет нам служить домом для нашего
 * аналога jQuery
 */
class Dom {
  /**
   * @param {selector} selector Селектор
   */
  constructor(selector) {
    // #app
    if (typeof selector === 'string') {
      this.$el = document.querySelector(selector);
    } else {
      this.$el = selector;
    }
  }

  /**
   *
   * @param {*} html Передаётся какой-то html
   * @return {this} this.$el с каким то html кодом
   */
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }

    return this.$el.outerHTML.trim();
  }

  /**
   * Будущий аналог on() у JQuery
   */
  on() {}

  /**
   * @param {this.html} этот метод удаляет всё внутри элемента this
   * @return {this} возвращает this
   */
  clear() {
    this.html('');
    return this;
  }

  /**
   * Передаётся какая-нибудь Нода, если у this есть родительский
   * метод append, то используется он. А если нет, то используется
   * стандартный .appendChild()
   * @param {*} node элемент, который будет добавлен в this.$el
   * @return {this} Возвращает this
   */
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }

    return this;
  }
}

$('div').html('<h1>TEEESSTTT</h1>').clear();

/**
 * функция на экспорт, которая возвращает new Dom()
 * @param {selector} selector Селектор
 * @return {newDom}
 */
export function $(selector) {
  return new Dom(selector);
}

/**
 * $.create Метод создающий какой-нибудь элемент
 * @param {tagName} tagName Этим параметром передаётся
 * имя тега.
 * @param {classes} classes Этим параметром передаётся
 * класс для нового элемента или классы, через
 * запятую
 * @return {string} el Возвращает созданный элемент
 */

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return $(el);
};

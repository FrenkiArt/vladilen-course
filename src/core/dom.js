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
   * text() Функция для добавления текста
   * @param {string} text Передаваемый текст
   * @return {this} this или this.textContent
   * в зависимости это геттер или сеттер
   */
  text(text) {
    if (typeof text === 'string') {
      this.$el.textContent = text;
      return this;
    }

    if (this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value.trim();
    }

    return this.$el.textContent.trim();
  }

  /**
   * Будущий аналог on() у JQuery
   * @param {*} eventType Это Эвент событие
   * @param {*} callback Это сама функция которая выполняется
   */
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  /**
   * Будущий аналог off() у JQuery
   * @param {*} eventType Это Эвент событие
   * @param {*} callback Это сама функция которая выполняется
   */
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  /**
   * sdf
   * @param {*} selector
   * @return {*} sdf
   */
  find(selector) {
    return $(this.$el.querySelector(selector));
  }

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

  /**
   * Геттер для получения data аттрибута
   */
  get data() {
    return this.$el.dataset;
  }

  /**
   *
   * @param {string} selector Передаётся селектор
   * @return {*} элемент который найден выше по дереву
   * по селектору
   */
  closest(selector) {
    return $(this.$el.closest(selector));
  }

  /**
   * Метод для получения координат элемента
   * @return {string} возвращает координаты элемента
   */
  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  /**
   * @param {string} selector Передаётся селектор
   * @return {*} Возвращается псевдомассив найденных элементов по селектору
   */
  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  /**
   *
   * @param {object} styles - Это объект конфигурации, в котором через его
   * свойства передаются стили для элемента
   */
  css(styles = {}) {
    /* for (const key in styles) {
      if (Object.hasOwnProperty.call(styles, key)) {
        const element = styles[key];
        console.log(element);
      }
    } */

    Object.keys(styles).forEach((key) => {
      /* console.log(key);
      console.log(styles[key]); */
      this.$el.style[key] = styles[key];
    });
  }

  /**
   * sdf
   * @param {*} parse sdf
   * @return {*} sdf
   */
  id(parse) {
    if (parse) {
      const parsed = this.id().split(':');
      return {
        col: parsed[0],
        row: +parsed[1], // '+' Приводит к int
      };
    }
    return this.data.id;
  }

  /**
   * Делает фокус на элементе
   * @return {this}
   */
  focus() {
    this.$el.focus();
    return this;
  }

  /**
   * sdf
   * @param {*} className
   * @return {this}
   */
  addClass(className) {
    this.$el.classList.add(className);
    return this;
  }

  /**
   * sdf
   * @param {*} className
   * @return {this}
   */
  removeClass(className) {
    this.$el.classList.remove(className);
    return this;
  }
}

// $('div').html('<h1>TEEESSTTT</h1>').clear();

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

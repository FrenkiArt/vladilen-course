/**
 * Какой-то класс Дом, который
 * будет нам служить домом для нашего
 * аналога jQuery
 */
class Dom {
  /**
   *
   */
  constructor() {}
}

/**
 * функция на экспорт, которая возвращает new Dom()
 * @return {newDom}
 */
export function $() {
  return new Dom();
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

  return el;
};

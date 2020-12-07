import {$} from '../../core/dom.js';

/**
 * Class Excel
 * @params {int} test
 * @return {int} test
 */
export class Excel {
  /**
   *
   * @param {*} selector
   * @param {*} options
   */
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  /**
   * возвращает корневой элемент
   * @return {$root} корневой элемент
   */
  getRoot() {
    const $root = $.create('div', 'excel');

    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      // const $el = document.createElement('div');
      // $el.classList.add(Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });

    return $root;
  }

  /**
   *
   */
  render() {
    this.$el.append(this.getRoot());
  }
}

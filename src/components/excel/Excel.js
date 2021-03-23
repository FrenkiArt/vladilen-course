import {$} from '../../core/dom.js';
import {Emitter} from '../../core/Emitter.js';

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
    this.$el = $(selector);
    this.components = options.components || [];
    this.emitter = new Emitter();
  }

  /**
   * возвращает корневой элемент
   * @return {$root} корневой элемент
   */
  getRoot() {
    const $root = $.create('div', 'excel');

    const componentOptions = {
      emitter: this.emitter,
    };

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      // const $el = document.createElement('div');
      // $el.classList.add(Component.className);
      const component = new Component($el, componentOptions);
      // DEBUG
      /* if (component.name) {
        window['c' + component.name] = component;
      } */
      // $el.innerHTML = component.toHTML();

      $el.html(component.toHTML());
      $root.append($el);

      return component;
    });

    return $root;
  }

  /**
   *
   */
  render() {
    this.$el.append(this.getRoot());

    this.components.forEach((component) => {
      component.init();
    });
  }

  /**
   * Destroy()
   */
  destroy() {
    this.components.forEach((component) => component.destroy());
  }
}

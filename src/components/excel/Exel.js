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
    const $root = document.createElement('div');

    console.log(this.components);

    this.components.forEach((Component) => {
      const component = new Component();
      console.log(component.toHTML());
      $root.insertAdjacentHTML('beforeend', component.toHTML());
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

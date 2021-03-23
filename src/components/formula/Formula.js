import {$} from '../../core/dom.js';
import {ExcelComponent} from '../../core/ExcelComponent';
/**
 *
 */
export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  /**
   * Непонятно
   * @param {*} $root Передаётся $root
   * @param {*} options
   */
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown', 'click'],
      ...options,
    });
  }

  /**
   * @return {string} вызов родительского метода
   */
  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable="true" spellcheck="false">
      </div>
    `;
  }

  /**
   * Init();
   */
  init() {
    super.init();

    this.$formula = this.$root.find('#formula');

    this.$on('table:select', ($cell) => {
      this.$formula.text($cell.text());
    });

    this.$on('table:input', ($cell) => {
      this.$formula.text($cell.text());
    });
  }

  /**
   * Аналог on:input у JQuery
   * @param {event} event - Само событие
   */
  onInput(event) {
    console.log(this.$root);
    console.log('Formula:input', event.target.textContent.trim());

    this.$emit('formula:input', $(event.target).text());
  }

  /**
   * Аналог on:click у JQuery
   * @param {event} event - Само событие
   */
  onClick(event) {
    console.log('Formula: onClick', event);
  }

  /**
   * Когда нажали на клавиатуре что-то.
   * @param {event} event Евент
   */
  onKeydown(event) {
    const keys = ['Enter', 'tab', 'enter'];

    if (keys.includes(event.key)) {
      event.preventDefault();

      this.$emit('formula:done');
    }
  }
}

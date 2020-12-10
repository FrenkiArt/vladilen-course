import {ExcelComponent} from '../../core/ExcelComponent';
/**
 *
 */
export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  /**
   * Непонятно
   * @param {*} $root Передаётся $root
   */
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  /**
   * @return {string} вызов родительского метода
   */
  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable="true" spellcheck="false"></div>
    `;
  }

  /**
   * Аналог on:input у JQuery
   * @param {event} event - Само событие
   */
  onInput(event) {
    console.log('Formula: onInput', event);
  }
}

import {ExcelComponent} from '../../core/ExcelComponent';
/**
 *
 */
export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  /**
   * @return {string} вызов родительского метода
   */
  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable="true" spellcheck="false"></div>
    `;
  }
}

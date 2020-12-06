import {ExcelComponent} from '../../core/ExcelComponent.js';
/**
 *
 */
export class Header extends ExcelComponent {
  /**
   * @return {string} возвращает строку
   */
  toHTML() {
    return '<h1>Header</h1>';
  }
}

import {ExcelComponent} from '../../core/ExcelComponent';
/**
 *
 */
export class Table extends ExcelComponent {
  /**
   * @return {string} возвращает строку
   */
  toHTML() {
    return '<h1>Table</h1>';
  }
}

import {ExcelComponent} from '../../core/ExcelComponent.js';
/**
 *
 */
export class Header extends ExcelComponent {
  static className = 'excel__header';

  /**
   * sdf
   * @param {*} $root Передаётся $root
   * @param {*} options
   */
  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options,
    });
  }

  /**
   * @return {string} возвращает строку
   */
  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица" />

      <div>
        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>
    `;
  }
}

import {ExcelComponent} from '../../core/ExcelComponent';

/**
 *
 */
export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  /**
   * 3333
   * @param {*} $root 333
   * @param {*} options
   */
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options,
    });
  }

  /**
   * @return {string} возвращает строку
   */
  toHTML() {
    return `
    <div class="button">
      <i class="material-icons">format_align_left</i>
    </div>

    <div class="button">
      <i class="material-icons">format_align_center</i>
    </div>

    <div class="button">
      <i class="material-icons">format_align_right</i>
    </div>

    <div class="button">
      <i class="material-icons">format_bold</i>
    </div>

    <div class="button">
      <i class="material-icons">format_italic</i>
    </div>

    <div class="button">
      <i class="material-icons">format_underline</i>
    </div>
    `;
  }

  /**
   * 333
   * @param {*} event 333
   */
  onClick(event) {
    console.log(event.target);
  }
}

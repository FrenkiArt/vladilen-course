import {ExcelComponent} from '../../core/ExcelComponent';
import {shouldResize} from './table.functions';
import {resizeHandler} from './table.resize';
import {createTable} from './table.template';
import {TableSelection} from './TableSelection';

/**
 *
 */
export class Table extends ExcelComponent {
  static className = 'excel__table';

  /**
   * Конструктор для работы с элементами таблицы
   * @param {*} $root Корневой элемент
   * @param {*} options объект конфигурации
   */
  constructor($root, options) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  /**
   * @return {string} возвращает строку
   */
  toHTML() {
    return createTable();
  }

  /**
   * sdf
   */
  prepare() {
    console.log('prepare ');
    this.selection = new TableSelection();
  }

  /**
   * Событие клика
   */
  onClick() {
    console.log('click');
  }

  /**
   * sdf
   */
  init() {
    super.init();

    console.log('init');

    const $cell = this.$root.find('[data-id="A:1"]');
    this.selection.select($cell);
  }

  /**
   * Событие движения мышки
   * @param {event} event - Само событие
   */
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }

  /**
   * Событие движения мышкой
   */
  onMousemove() {
    console.log('mouseMove');
  }

  /**
   * Событие поднятия мышки
   */
  onMouseup() {
    console.log('mouseUp');
  }
}

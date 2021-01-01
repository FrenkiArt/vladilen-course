import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
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
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    });
  }

  /**
   * @return {string} возвращает строку
   */
  toHTML() {
    return createTable();
  }

  /**
   * Событие клика
   */
  onClick() {
    console.log('click');
  }

  /**
   * Событие движения мышки
   * @param {event} event - Само событие
   */
  onMousedown(event) {
    console.log('mouseDown', event.target);
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

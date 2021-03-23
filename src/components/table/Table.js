import {$} from '../../core/dom.js';
import {ExcelComponent} from '../../core/ExcelComponent';
import {isCell, matrix, shouldResize, nextSelector} from './table.functions';
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
      name: 'Header',
      listeners: ['mousedown', 'click', 'input', 'keydown'],
      ...options,
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
   * @param {*} event event
   */
  onClick(event) {
    console.log('click');
    this.$emit('table:select', $(event.target));
  }

  /**
   * sdf
   */
  init() {
    super.init();
    // console.log('init');

    this.selectCell(this.$root.find('[data-id="A:1"]'));

    this.$on('formula:input', (text) => {
      this.selection.current.text(text);
      console.log('Table from Formula', text);
    });

    this.$on('formula:done', () => {
      this.selection.current.focus();
    });
  }

  /**
   * Укороченный вариант, чтобы много не дублироваться
   * @param {string} $cell Ячейка
   */
  selectCell($cell) {
    this.selection.select($cell);
    this.$emit('table:select', $cell);
  }

  /**
   * Событие движения мышки
   * @param {event} event - Само событие
   */
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);

      if (event.shiftKey) {
        // group
        const $cells = matrix($target, this.selection.current).map((id) => {
          return this.$root.find(`[data-id="${id}"]`);
        });
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
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

  /**
   * Функция слушатель на нажатие клавишь
   * @param {event} event Событие нажания клавиши
   * @return {void}
   */
  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp',
    ];

    const {key} = event;

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();
      const id = this.selection.current.id(true);
      const $next = this.$root.find(nextSelector(key, id));
      this.selectCell($next);
    }
  }

  /**
   * Обработка Инпут в таблице
   * @param {event} event евент
   */
  onInput(event) {
    this.$emit('table:input', $(event.target));
  }
}

import {range} from '../../core/utils';

/**
 * Функция хелпер, проверяет есть ли у элемента
 * аттрибута data-resize
 * @param {event} event Событие клика или опускания мышки
 * @return {bool} bool
 */
export function shouldResize(event) {
  return event.target.dataset.resize;
}

/**
 * Эта функция хелпер, помогает понят был ли клик
 * по элементу ячейки в таблице
 * @param {event} event Событие клика или опускания мышки
 * @return {bool} bool
 */
export function isCell(event) {
  return event.target.dataset.type === 'cell';
}

/**
 * Эта функция получает на входе ячейку старта
 * и ячейку конца, высчитывает все ячейки которые
 * попадают в диапазон и возвращает массив с data-id
 * каждой ячейки, чтобы в дальнейшем можно было работать
 * с выделенными ячейками.
 * @param {*} $target - Вторая выделенная ячейка по шифту.
 * @param {*} $current -Текущая выделенная ячейка.
 *
 * Все ячейки между $current и $target будут выделены.
 * @return {Array} Возвращает массив из data-id выделенных
 * ячеек
 */
export function matrix($target, $current) {
  const target = $target.id(true);
  const current = $current.id(true);
  const cols = range(current.col, target.col);
  const rows = range(current.row, target.row);
  // console.log('cols', cols);
  // console.log('rows', rows);

  return cols.reduce((acc, col) => {
    rows.forEach((row) => {
      acc.push(`${col}:${row}`);
    });

    console.log(acc);

    return acc;
  }, []);
}

/**
 * Функция для нахождения следующей ячейки для выделения,
 * после нажатия клавишь стрелок, ентера или таба.
 * Так как я использую Буквы а не цифры для колонок, то их
 * предварительно надо превратить в цифры используя .charCodeAt(),
 * а после операция в конце обратно преобразовать в буквы используя
 * String.fromCharCode().
 * @param {string} key Какая клавиша была нажата
 * @param {object} id объект с 2мя свойствами col и row
 * @return {void} next selector
 */
export function nextSelector(key, {col, row}) {
  col = col.charCodeAt();
  const MIN_ROW_VALUE = 1;
  const MIN_COL_VALUE = 65;

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++;
      break;
    case 'Tab':
    case 'ArrowRight':
      col++;
      break;
    case 'ArrowLeft':
      if (col-- <= MIN_COL_VALUE) {
        col = MIN_COL_VALUE;
      } else {
        col = col--;
      }
      break;
    case 'ArrowUp':
      if (row-- <= MIN_ROW_VALUE) {
        row = MIN_ROW_VALUE;
      } else {
        row = row--;
      }
      break;
  }
  col = String.fromCharCode(col);
  return `[data-id="${col}:${row}"]`;
}

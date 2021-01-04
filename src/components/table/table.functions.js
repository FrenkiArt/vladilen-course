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

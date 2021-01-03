const CODES = {
  A: 'A'.charCodeAt(), // 65
  Z: 'Z'.charCodeAt(), // 90
};

/**
 * Функция создания ячеек
 * @param {*} item Значение по умолчанию в map()
 * @param {int} index Индекс передаваемый когда эту функцию используют в map()
 * @return {function} Возвращает строку со сгенерированными ячейками
 */
function toCell(item, index) {
  const letter = toChar(item, index);

  return `<div 
            class="cell" 
            contenteditable 
            spellcheck="false"
            data-cell="${index}" 
            data-id="${letter + ':change_to_row_number'}"
          >
            ${letter + ':change_to_row_number'}
            
          </div>`;
}

/**
 * Функция создания колонок
 * @param {*} col Передаётся элемент который будет именем
 * @param {int} index Индекс передаваемый когда эту функцию используют в map()
 * @return {string} Возвращает строку со сгенерированными
 * колонками <div class="col-resize></div>
 */
function toColumn(col, index) {
  return `<div class="column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
          </div>`;
}

/**
 * Функция создания строчек
 * @param {int} index Номер строчки начиная с 0го индекса
 * @param {string} content Передоваемый контент который будет
 * помещаться в .row-data
 * @return {string} Возвращает строку со сгенерированными
 * строками
 */
function createRow(index, content) {
  let resizeElement = '';

  if (index !== '') {
    resizeElement = `<div class="row-resize" data-resize="row"></div>`;
    window.rowCurrentCount = index;
  }

  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index}
        ${resizeElement}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

/**
 *
 * @param {*} el Сам перебираемый элемент
 * @param {*} index Индекс перебираемого элемента
 * @return {string} string Возвращает сгенерированную букву
 */
function toChar(el, index) {
  return String.fromCharCode(CODES.A + index);
}

/**
 * Функция создания таблицы
 * @param {int} rowsCount Количество строк
 * @return {string} Строка со сгенерированной таблицей
 */
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('');
  const cells = new Array(colsCount).fill('').map(toCell).join('');

  console.log(cells);
  // console.log(cols);

  // Создаём первую строчку, в которой будут буквы
  rows.push(createRow('', cols));

  // Создаём остальные строчки
  for (let i = 0; i < rowsCount; i++) {
    const rowNumber = i + 1;

    rows.push(
      createRow(
        rowNumber,
        cells.replace(/change_to_row_number/g, rowNumber).trim()
      )
    );
  }

  return rows.join('');
}

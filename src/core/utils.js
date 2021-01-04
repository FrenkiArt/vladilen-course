/**
 * Pure functions
 * @param {string} string - это строка
 * @return {string} string - Возвращается всегда строка
 */
export function capitalize(string) {
  if (typeof string !== 'string') {
    // Если передана не строка то вместо ошибки возвращаем пустую строку
    console.log(`В функцию capitalize была передана не строка`);
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Функция при выборе диапазона ячеек.
 * @param {number|string} start Начало удерживания
 * @param {number|string} end Конец удерживания
 * @return {array} Возвращает массив выбранных ячеек в диапазоне.
 *
 * Мой вариант отличается от Владиленовского, так как у него только цифры,
 * а у меня ещё и буквы.
 */
export function range(start, end) {
  if (typeof start === 'number') {
    if (start > end) {
      [end, start] = [start, end];
    }

    return new Array(end - start + 1).fill('').map((_, index) => {
      return start + index;
    });
  } else if (typeof start === 'string') {
    if (start.charCodeAt() > end.charCodeAt()) {
      [end, start] = [start, end];
    }

    return new Array(end.charCodeAt() - start.charCodeAt() + 1)
      .fill('')
      .map((_, index) => {
        return String.fromCharCode(start.charCodeAt() + index);
      });
  }
  // input: 0, 3
  // output: [0, 1, 2, 3]
}

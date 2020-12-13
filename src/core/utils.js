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

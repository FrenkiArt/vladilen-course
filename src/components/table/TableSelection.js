/**
 * sdf
 */
export class TableSelection {
  static className = 'selected';

  /**
   * sdf
   */
  constructor() {
    this.group = [];
    this.current = null;
  }

  /**
   * sdf
   * @param {*} $el sdf
   * $el instanceof DOM === true
   */
  select($el) {
    this.clear();
    this.group.push($el);
    this.current = $el;

    $el.addClass('selected');
  }

  /**
   * sdf
   */
  clear() {
    this.group.forEach(($el) => {
      $el.removeClass(TableSelection.className);
    });
    this.group = [];
  }

  /**
   * Функция для выделения группы ячеек
   * @param {Array} $group sdf
   */
  selectGroup($group = []) {
    this.clear();

    this.group = $group;
    this.group.forEach(($el) => $el.addClass(TableSelection.className));
  }
}

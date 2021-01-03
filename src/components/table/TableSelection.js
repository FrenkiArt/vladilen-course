/**
 * sdf
 */
export class TableSelection {
  /**
   * sdf
   */
  constructor() {
    this.group = [];
  }

  /**
   * sdf
   * @param {*} $el sdf
   * $el instanceof DOM === true
   */
  select($el) {
    this.group.push($el);
    $el.addClass('selected');
  }

  /**
   * sdf
   */
  selectGroup() {}
}

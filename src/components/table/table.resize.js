import {$} from '../../core/dom.js';

/**
 * Функция ресайзХендлер
 * @param {*} $root
 * @param {*} event
 */
export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"');
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  let value;

  // Заранее находим все элементы, чтобы не дёргать дом дерево каждый раз,
  // когда хотим обратиться к этим элементам
  const cells = $root.findAll(`[data-cell="${$parent.data.col}"]`);

  $resizer.css({
    opacity: 1,
  });

  document.onmousemove = (e) => {
    if (type === 'col') {
      const delta = e.pageX - coords.right;
      // 2px нужны чтобы сдвинуть элемент по которому происходит ресайз
      // ячеек, т.е. это тот элемент который при наведении становится синим
      // на границе ячеек. 2px нужны, чтобы при ресайзе мышка была на нём.
      const magikNumber = 2;
      value = coords.width + delta + magikNumber;

      $resizer.css({
        right: -delta - 4 + 'px',
        bottom: '-100vh',
      });
    } else if (type === 'row') {
      const delta = e.pageY - coords.bottom;
      const magikNumber = 2;
      value = coords.height + delta + magikNumber;

      $resizer.css({
        bottom: -delta - 2 + 'px',
        right: '-100vw',
      });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;

    if (type === 'col') {
      $parent.css({
        width: value + 'px',
      });

      cells.forEach((el) => {
        el.style.width = value + 'px';
      });
    } else if (type === 'row') {
      $parent.css({
        height: value + 'px',
      });
    }

    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    });

    document.onMouseup = null;
  };
}

import './assets/js/module';
import './assets/scss/index.scss';

/**
 * It just test
 * @params {int} test - some number
 * @return {int} sum of test and 10
 */
function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Arthur';

  return element;
}

component();
// document.body.appendChild(component());

console.log('Working!');

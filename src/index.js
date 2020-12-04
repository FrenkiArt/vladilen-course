import './module';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Arthur';

  return element;
}

document.body.appendChild(component());

console.log('Working!');

import './assets/js/module';
import './assets/scss/index.scss';
import {Excel} from './components/excel/Excel';
import {Header} from './components/header/Header';
import {Toolbar} from './components/toolbar/Toolbar';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table';
// import {Emitter} from './core/Emitter';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();

/*
* sdf example for test
const emitter = new Emitter();
emitter.subscribe('vladilen', (data) => console.log('Sub: ', data));

emitter.emit('vladilen', 43);
 */

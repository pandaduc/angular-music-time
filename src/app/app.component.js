import template from './app.html';
import controller from './app.controller';

import './assets/app.scss';

let appComponent = {
  template,
  bindings: {},
  restrict: 'E',
  controller,
  controllerAs: 'vm'
};

export default appComponent;

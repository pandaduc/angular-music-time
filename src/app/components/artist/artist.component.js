import template from './artist.html';
import controller from './artist.controller';

let artistComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default artistComponent;
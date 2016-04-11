import template from './player.html';
import controller from './player.controller';

let playerComponent = {
    restrict: 'E',
    bindings: {
        audio: '=audio'
    },
    template,
    controller,
    controllerAs: 'vm'
}

export default playerComponent;
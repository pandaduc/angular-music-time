import angular from 'angular';
import ngTouch from 'angular-touch';
import uiRouter from 'angular-ui-router';

import Common from './common';
import Components from './components';
import AppComponent from './app.component';
import services from './services';
import ngAudio from './lib/angular.audio';

import SC from 'soundcloud';

angular.module('app', [
    ngTouch,
    uiRouter,
    Common.name,
    Components.name,
    services.name,
    ngAudio.name
]);

angular
    .module('app')
    .component('app', AppComponent)
    .run(run);
    
function run($rootScope) {
    'ngInject';
    
    $rootScope.api = {
        client_id: 'a0811366f26926587126d3c4f52f41bc'
    }
    
    // initialize sound cloud
    SC.initialize({
        client_id: $rootScope.api.client_id
    });
}
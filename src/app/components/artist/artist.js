import angular from 'angular';
import uiRouter from 'angular-ui-router';

import artistComponent from './artist.component';

let artistModule = angular.module('artist', [uiRouter])
                            .config(config)
                            .component('artist', artistComponent);

function config($stateProvider, $urlRouterProvider) {
    "ngInject";
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('artist', {
            url: '/:artist',
            template: '<artist></artist>'
        });
}

export default artistModule;
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import tracksComponent from './tracks.component';

let tracksModule = angular.module('tracks', [uiRouter])
                            .config(config)
                            .component('tracks', tracksComponent);

function config($stateProvider, $urlRouterProvider) {
    "ngInject";
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('tracks', {
            url: '/:artist/:tracks',
            template: '<tracks></tracks>'
        });
}

export default tracksModule;
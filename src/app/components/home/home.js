import angular from 'angular';
import ngTouch from 'angular-touch';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
                        ngTouch,
                        uiRouter,
                        
                    ])
                    .config(config)
                    .component('home', homeComponent)
                    .filter('imageSize', function() {      
                        return function(input, size) {
                            var out = '';
                            var prefix = 'default';
                            
                            if(size && input) {
                                switch(size) {
                                    case '500':
                                        prefix = 't500x500'; 
                                        break;
                                    case '400':
                                        prefix = 'crop';
                                        break;
                                    case '300':
                                        prefix = 't300x300';
                                        break;
                                    
                                    case '67':
                                        prefix = 't67x67';
                                        break;
                                    case '47':
                                        prefix = 'badge';
                                        break;
                                    case '32':
                                        prefix = 'small';
                                        break;
                                    case '20':
                                    case '18':
                                        prefix = 'tiny';
                                        break;
                                    case '16':
                                        prefix = 'mini';
                                        break;
                                    case '100':
                                    default:
                                        prefix = 'large';
                                        break;
                                }                                
                                out = input.replace(/large/g, prefix);
                                return out;
                            }
                                                                            
                            return input;
                        };
                    });

function config($stateProvider, $urlRouterProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        });
}

export default homeModule;
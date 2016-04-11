import angular from 'angular';
import Player from './player/player';

let commonModule = angular.module('app.common', [
    Player.name
]);

export default commonModule;

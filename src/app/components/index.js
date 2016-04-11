import angular from 'angular';
import Home from './home/home';
import Artist from './artist/artist';
import Tracks from './tracks/tracks';

let componentModule = angular.module('app.components', [
    Home.name,
    Artist.name,
    Tracks.name
]);

export default componentModule;

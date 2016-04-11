import SC from 'soundcloud';

export default class Sounds {
    constructor($http, $q, $timeout, ngAudio, $rootScope) {
        "ngInject";
        
        this.$timeout = $timeout;
        this.$http = $http;
        this.$q = $q;
        this.ngAudio = ngAudio;
        
        this.$rootScope = $rootScope;
        this.client_id = $rootScope.api.client_id;
        
        this.audio = null;
    }
    
    getTracks() {        
        return SC.get('/users/183/tracks');
    }
    
    getTrack(id) {
        if(this.audio) this.audio.stop();
        
        return SC.get('/tracks/' + id).then((track) => {
            this.$timeout(() => {
                let url = track.stream_url + '?client_id=' + this.client_id;
                        
                this.audio = this.ngAudio.load(url);
                this.audio.play();
                
                this.$rootScope.$broadcast('track:play', { audio : this.audio });
                                
            }, 0);
        });;
    }
    
    getAudio() {
        return this.audio;
    }
    
    streamTrack(id) {
        return SC.stream('/tracks/' + id)
    }
    
    search(q) {
        return SC.get('/tracks', { q: q });
    }
    
    getChart() {
        return this.$http({
            url: 'https://api-v2.soundcloud.com/charts',
            params: {
                kind: 'top', 
                genre: 'soundcloud:genres:all-music',
                limit: 10,
                client_id: this.client_id
            }
        });
    }
}
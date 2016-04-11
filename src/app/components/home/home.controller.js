

class HomeController {
    constructor($scope, Sounds, ngAudio, $http) {
        "ngInject";

        this.name = 'Home';
        this.tracks = null;
        this.$scope = $scope;
        this.Sounds = Sounds;
        this.ngAudio = ngAudio;
        this.$http = $http;
                
        this.$scope.keywords = '';
        
        this.getTracks();
    }

    getTracks() {
        this.Sounds.getChart().then((response) => {
            
            this.tracks = response.data.collection;
        });
    }

    play(id) {
        if(this.$scope.audio) this.$scope.audio.stop(); 
        
        this.Sounds.getTrack(id);
    }
        
    search() {
        console.log(this.$scope.keywords);
        let q = this.$scope.keywords;
        
        if(q.length > 1) {
            this.Sounds.search(q).then((tracks) => {
                this.$scope.$apply(() => {
                    console.log(tracks);
                    this.$scope.results = tracks;
                });
            });
        }
    }
}



export default HomeController;

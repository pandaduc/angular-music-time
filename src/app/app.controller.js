class AppController {
    constructor($rootScope) {
        'ngInject';
                
        $rootScope.$on('track:play', (event, data) => {            
            this.audio = data.audio;
        });
    }
}

export default AppController;
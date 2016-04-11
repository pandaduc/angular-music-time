class PlayerController {
    constructor($scope) {
        'ngInject';
        
        // default
        this.audio = {
            volume: 1,
            progress: 0
        }   
    }
}

export default PlayerController;
//Controller class 

class controller {
    constructor(model) {
        this.model = model

        this.options = new options(model)
        this.play = new play(model)
    }

    getPlay() {
        return this.play
    }

    getOptions() {
        return this.options
    }
}

class options {
    constructor(model) {
        this.model = model
    }

    //player hints
    //player color

    //board size
    setBoardSize(size) {
        this.model.getOptions().setBoardSize(size)
    }
    
    //board color
    //board bg image
}

class play {

    constructor(model) {
        this.model = model
    }

    //Affects timer among others
    start() {
        this.model.start()
    }

    //reset (timer)
    reset() {
        this.model.getTimer().reset()
    }

    stop() {
        this.model.getTimer().stop()
    }

    //click cell
    claimVertex() {

    }
}

export default controller;
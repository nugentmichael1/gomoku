//Controller class 

import game from "../game"


class controller {
    constructor(model) {
        this.model = model

        this.options = new options()
        this.play = new play(model)
    }

    getPlay() {
        return this.play
    }
}

class options {
    //player hints
    //player color
    //board size
    //board color
    //board bg image
}

class play {

    constructor(model) {
        this.model = model
    }

    //start (timer)
    start() {
        this.model.start()
    }
    reset() {
        this.model.getTimer().reset()
    }

    stop() {
        this.model.getTimer().stop()
    }

    //click cell (claim vertex)
}

export default controller;
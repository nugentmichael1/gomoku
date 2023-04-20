//Play controller - holds all commands to model involved with game-play


class playC {

    constructor(model) {
        this.model = model
    }

    //Affects timer among others
    start() {
        this.model.start()
    }

    //reset (timer)
    reset() {
        this.model.reset()
    }

    stop() {
        this.model.getTimer().stop()
    }

    //click cell
    claimVertex(i, j) {
        this.model.clicked(i, j)
    }
}

export default playC;
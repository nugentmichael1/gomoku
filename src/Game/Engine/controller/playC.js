//Play controller - holds all commands to model involved with game-play


class playC {

    constructor(playM) {
        this.playM = playM
    }

    //Affects timer among others
    start() {
        this.playM.start()
    }

    reset() {
        this.playM.reset()
    }

    //stop timer.  used to clearInterval() on abrupt react component unmounts
    stop() {
        this.playM.getTimer().stop()
    }

    //click cell
    claimVertex(i, j) {
        this.playM.clicked(i, j)
    }
}

export default playC;
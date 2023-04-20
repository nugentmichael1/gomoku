//View - acts as an interface for react components.  Is updated by and injected as a dependency into the model.

//Game Status Table view react-interface
import optionsV from "./optionsV"

//Player Status Table view react-interface
import playerV from "./playerV"

class view {
    constructor() {

        //Game Status Table
        this.optionsV = new optionsV()

        //Player Status Table array
        this.players = new Array(2)
        this.players[0] = new playerV()
        this.players[1] = new playerV()
    }

    getOptions() {
        return this.optionsV
    }

    getPlayer(index) {
        return this.players[index]
    }
}

class playV {

}

export default view;
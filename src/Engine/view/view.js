//View - acts as an interface for react components.  Is updated by and injected as a dependency into the model.

//Game Status Table view react-interface
import gameStatusV from "./gameStatusV"

//Board view react-interface
import boardV from "./boardV"

//Player Status Table view react-interface
import playerV from "./playerV"

class view {
    constructor() {

        //Game Status Table
        this.gameStatus = new gameStatusV()

        //Board
        this.board = new boardV()

        //Player Status Table array
        this.players = new Array(2)
        this.players.fill(new playerV())
    }

    getGameStatus() {
        return this.gameStatus
    }

    getBoard() {
        return this.board
    }

    getPlayer(index) {
        return this.players[index]
    }
}

export default view;
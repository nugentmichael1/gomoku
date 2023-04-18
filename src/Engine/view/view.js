
import gameStatus from "./gameStatus"

class view {
    constructor() {
        this.gameStatus = new gameStatus()
    }


    getGameStatus() {
        return this.gameStatus
    }

    
}



export default view;
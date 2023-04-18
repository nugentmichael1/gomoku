
import timerV from "./timerV"
import boardSizeV from "./boardSizeV"
import boardBgColor from "../Classes/boardBgColor"

class gameStatusV {

    // gameInProgress = false

    boardBgColorInstance = new boardBgColor();

    constructor() {

        this.timerInstance = new timerV();

        this.boardSizeV = new boardSizeV();
    }

    getTimer() {
        return this.timerInstance;
    }

    getBoardSize() {
        return this.boardSizeV;
    }


    getBoardBgColorObj() {
        return this.boardBgColorInstance;
    }

    // getGameInProgress() {
    //     console.log(this.gameInProgress)
    //     return this.gameInProgress;
    // }
    // setGameInProgress(boolValue) {
    //     this.gameInProgress = boolValue;
    // }

}



export default gameStatusV;
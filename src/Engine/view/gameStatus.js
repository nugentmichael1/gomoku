
import timerV from "./timerV"
import boardSize from "../Classes/boardSize"
import boardBgColor from "../Classes/boardBgColor"

class gameStatus {

    gameInProgress = false

    boardBgColorInstance = new boardBgColor();

    constructor(size, gameInstance) {

        this.timerInstance = new timerV(gameInstance);

        this.boardSizeInstance = new boardSize(size, this);
    }

    getTimer() {
        return this.timerInstance;
    }

    getBoardSizeObj() {
        return this.boardSizeInstance;
    }

    getBoardBgColorObj() {
        return this.boardBgColorInstance;
    }

    getGameInProgress() {
        console.log(this.gameInProgress)
        return this.gameInProgress;
    }
    setGameInProgress(boolValue) {
        this.gameInProgress = boolValue;
    }

}





export default gameStatus;
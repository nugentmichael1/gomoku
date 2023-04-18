
import timerV from "./timerV"
import boardSize from "../Classes/boardSize"
import boardBgColor from "../Classes/boardBgColor"

class gameStatus {

    gameInProgress = false

    boardBgColorInstance = new boardBgColor();

    constructor(size) {

        this.timerInstance = new timerV();

        this.boardSizeInstance = new boardSize(size, this);

        this.boardSizeV = new boardSizeV();
    }

    getTimer() {
        return this.timerInstance;
    }

    getBoardSize() {
        return this.boardSizeV;
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

class boardSizeV {

    useStateFx = null

    defaultValue = null

    //Interface for react hook useState set-function
    setUseStateFx(fx) {
        this.useStateFx = fx
    }

    //Activation of react hook useState set-function
    set(size) {
        this.useStateFx(size)
    }

    setDefault(value) {
        this.defaultValue = value
    }

    getDefault() {
        return this.defaultValue
    }

}



export default gameStatus;
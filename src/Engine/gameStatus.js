
import timer from "./Classes/timer"
import boardSize from "./Classes/boardSize"
import boardBgColor from "./Classes/boardBgColor"

class gameStatus {

    timerInstance = new timer();

    boardBgColorInstance = new boardBgColor();

    constructor(size) {
        this.boardSizeInstance = new boardSize(size);
    }

    getTimerObj() {
        return this.timerInstance;
    }

    getBoardSize() {
        return this.boardSizeInstance;
    }

    getBoardBgColorObj() {
        return this.boardBgColorInstance;
    }


}





export default gameStatus;
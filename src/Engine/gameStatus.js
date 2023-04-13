
import timer from "./Classes/timer"
import boardSize from "./Classes/boardSize"

class gameStatus {
    timerInstance = new timer();

    constructor(size) {
        this.boardSizeInstance = new boardSize(size);
    }

    getTimerObj() {
        return this.timerInstance;
    }

    getBoardSize() {
        return this.boardSizeInstance;
    }
}





export default gameStatus;
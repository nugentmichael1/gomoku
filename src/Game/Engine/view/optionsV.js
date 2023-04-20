//Game Status Table view - react-interface

import timerV from "./timerV"
import boardSizeV from "./boardSizeV"
import bgColorV from "./bgColorV";
import bgImageV from "./bgImageV"

class optionsV {

    constructor() {

        this.timerInstance = new timerV();

        this.boardSizeV = new boardSizeV();

        this.bgColor = new bgColorV()

        this.bgImage = new bgImageV()
    }

    getTimer() {
        return this.timerInstance;
    }

    getBoardSize() {
        return this.boardSizeV;
    }

    getBgColor() {
        return this.bgColor
    }

    getBgImage() {
        return this.bgImage
    }
}

export default optionsV;
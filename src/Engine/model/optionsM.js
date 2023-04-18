//Options - sub-class of model

//
import boardSizeM from "./boardSizeM"

//configurations - defaults
import defaults from "../../Configurations/Defaults.json"

class optionsM {

    constructor(timer, view) {

        // this.timer = timer

        this.view = view

        this.boardSize = new boardSizeM(Number(defaults.boardSize), view, timer)
    }

    setBoardSize(size) {
        this.boardSize.set(size)
    }
}


export default optionsM;
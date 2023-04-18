//Options - sub-class of model

//
import boardSizeM from "./boardSizeM"
import bgColorM from "./boardBgColorM"
import bgImageOn from "./bgImageOnM"

//configurations - defaults
import defaults from "../../Configurations/Defaults.json"

class optionsM {

    constructor(timer, view) {

        this.view = view

        this.boardSize = new boardSizeM(Number(defaults.boardSize), view, timer)

        this.bgColor = new bgColorM(view)

        this.bgImageOn = new bgImageOn(view, defaults.bgImageOn)
    }

    setBoardSize(size) {
        this.boardSize.set(size)
    }

    setBgColor(hexCode) {
        this.bgColor.set(hexCode)
    }

    setBgImageOn(bool) {
        this.bgImageOn.set(bool)
    }
}


export default optionsM;
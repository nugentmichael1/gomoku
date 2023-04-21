//Options - sub-class of model

//
import boardSizeM from "./boardSizeM"
import bgColorM from "./boardBgColorM"
import bgImageOn from "./bgImageOnM"
import playerOptionsM from "./playerOptionsM"

//configurations - defaults
import defaults from "../../../Configurations/Defaults.json"

class optionsM {

    constructor(timer, view) {

        this.view = view

        this.boardSize = new boardSizeM(Number(defaults.boardSize), view, timer)

        this.bgColor = new bgColorM(view, defaults.bgColor)

        this.bgImageOn = new bgImageOn(view, defaults.bgImageOn)

        this.playerOptionsArr = []
        this.playerOptionsArr[0] = new playerOptionsM(view, defaults.playerColor.player1, 0)
        this.playerOptionsArr[1] = new playerOptionsM(view, defaults.playerColor.player2, 1)
    }

    setBoardSize(size) {
        this.boardSize.set(size)
    }

    getBoardSize() {
        return this.boardSize.get()
    }

    setBgColor(hexCode) {
        this.bgColor.set(hexCode)
    }

    setBgImageOn(bool) {
        this.bgImageOn.set(bool)
    }

    setPlayerColor(id, color) {

        //verify opponent is not already associated with desired color
        if (this.playerOptionsArr[1 - id].getColor() === color) {

            alert("Opponent already possess that color.  Please choose another or ask him to change first.")
            
            return
        }

        //set new color
        this.playerOptionsArr[id].setColor(color)
    }

    setHints(playerId, value) {
        this.playerOptionsArr[playerId].setHints(value)
    }
}



export default optionsM;
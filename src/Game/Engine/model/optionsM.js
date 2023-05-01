//Options - sub-class of model

//
import boardSizeM from "./boardSizeM"
import bgColorM from "./boardBgColorM"
import bgImageOn from "./bgImageOnM"
import playerOptionsM from "./playerOptionsM"

//configurations - defaults
import defaults from "../../../Configurations/Defaults.json"

class optionsM {

    constructor(playM, view) {

        this.boardSize = new boardSizeM(view, playM, Number(defaults.boardSize))

        this.bgColor = new bgColorM(view, defaults.bgColor)

        this.bgImageOn = new bgImageOn(view, defaults.bgImageOn)

        this.playerOptions = [
            new playerOptionsM(view, defaults.playerColor.player1, 0),
            new playerOptionsM(view, defaults.playerColor.player2, 1)
        ]
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

    setPlayerColor(id, color) {

        //verify opponent is not already associated with desired color
        if (this.playerOptions[1 - id].getColor() === color) {
            alert("Opponent already possesses that color.  Please choose another or ask him to change first.")

            return
        }

        //set new color
        this.playerOptions[id].setColor(color)
    }

    setHints(playerId, value) {
        this.playerOptions[playerId].setHints(value)
    }
}



export default optionsM;
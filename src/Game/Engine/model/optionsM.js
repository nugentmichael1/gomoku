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

        this.playM = playM

        this.view = view

        this.boardSize = new boardSizeM(view, playM, Number(defaults.boardSize))

        this.bgColor = new bgColorM(view, defaults.bgColor)

        this.bgImageOn = new bgImageOn(view, defaults.bgImageOn)

        playM.getPlayer(0).getOptions().setDefaultColor(defaults.playerColor.player1)
        playM.getPlayer(1).getOptions().setDefaultColor(defaults.playerColor.player2)
        // this.playerOptionsArr = []
        // this.playerOptionsArr[0] = new playerOptionsM(view, defaults.playerColor.player1, 0)
        // this.playerOptionsArr[1] = new playerOptionsM(view, defaults.playerColor.player2, 1)
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
        if (this.playM.getPlayer(1 - id).getOptions().getColor() === color) {

            alert("Opponent already possess that color.  Please choose another or ask him to change first.")

            return
            // if(this.playerOptionsArr[1 - id].getColor() === color) {

            // alert("Opponent already possess that color.  Please choose another or ask him to change first.")

            // return
        }

        //set new color
        // this.playerOptionsArr[id].setColor(color)
        this.playM.getPlayer(id).getOptions().setColor(color)
    }

    setHints(playerId, value) {
        this.playerOptionsArr[playerId].setHints(value)
    }
}



export default optionsM;
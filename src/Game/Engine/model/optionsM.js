//Options - sub-class of model

//
import boardSizeM from "./boardSizeM"
import bgColorM from "./boardBgColorM"
import bgImageOn from "./bgImageOnM"

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

        // playM.getPlayer(0).color.set(defaults.playerColor.player1)
        // playM.getPlayer(1).color.set(defaults.playerColor.player2)
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
        if (this.playM.getPlayer(1 - id).getOptions().getColor() === color) {

            alert("Opponent already possesses that color.  Please choose another or ask him to change first.")

            return
        }

        //set new color
        this.playM.getPlayer(id).getOptions().setColor(color)
    }

    setHints(playerId, value) {
        this.playM.getPlayer(playerId).getOptions().setHints(value)
    }
}



export default optionsM;
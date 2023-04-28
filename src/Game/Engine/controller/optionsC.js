//Options controller - holds all commands to model that set game options

//rename to "settings"?

class options {
    constructor(model) {
        this.optionsM = model.getOptions()
    }

    //player hints
    setHints(playerId, value) {
        this.optionsM.setHints(playerId, value)
    }

    //player color
    setPlayerColor(playerId, colorName) {
        this.optionsM.setPlayerColor(playerId, colorName)
    }

    //board size
    setBoardSize(size) {
        this.optionsM.setBoardSize(size)
    }

    //board color
    setBgColor(hexCode) {
        this.optionsM.setBgColor(hexCode)
    }

    //board bg image
    setBgImageOn(bool) {
        this.optionsM.setBgImageOn(bool)
    }
}

export default options;
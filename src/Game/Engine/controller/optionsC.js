//Options controller - holds all commands to model that set game options

//rename to "settings"?

class options {
    constructor(model) {
        this.model = model
    }

    //player hints
    setHints(playerId, value) {
        this.model.options.setHints(playerId, value)
    }

    //player color
    setPlayerColor(playerId, colorName) {
        this.model.options.setPlayerColor(playerId, colorName)
    }

    //board size
    setBoardSize(size) {
        this.model.getOptions().setBoardSize(size)
    }

    //board color
    setBgColor(hexCode) {
        this.model.getOptions().setBgColor(hexCode)
    }

    //board bg image
    setBgImageOn(bool) {
        this.model.getOptions().setBgImageOn(bool)
    }
}

export default options;
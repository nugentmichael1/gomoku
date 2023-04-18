//Options controller - holds all commands to model that set game options

class options {
    constructor(model) {
        this.model = model
    }

    //player hints
    //player color

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
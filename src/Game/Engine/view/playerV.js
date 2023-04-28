//Player view



class playerV {

    //Turn Text
    defaultTurnText = ""

    useStateFxTurnText = null

    setUseStateFxTurnText(fx) {
        this.useStateFxTurnText = fx
    }

    setTurnText(text) {
        this.defaultTurnText = text
        this.useStateFxTurnText(text)
    }

    //Player Status Table
    useStateFxColor = null

    setUseStateFxColor(fx) {
        this.useStateFxColor = fx
    }

    //Board pieces
    useStateFxColorBoard = null

    setUseStateFxColorBoard(fx) {
        this.useStateFxColorBoard = fx
    }

    //Opponent Text
    useStateFxColorOpponentText = null

    setUseStateFxColorOpponentText(fx) {
        this.useStateFxColorOpponentText = fx
    }

    //Set Player Status Table, Board Pieces, and Opponent Text
    setColor(colorName) {
        this.useStateFxColor(colorName)
        this.useStateFxColorBoard(colorName)
        this.useStateFxColorOpponentText(colorName)
    }

    defaultColor = null

    setDefaultColor(color) {
        this.defaultColor = color
    }

    getDefaultColor() {
        return this.defaultColor
    }

    // defaultOpponentColor = null

    // setUseStateFxOpponentColor(fx) {
    //     this.useStateFxOpponentColor = fx
    // }

    // setOpponentColor(color) {
    //     this.useStateFxOpponentColor(color)
    // }

    // setDefaultOpponentColor(color) {
    //     this.defaultOpponentColor = color
    // }

    // getDefaultOpponentColor() {
    //     return this.defaultOpponentColor
    // }

    useStateFxHints = null

    setUseStateFxHints(fx) {
        this.useStateFxHints = fx
    }

    setHints(value) {
        //checkbox value
        this.useStateFxHints(value)
        //board vertexes - changes transparency of cell i think
    }

}

export default playerV;
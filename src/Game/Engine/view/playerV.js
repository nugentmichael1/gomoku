//Player view



class playerV {

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


    //hints toggle

    useStateFxHints = null

    setUseStateFxHints(fx) {
        this.useStateFxHints = fx
    }

    useStateFxHintsBoard = null

    setUseStateFxHintsBoard(fx) {
        this.useStateFxHintsBoard = fx
    }

    setHints(value) {

        //checkbox value
        this.useStateFxHints(value)

        //board vertexes - changes transparency of hint cells
        this.useStateFxHintsBoard(value)
    }

    useStateFxThrees = null

    setUseStateFxThrees(fx) {
        this.useStateFxThrees = fx
    }

    setThrees(value) {
        this.useStateFxThrees(value)
    }

    useStateFxFours = null

    setUseStateFxFours(fx) {
        this.useStateFxFours = fx
    }

    setFours(value) {
        this.useStateFxFours(value)
    }

}

export default playerV;
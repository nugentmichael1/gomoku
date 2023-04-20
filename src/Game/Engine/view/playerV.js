//Player view



class playerV {
    defaultTurnText = ""

    useStateFxTurnText = null

    setUseStateFxTurnText(fx) {
        this.useStateFxTurnText = fx
    }

    setTurnText(text) {
        this.defaultTurnText = text
        this.useStateFxTurnText(text)
    }

    useStateFxColor = null

    setUseStateFxColor(fx) {
        this.useStateFxColor = fx
    }

    setColor(colorName) {
        this.useStateFxColor(colorName)
    }

    defaultColor = null

    setDefaultColor(color) {
        this.defaultColor = color
    }

    getDefaultColor() {
        return this.defaultColor
    }

    defaultOpponentColor = null

    setUseStateFxOpponentColor(fx) {
        this.useStateFxOpponentColor = fx
    }

    setOpponentColor(color) {
        this.useStateFxOpponentColor(color)
    }

    setDefaultOpponentColor(color) {
        this.defaultOpponentColor = color
    }

    getDefaultOpponentColor() {
        return this.defaultOpponentColor
    }

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
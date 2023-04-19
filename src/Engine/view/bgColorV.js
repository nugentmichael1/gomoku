//Background Color selecter view - react-interface


class bgColorV {

    //Drop down menu value useState fx
    useStateFxSetStandard = null

    //Board - standard
    useStateFxBoardStandard = null

    //Board - hover
    useStateFxBoardHover = null

    //Default standard color
    defaultStandard = null

    //Default hover color
    defaultHover = null

    colorChoices = []

    //Drop down menu value
    setUseStateFunctionSetStandard(fx) {
        this.useStateFxSetStandard = fx
    }

    //Board
    setUseStateFxBoardStandard(fx) {
        this.useStateFxBoardStandard = fx
    }

    setStandard(hexCode) {
        this.useStateFxSetStandard(hexCode)
        this.useStateFxBoardStandard(hexCode)
    }

    //Hover (Board only)
    setUseStateFxBoardHover(fx) {
        this.useStateFxBoardHover = fx
    }

    setHover(hexCode) {
        this.useStateFxBoardHover(hexCode)
    }

    //Defaults
    //Standard
    setDefaultStandard(hexCode) {
        this.defaultStandard = hexCode
    }

    getDefaultStandard() {
        return this.defaultStandard
    }

    //Default Hover
    setDefaultHover(hexCode) {
        this.defaultHover = hexCode
    }

    getDefaultHover() {
        return this.defaultHover
    }

    //Options tags
    getChoices() {
        return this.colorChoices
    }

    setChoices(colorChoices) {
        this.colorChoices = colorChoices
    }
}

export default bgColorV;
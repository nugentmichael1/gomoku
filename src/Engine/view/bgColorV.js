//Background Color selecter view - react-interface


class bgColorV {

    useStateFxSetStandard = null

    defaultStandard = null

    colorChoices = []

    setUseStateFunctionSetStandard(fx) {
        this.useStateFxSetStandard = fx
    }

    setStandard(hexCode) {
        this.useStateFxSetStandard(hexCode)
    }

    setDefault(hexCode) {
        this.defaultStandard = hexCode
    }

    getDefault() {
        return this.defaultStandard
    }

    getChoices() {
        return this.colorChoices
    }

    setChoices(colorChoices) {
        this.colorChoices = colorChoices
    }
}

export default bgColorV;
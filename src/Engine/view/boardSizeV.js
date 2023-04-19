//Board Size class of model -  sub class of gameStatus


class boardSizeV {

    useStateFxRadio = null

    useStateFxBoard = null

    defaultValue = null

    //Interface for react hook useState set-function
    setUseStateFxRadio(fx) {
        this.useStateFxRadio = fx
    }

    setUseStateFxBoard(fx) {
        this.useStateFxBoard = fx
    }

    //Activation of react hook useState set-functions
    set(size) {
        this.useStateFxRadio(size)
        this.useStateFxBoard(size)
    }

    setDefault(value) {
        this.defaultValue = value
    }

    getDefault() {
        return this.defaultValue
    }

}

export default boardSizeV;
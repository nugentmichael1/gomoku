//Board Size class of model -  sub class of gameStatus


class boardSizeV {

    useStateFx = null

    defaultValue = null

    //Interface for react hook useState set-function
    setUseStateFx(fx) {
        this.useStateFx = fx
    }

    //Activation of react hook useState set-function
    set(size) {
        this.useStateFx(size)
    }

    setDefault(value) {
        this.defaultValue = value
    }

    getDefault() {
        return this.defaultValue
    }

}

export default boardSizeV;
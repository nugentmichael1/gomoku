//Background Image On view -- react-interface


class bgImageV {


    defaultOn = null

    //React useState set fx to change checkbox value
    useStateFxCheckBox = null

    //Check box
    setUseStateFxOn(fx) {
        this.useStateFxCheckBox = fx
    }

    //React useState set fx to change background of board
    useStateFxBoard = null

    //Board
    setUseStateFxBoard(fx) {
        this.useStateFxBoard = fx
    }

    //Activate useState functions simultaneously
    setOn(bool) {
        this.useStateFxCheckBox(bool)
        this.useStateFxBoard(bool)
    }


    //Defaults
    setDefaultOn(bool) {
        this.defaultOn = bool
    }

    getDefaultOn() {
        return this.defaultOn
    }
}

export default bgImageV
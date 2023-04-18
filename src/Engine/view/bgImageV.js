//Background Image On view -- react-interface


class bgImageV {


    defaultOn = null

    useStateFxOn = null

    setUseStateFxOn(fx) {
        this.useStateFxOn = fx
    }

    setOn(bool) {
        this.useStateFxOn(bool)
    }

    setDefaultOn(bool) {
        this.defaultOn = bool
    }

    getDefaultOn() {
        return this.defaultOn
    }

}

export default bgImageV
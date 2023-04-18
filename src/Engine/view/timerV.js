//Timer View

class timerV {

    //These should be set to react useState functions on component render
    setCounterTextFx = null
    setButtonTextFx = null

    setUseStateFxCounter(useStateFx) {
        this.setCounterTextFx = useStateFx
    }

    setCounterText(text) {
        this.setCounterTextFx(text)
    }

    setUseStateFxButtonText(useStateFx) {
        this.setButtonTextFx = useStateFx
    }

    setButtonText(text) {
        this.setButtonTextFx(text)
    }

}

export default timerV;
//Timer View

class timerV {

    setUseStateFxCounter(useStateFx) {
        this.setCounterTextFx = useStateFx
    }

    setCounterText(text) {
        this.setCounterTextFx(text)
    }

    // getIntervalId() {
    //     return this.intervalId
    // }

    // start() {
    //     this.setIntervalId(
    //         setInterval(() => {

    //         }, 200)
    //     )
    // }

    // setIntervalId(id) {
    //     this.intervalId = id
    // }

}

export default timerV;
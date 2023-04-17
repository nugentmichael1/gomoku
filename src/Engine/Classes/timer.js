
class timer {

    constructor(view) {
        this.view = view
    }

    intervalId = null;

    active = false;

    //default text for counter
    countText = "Timer"

    start() {

        //snapshot current time
        const startTime = Date.now();

        //instant first update
        // this.setCountText(Math.floor((Date.now() - startTime) / 1000))

        this.active = true

        //start interval function
        this.setIntervalId(
            setInterval(() => {

                //get elapsed time since start
                const elapsed = Math.floor((Date.now() - startTime) / 1000);

                //update this class's timer text value
                this.setCountText(elapsed)

                //debug
                console.log(this.getCountText())

                //update view (react-interface class)
                this.view.getGameStatus().getTimer().setCounterText(this.getCountText())

            }, 200)
        )
        return true;
    }

    reset() {

        //verify reset of game
        if (window.confirm("Are you sure?  Current game data will be lost.")) {

            //stop interval function
            this.stop()

            //update count text
            this.view.getGameStatus().getTimer().setCounterText("Timer")

            return true;
        }
        return false;
    }

    //used in reset and for game page unmount
    stop() {
        clearInterval(this.getIntervalId())
        this.active = false
    }

    setIntervalId(id) {
        this.intervalId = id;
    }

    getIntervalId() {
        return this.intervalId;
    }

    setCountText(text) {
        this.countText = text;
    }

    getCountText() {
        return this.countText
    }
}

export default timer;
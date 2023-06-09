//Game Timer.  used to stop displayed timer when game restarts or ends.

class timerM {

    //Dependency injection
    constructor(view) {
        this.view = view
    }

    //Variable to store interval fx id
    intervalId = null;

    //Boolean to report whether timer (interval fx) is in progress or not
    active = false;

    //default text for counter
    countText = "Timer"

    start() {

        //snapshot current time
        const startTime = Date.now();

        //start interval function
        this.intervalId = setInterval(() => {

            //get elapsed time since start
            const elapsed = Math.floor((Date.now() - startTime) / 1000);

            //update this class's timer text value
            this.countText = elapsed

            //debug
            // console.log(elapsed)

            //update view (react-interface class)
            this.view.getOptions().getTimer().setCounterText(elapsed)

        }, 200)

        //interval fx is in progress
        this.active = true

        //Update button text
        this.view.getOptions().getTimer().setButtonText("Reset")
    }

    reset() {
        //stop interval function
        this.stop()

        //interval fx is stopped
        this.active = false

        //update count text
        this.view.getOptions().getTimer().setCounterText("Timer")

        //update button text
        this.view.getOptions().getTimer().setButtonText("Start")
    }

    //used in this.reset(), game completion, and for Game component unmount
    stop() {

        //clear interval fx with stored id
        clearInterval(this.intervalId)

    }

    getCountText() {
        return this.countText
    }

    getActive() {
        return this.active
    }
}

export default timerM;
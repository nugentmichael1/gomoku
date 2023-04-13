
class timer {
    intervalId = null;

    timerRunning = false;

    timerText = "Start"

    setIntervalId(id) {
        this.intervalId = id;
    }

    getIntervalId() {
        return this.intervalId;
    }

    start(setTimerText) {

        //Verify game should start?

        //Increment gameInstance turn by 1
        //Update P1 Color Display to show number


        //snapshot current time
        const startTime = Date.now();

        //instant first update
        this.timerText = Math.floor((Date.now() - startTime) / 1000)

        //start interval function
        this.setIntervalId(
            setInterval(() => {

                console.log("interval()")
                //get elapsed time since start
                const elapsed = Math.floor((Date.now() - startTime) / 1000);

                //update timer text
                this.timerText = elapsed;
                setTimerText(this.timerText)
            }, 200)
        )
        return true;
    }

    reset(setTimerText) {

        //verify reset of game
        if (window.confirm("Are you sure?  Current game data will be lost.")) {
            //stop interval function
            clearInterval(this.getIntervalId());

            //update timer text
            setTimerText("Timer")

            return true;
        }
        return false;
    }
}

export default timer;
//board size - options model sub class


class boardSizeM {
    constructor(size, view, timer) {

        this.timer = timer

        this.view = view

        //default
        this.size = size

        //Set board size view/controller component's default value
        view.getGameStatus().getBoardSize().setDefault(size)
    }

    //set board size
    set(size) {

        //Case: Game in progress
        if (this.timer.active === true) {

            //confirm board size change to avoid game progress loss
            if (window.confirm("Are you sure?  A board size change will erase current game's data.")) {

                //set new size
                this.size = size;

                //set new size and update both views
                this.updateView(size)

                //call model's reset()

            }
        }
        //case: No game in progress
        else {

            //set new size
            this.size = size;

            //set new size and update both views
            this.updateView(size)
        }
    }

    //private
    updateView() {
        this.view.getGameStatus().getBoardSize().set(this.size)
    }

    get() {
        return this.size
    }

}

export default boardSizeM;
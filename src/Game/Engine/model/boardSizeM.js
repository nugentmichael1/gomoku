//board size - options model sub class


class boardSizeM {
    constructor(size, view, timer) {

        this.timer = timer

        this.view = view

        //default
        this.size = size

        //Set board size view/controller component's default value
        view.getOptions().getBoardSize().setDefault(size)
    }

    //set board size
    set(size) {

        //Case: Game in progress
        if (this.timer.active === true) {

            // warning that board size change will void game progress
            const warningMessage = "Are you sure?  A board size change will erase current game's data."

            //Confirm guard
            if (!window.confirm(warningMessage)) return

            //set new size
            this.size = size;

            //set new size and update both views
            this.updateView(size)

            //call model's reset()

        }

        //case: No game in progress
        else {

            //set new size
            this.size = size;

            //set new size and update both views
            this.updateView(size)

            //model reset for matrix size change
        }
    }

    //private
    updateView() {
        this.view.getOptions().getBoardSize().set(this.size)
    }

    get() {
        return this.size
    }

}

export default boardSizeM;
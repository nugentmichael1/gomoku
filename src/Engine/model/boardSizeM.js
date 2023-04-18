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

        //confirm board size change if game is in progress
        if (this.timer.active === true) {
            if (window.confirm("Are you sure?  A board size change will erase current game's data.")) {

                //set new size
                this.size = size;

                //update view
                this.updateView()

                //call model's reset()

            }
            return false;
        }
        else {

            //update size value
            this.size = size;

            //update view
            this.updateView()
        }
    }

    updateView() {
        this.view.getGameStatus().getBoardSize().set(this.size)
    }
}

export default boardSizeM;
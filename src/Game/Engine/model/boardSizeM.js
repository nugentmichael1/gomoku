//board size - options model sub class


class boardSizeM {
    constructor(view, playM, defaultSize) {

        //use to check if game in progress
        this.timer = playM.getTimer()

        //used to call reset after size change
        this.playM = playM

        this.view = view

        //default
        this.size = defaultSize

        //Set board size view/controller component's default value
        view.getOptions().getBoardSize().setDefault(defaultSize)
    }

    //set board size
    set(size) {

        //set new size
        this.size = size;

        //model reset for matrix size change
        this.playM.reset(size)

        //update view
        this.view.getOptions().getBoardSize().set(this.size)

    }

    //who uses this? can we delete it?
    get() {
        return this.size
    }

}

export default boardSizeM;
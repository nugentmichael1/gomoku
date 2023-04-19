//Background Image toggle (checkbox) model

class bgImageOnM {
    constructor(view, defaultValue) {
        this.view = view

        //set default
        this.view.getGameStatus().getBgImage().setDefaultOn(defaultValue)
    }

    on = false

    set(bool) {
        this.on = bool

        //update view
        this.view.getGameStatus().getBgImage().setOn(this.on)

    }
}

export default bgImageOnM
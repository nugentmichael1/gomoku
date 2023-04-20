//Background Image toggle (checkbox) model

class bgImageOnM {
    constructor(view, defaultValue) {
        this.view = view

        //set default
        this.view.getOptions().getBgImage().setDefaultOn(defaultValue)
    }

    on = false

    set(bool) {
        this.on = bool

        //update view
        this.view.getOptions().getBgImage().setOn(this.on)

    }
}

export default bgImageOnM
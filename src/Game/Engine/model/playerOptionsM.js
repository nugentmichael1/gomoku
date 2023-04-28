//Player Options module of the model.  Sub component of optionsM.


class playerOptionsM {

    constructor(view, defaultColor, id) {
        this.view = view
        this.color = defaultColor
        this.id = id



        //hints default
        this.hints = false
    }

    //hints on/off
    setHints(value) {
        this.hints = value
        this.view.getPlayer(this.id).setHints(value)
    }

    setColor(color) {
        this.color = color

        //update view
        //Player color
        this.view.getPlayer(this.id).setColor(this.color)

        // //Opponent's turn text
        // this.view.getPlayer(1 - this.id).setOpponentColor(this.color)
    }

    getColor() {
        return this.color
    }

    setTextColor(color) {
        this.textColor = color
    }

    //Set defaults
    setDefaultColor(color) {
        this.color = color
        this.view.getPlayer(this.id).setDefaultColor(this.color)
    }

    setDefaultTextColor(color) {
        this.view.getPlayer(1 - this.id).setDefaultOpponentColor(color)
    }



}
export default playerOptionsM;
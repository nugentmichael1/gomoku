//Player Options module of the model.  Sub component of optionsM.


class playerOptionsM {

    constructor(view, defaultColor, id) {
        this.view = view
        this.color = defaultColor
        this.id = id

        //Set defaults
        this.view.getPlayer(id).setDefaultColor(this.color)
        this.view.getPlayer(1 - id).setDefaultOpponentColor(this.color)

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
        //Opponent's turn text
        this.view.getPlayer(1 - this.id).setOpponentColor(this.color)
    }

    getColor() {
        return this.color
    }

}
export default playerOptionsM;
//Player Options module of the model.  Sub component of optionsM.


class playerOptionsM {

    constructor(view, defaultColor, id) {


        this.view = view

        this.color = defaultColor
        
        this.id = id

        //set view's default color for initial load
        this.view.getPlayer(this.id).setDefaultColor(this.color)


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
        this.view.getPlayer(this.id).setColor(this.color)
    }

    //To check if opponent has same color
    getColor() {
        return this.color
    }
}
export default playerOptionsM;
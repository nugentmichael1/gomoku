
//Configurations
import boardBGColors from "../../Configurations/BoardBGColors.json"


class boardBgColorM {

    constructor(view) {

        this.view = view

        this.colorChoices = new Array(boardBGColors.length)
        boardBGColors.forEach((color, index) => {
            this.colorChoices[index] = new colorChoice(color)
        })

        this.standard = this.colorChoices[0]
        this.hover = this.colorChoices[1]

        //set default color choice
        this.view.getGameStatus().getBgColor().setDefault(this.standard.getHexCode());

        //load color choices for view
        this.view.getGameStatus().getBgColor().setChoices(this.colorChoices)
    }

    set(hexCode) {
        if (hexCode === this.colorChoices[0].hexCode) {
            this.standard = this.colorChoices[0]
            this.hover = this.colorChoices[1]
        }
        else {
            this.standard = this.colorChoices[1]
            this.hover = this.colorChoices[0]
        }

        //update view
        this.view.getGameStatus().getBgColor().setStandard(this.standard.getHexCode())
    }

    getStandard() {
        return this.standard;
    }

    getHover() {
        return this.hover;
    }

    getColorChoices() {
        return this.colorChoices;
    }

}

class colorChoice {
    
    constructor(colorObj) {
        this.name = colorObj.name
        this.hexCode = colorObj.hexCode
    }

    getName() {
        return this.name;
    }
    getHexCode() {
        return this.hexCode;
    }
}

export default boardBgColorM;
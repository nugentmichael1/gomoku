
//Configurations
import boardBGColors from "../../Configurations/BoardBGColors.json"


class boardBgColor {

    constructor() {
        this.colorChoices = new Array(boardBGColors.length)
        boardBGColors.forEach((color, index) => {
            this.colorChoices[index] = new colorChoice(color)
        })

        this.standard = this.colorChoices[0]
        this.hover = this.colorChoices[1]
    }



    change = (hexCode) => {

        if (hexCode === this.colorChoices[0].hexCode) {
            this.standard = this.colorChoices[0]
            this.hover = this.colorChoices[1]
        }
        else {
            this.standard = this.colorChoices[1]
            this.hover = this.colorChoices[0]
        }

        //debug
        // console.log("standard:", this.standard, "hover:", this.hover)

        //can return false instead to deny color change on view and controller
        return true;
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

export default boardBgColor;
//Controller class 

import optionsC from "./optionsC"
import playC from "./playC"

class controller {
    constructor(model) {
        this.model = model

        this.options = new optionsC(model)
        this.play = new playC(model)
    }

    getPlay() {
        return this.play
    }

    getOptions() {
        return this.options
    }
}

export default controller;
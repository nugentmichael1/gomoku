//View - acts as an interface for react components.  Is updated by and injected as a dependency into the model.

//Game Status Table view react-interface
import optionsV from "./optionsV"

//Player Status Table view react-interface
import playerV from "./playerV"

//Matrix view - used by playV (not to be confused with playerV)
import matrixV from "./matrixV"

class view {
    constructor() {

        //Options view
        this.optionsV = new optionsV()

        //Play view: matrix update
        this.playV = new playV()

        //Player Options view array
        this.players = new Array(2)
        this.players[0] = new playerV()
        this.players[1] = new playerV()
    }

    getOptions() {
        return this.optionsV
    }

    getPlayer(index) {
        return this.players[index]
    }

    getPlay() {
        return this.playV
    }
}

class playV {

    matrixV = new matrixV(19)

    // useStateFxMatrix = null

    // setUseStateFxMatrix(fx) {
    //     this.useStateFxMatrix = fx
    // }

    // setMatrix(matrix) {
    //     console.log("set view - playV")
    //     this.useStateFxMatrix(matrix)
    // }

    setMatrixV(size) {
        this.matrixV = new matrixV(size)
    }

    getMatrix() {
        return this.matrixV
    }

}


export default view;
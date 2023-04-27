//View - acts as an interface for react components.  Is updated by and injected as a dependency into the model.

//Game Status Table view react-interface
import optionsV from "./optionsV"

//Player Status Table view react-interface
import playerV from "./playerV"

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

class matrixV {

    constructor(size) {
        this.rows = []
        for (let i = 0; i < size; i++) {
            this.rows[i] = new matrixRowV(size)
        }
    }

    getRow(i) {
        return this.rows[i]
    }

    setCellColor(i, j, color) {
        this.rows[i].getCellV(j).setColor(color)
    }
}

class matrixRowV {
    constructor(size) {
        this.cells = []
        for (let j = 0; j < size; j++) {
            this.cells[j] = new matrixCellV(size)
        }
    }

    getCellV(j) {
        return this.cells[j]
    }

}

class matrixCellV {
    useStateFxColor = null
    useStateFxText = null

    setUseStateFxColor(fx) {
        this.useStateFxColor = fx
    }

    setColor(color) {
        this.useStateFxColor(color)
    }



}

export default view;
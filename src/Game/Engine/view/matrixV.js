//Matrix View



class hintsV {
    setUseStateFx(fx) {
        this.useStateFx = fx
    }
    setValue(hint) {
        this.useStateFx(hint)
    }
}


class matrixV {

    constructor(size) {
        this.rows = []
        for (let i = 0; i < size; i++) {
            this.rows[i] = new matrixRowV(size)
        }
    }

    //React Board Component uses
    getRow(i) {
        return this.rows[i]
    }

    setCellText(i, j, text) {
        this.rows[i].getCellV(j).setText(text)
    }
    setCellOwner(i, j, owner) {
        this.rows[i].getCellV(j).setOwner(owner)
    }
    setCellHint(playerId, coordinate, value) {
        this.rows[coordinate.y].getCellV(coordinate.x).setHint(playerId, value)
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
    useStateFxText = null
    useStateFxOwner = null
    useStateFxHints = null

    setUseStateFxText(fx) {
        this.useStateFxText = fx
    }
    setText(text) {
        this.useStateFxText(text)
    }

    // setUseStateFxTextColor(fx) {
    //     this.useStateFxTextColor = fx
    // }
    // setTextColor(color) {
    //     this.useStateFxTextColor(color)
    // }

    setUseStateFxOwner(fx) {
        this.useStateFxOwner = fx
    }
    setOwner(owner) {
        this.useStateFxOwner(owner)
    }

    //hints
    hintsArr = [new hintsV(), new hintsV()]

    getHintsV(playerId) {
        return this.hintsArr[playerId]
    }

    setHint(playerId, value) {
        this.hintsArr[playerId].setValue(value)
    }
}

export default matrixV;

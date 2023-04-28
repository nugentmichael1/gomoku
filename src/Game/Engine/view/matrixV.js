//Matrix View


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

    // setCellColor(i, j, color) {
    //     this.rows[i].getCellV(j).setColor(color)
    // }

    setCellText(i, j, text) {
        this.rows[i].getCellV(j).setText(text)
    }
    setCellOwner(i, j, owner) {
        this.rows[i].getCellV(j).setOwner(owner)
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
    useStateFxTextColor = null
    useStateFxOwner = null

    // setUseStateFxColor(fx) {
    //     this.useStateFxColor = fx
    // }

    // setColor(color) {
    //     this.useStateFxColor(color)
    // }

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
}

export default matrixV;
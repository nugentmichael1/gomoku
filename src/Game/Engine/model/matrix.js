//Matrix
//Used for model logic to keep track of player board choices.  Size x Size dimensions.

class matrix {
    constructor(size, view) {

        this.size = size

        this.view = view

        this.rows = []
        for (let i = 0; i < size; i++) {
            this.rows[i] = new matrixRow(size)
        }

        // this.rows = new Array(size).map(() => new matrixRow(size))

        // this.rows = new Array(size)
        // this.rows.forEach((row) => {
        //     row = new matrixRow(size)
        // })


        //set default matrix view
        // this.view.getPlay().setMatrixV(size)
    }

    //i=board row, which is like a y-axis, but counts down from top instead of up from bottom
    //j=cell column, which is like x-axis: counts normally - left to right
    getCellOwner(i, j) {
        // console.log("i:", i, "j", j)
        return this.rows[i].getCell(j).getOwner()
    }

    setCell(i, j, player, turn) {

        //set cell
        this.rows[i].getCell(j).setCell(player, turn)

        //set view
        this.view.getPlay().getMatrix().setCellColor(i, j, player.getColor())
        this.view.getPlay().getMatrix().setCellText(i, j, turn)

    }

    isCellClaimed(i, j) {
        return (this.rows[i].getCell(j).getOwner() === null)
    }
    // getRow(i) {
    //     return this.rows[i]
    // }

    //debug
    print() {
        this.rows.forEach(row => {
            row.print()
        })
    }

    clearView() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                this.view.getPlay().getMatrix().setCellColor(i, j, null)
                this.view.getPlay().getMatrix().setCellText(i, j, null)
            }
        }
    }

    getSize() {
        return this.size
    }

}

class matrixRow {
    constructor(size) {

        this.row = []
        for (let j = 0; j < size; j++) {
            this.row[j] = new matrixCell()
        }

        // this.row = new Array(size).map(() => new matrixCell)

        // this.row = new Array(size)
        // this.row.forEach((cell) => {
        //     cell = new matrixCell
        // })
    }
    getCell(j) {
        return this.row[j]
    }

    //debug
    print() {
        this.row.forEach(cell => {
            cell.printOwner()
        })
    }
}

class matrixCell {
    owner = null
    turnClaimed = null
    getOwner() {
        return this.owner
    }
    getTurnClaimed() {
        return this.turnClaimed
    }
    setCell(player, turn) {
        this.owner = player;
        this.turnClaimed = turn
    }

    //debug
    printOwner() {
        console.log(this.owner)
    }
}

export default matrix;
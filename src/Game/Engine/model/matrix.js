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
    }

    //i=board row, which is like a y-axis, but counts down from top instead of up from bottom
    //j=cell column, which is like x-axis: counts normally - left to right
    getCellOwner(i, j) {
        return this.rows[i].getCell(j).getOwner()
    }

    setCell(i, j, player, turn) {

        //set cell
        this.rows[i].getCell(j).setCell(player, turn)

        //set view
        this.view.getPlay().getMatrix().setCellOwner(i, j, player.getId())
        this.view.getPlay().getMatrix().setCellText(i, j, turn)
    }

    isCellClaimed(i, j) {
        return (this.rows[i].getCell(j).getOwner() === null)
    }

    setCellHints(i, j, hints) {
        this.rows[i].getCell(j).setHints(hints)
        this.view.getPlay().getMatrix().setCellHints(i, j, hints)
    }

    //debug
    print() {
        this.rows.forEach(row => {
            row.print()
        })
    }

    clearView() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                this.view.getPlay().getMatrix().setCellOwner(i, j, null)
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

    //assists moveAnalyze(). null: unowned; 0: player1; 1: player2
    owner = null

    turnClaimed = null

    //player 1 and 2 boolean values
    hints = [null, null]

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

    setHints(hints) {

        //Hints cannot exist on claimed cells
        if (this.owner !== null) return

        this.hints = hints
    }

    //debug
    printOwner() {
        console.log(this.owner)
    }
}

export default matrix;
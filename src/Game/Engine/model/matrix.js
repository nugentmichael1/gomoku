//Matrix
//Used for model logic to keep track of player board choices.  Size x Size dimensions.

class matrix {
    constructor(size) {
        this.rows = new Array(size)
        this.rows.forEach((row) => {
            row = new matrixRow(size)
        })
    }
    // getCell(i, j) {
    //     return rows[i][j]
    // }
    // setCell(i, j, player, turn) {
    //     const cell = this.getCell(i, j)
    //     cell.setCell(player, turn)
    // }
    getRow(i) {
        return this.rows[i]
    }
}

class matrixRow {
    constructor(size) {
        this.row = new Array(size)
        this.row.forEach((cell) => {
            cell = new matrixCell
        })
    }
    getCell(j) {
        return this.row[j]
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
    setOwnerTurnClaimed(player, turn) {
        this.owner = player;
        this.turnClaimed = turn
    }
}

export default matrix;


class hints {

    constructor(playerId, view) {
        this.playerId = playerId
        this.view = view
    }

    hashTbl = new Map()

    increment(coordinate) {

        //check to see if entry exists
        if (this.hashTbl.has(coordinate)) {
            //True

            //Get associated value and increment by 1
            const newValue = this.hashTbl.get(coordinate) + 1

            //Reset entry to newly incremented value
            this.hashTbl.set(coordinate, newValue)

            //update view
            this.updateView(coordinate, newValue)
        }
        else {
            //False

            //Create new entry with value of 1
            this.hashTbl.set(coordinate, 1)

            //update view
            this.updateView(coordinate, 1)
        }


    }

    decrement(coordinate) {
        //get previous value and subtract one from it
        const newValue = this.hashTbl.get(coordinate) - 1;

        console.log(newValue, coordinate)

        //reset hash table entry with decremented value
        this.hashTbl.set(coordinate, newValue)

        //update view
        this.updateView(coordinate, newValue)
    }

    //"Private" function
    updateView(coordinate, value) {
        this.view.getPlay().getMatrix().setCellHint(this.playerId, JSON.parse(coordinate), value);
    }

    reset() {
        //use each key of hash table to update view to 0
        const coordinates = this.hashTbl.keys()
        for (const coordinate of coordinates) {
            this.updateView(coordinate, 0)
        }

        //Clear out hashTbl
        this.hashTbl.clear()
    }
}

export default hints;
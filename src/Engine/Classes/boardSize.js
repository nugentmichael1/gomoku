
class boardSize {

    constructor(size, gameStatusInstance) {
        this.size = size
        this.gameStatusInstance = gameStatusInstance
    }

    change(size) {

        //debug
        // console.log(size)

        //confirm board size change if game is in progress
        if (this.gameStatusInstance.getGameInProgress() === true) {
            if (window.confirm("A board size change will erase current game's data.")) {
                this.size = size;

                return true;
            }
            return false;
        }
        else {
            this.size = size;
            return true;
        }

    }

    // change(size) {

    //     //debug
    //     // console.log(size)

    //     //confirm board size change if game is in progress
    //     if (this.gameStatusInstance.getGameInProgress() === true) {
    //         if (window.confirm("A board size change will erase current game's data.")) {
    //             this.size = size;

    //             return true;
    //         }
    //         return false;
    //     }
    //     else {
    //         this.size = size;
    //         return true;
    //     }

    // }

    getSize() {
        return this.size;
    }
}

export default boardSize;
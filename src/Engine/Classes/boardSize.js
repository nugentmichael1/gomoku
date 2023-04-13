
class boardSize {

    constructor(size) {
        this.size = size
    }

    change(size) {
        if (window.confirm("A board size change will erase current game's data.")) {
            this.size = size;
            return true;
        }
        return false;
    }

    getSize() {
        return this.size;
    }
}

export default boardSize;
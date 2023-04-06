
import coordinates from "./coordinates"

class fours {
    //need to build.  should be almost identicle to threes
    c5th0; //coordinates of 1st possible 5th
    c5th1; //coordinates of 2nd possible 5th
    next = null; //linked list pointer
    constructor(coordinates0, coordinates1, designation) {
        this.c0 = coordinates0;
        this.c1 = coordinates1;
        //tracks what type of four: vertical, horizontal, diagonal up, diagonal down
        this.designation = designation;
        //identify the four-chain by turn it was created
        this.id = gameInstance.getTurn();
        this.posFiveCoords();
    }
    posFiveCoords() {
        let x0, x1, y0, y1;
        x0 = x1 = y0 = y1 = -1;
        if (this.designation == 'h') {
            x0 = this.c0.x - 1;
            x1 = this.c1.x + 1;
            y0 = y1 = this.c0.y;
        }
        else if (this.designation == 'dUp') {
            x0 = this.c0.x - 1;
            y0 = this.c0.y + 1;
            x1 = this.c1.x + 1;
            y1 = this.c1.y - 1;
        }
        else if (this.designation == 'dDown') {
            x0 = this.c0.x - 1;
            y0 = this.c0.y - 1;
            x1 = this.c1.x + 1;
            y1 = this.c1.y + 1;
        }
        //this.designation == 'v'
        else {
            x0 = x1 = this.c0.x;
            y0 = this.c0.y - 1;
            y1 = this.c1.y + 1;
        }

        //top and left board boundary check
        if (x0 >= 0 && y0 >= 0
            && x0 < gameInstance.getBoardSize()
            && y0 < gameInstance.getBoardSize()) {
            //coordinate availability check
            if (gameInstance.getMatrixValue(y0, x0) == 0) {
                this.c5th0 = new coordinates(x0, y0);
            }
        }
        //bottom and right board boundary check
        if (x1 >= 0 && y1 >= 0
            && x1 < gameInstance.getBoardSize()
            && y1 < gameInstance.getBoardSize()) {
            //coordinate availability check
            if (gameInstance.getMatrixValue(y1, x1) == 0) {
                this.c5th1 = new coordinates(x1, y1);
            }
        }
    }
}

export default fours;
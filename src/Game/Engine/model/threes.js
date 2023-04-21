
import coordinates from "./coordinates"

//Needs turn, board size, and matrix value from model to remove "gameInstance"

class threes {
    c4th0;//coordinates of 1st possible 4th
    c4th1;//coordinates of 2nd possible 4th
    next = null;//linked list pointer
    constructor(coordinates0, coordinates1, des, turn, matrix, boardSize) {

        this.c0 = coordinates0;
        this.c1 = coordinates1;
        this.designation = des;
        this.posFourCoords(turn, matrix, boardSize);
        this.id = turn; //keep track which three segment

        //debug
        // console.log(coordinates0, coordinates1, des);
    }
    posFourCoords(matrix, boardSize) {
        let x0, x1 = -1;
        let y0, y1 = -1;
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
        else {//this.designation=='v'
            x0 = x1 = this.c0.x;
            y0 = this.c0.y - 1;
            y1 = this.c1.y + 1;
        }

        console.log(x0, x1, y0, y1);
        if (x0 >= 0 && y0 >= 0
            && x0 < boardSize
            && y0 < boardSize) { //inside board boundaries check

            //debug
            //console.log(gameInstance.getMatrixValue(y0, x0));

            if (matrix.getValue(y0, x0) == 0) {//coordinate availability check
                this.c4th0 = new coordinates(x0, y0);

                //debug
                // console.log(this.c4th0);
            }
        }
        if (x1 >= 0 && y1 >= 0
            && x1 < boardSize &&
            y1 < boardSize) {//inside board boundaries check
            if (matrix.getValue(y1, x1) == 0) {//coordinate availability check
                this.c4th1 = new coordinates(x1, y1);
            }
        }
    }
}

export default threes;
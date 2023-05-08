//Play view - handles anything related to game mechanics


//Matrix view - used by playV (not to be confused with playerV)
import matrixV from "./matrixV"

class playV {

    matrixV = new matrixV(19)

    setMatrixV(size) {
        this.matrixV = new matrixV(size)
    }

    getMatrix() {
        return this.matrixV
    }


    //turn
    useStateFxTurn = null

    setUseStateFxTurn(fx) {
        this.useStateFxTurn = fx
    }

    setTurn(num) {
        this.useStateFxTurn(num)
    }

}

export default playV;
//Turn model


class turn {

    constructor(view) {
        this.view = view
    }

    //current turn, used to track: total turns so far (n-1),
    // whether game has started (n>0), and
    value = null;

    //not necessary within class
    getValue() {
        return this.value;
    }

    //not necessary within class
    increment() {

        //increase variable by 1
        this.value++;

        //update view
        this.view.getPlay().setTurn(this.value)
    }

    start() {

        //set turn to 1
        this.value = 1

        //update view
        this.view.getPlay().setTurn(this.value)
    }

    clear() {

        // set turn to null
        this.value = null

        //update view
        this.view.getPlay().setTurn(null)
    }
}

export default turn;
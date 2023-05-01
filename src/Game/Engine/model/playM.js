//Play Model - Holds all classes related to game play.  (As opposed to options / settings.)

import timerM from "./timerM"
import player from "./player"
import threes from "./threes"
import fours from "./fours"
import coordinates from "./coordinates";
import matrix from "./matrix"
import turn from "./turnM"

class playM {

    constructor(view) {

        this.view = view

        this.timerM = new timerM(view)

        this.turn = new turn(view)


        this.players = [
            new player(0, view),
            new player(1, view)
        ]

        //Player who makes move
        this.activePlayer = this.players[0];
        //Player who is waiting
        this.passivePlayer = this.players[1];

        //2d array to track token pieces.  createMatrix()
        this.matrix = new matrix(15, view);
    }

    //Winner.  Null means game is not over, which includes not started.
    winner = null;

    //Called by optionsM to check if game in progress before board size change
    getTimer() {
        return this.timerM;
    }

    //Called by options to update player color, hints
    getPlayer(index) {
        return this.players[index]
    }

    //not necessary within class
    getActivePlayer() {
        return this.activePlayer
    }

    //Active player becomes passive and vice versa
    switchActivePlayer() {
        const temp = this.activePlayer
        this.activePlayer = this.passivePlayer
        this.passivePlayer = temp
        // this.activePlayer = 1 - this.activePlayer;
    }

    //checks if a move creates a three, four or five-long segment
    moveAnalyze(clickedCoords) {

        let x, x0, x1, y, y0, y1;
        x = x0 = x1 = clickedCoords.x;
        y = y0 = y1 = clickedCoords.y;

        //check horizontal
        for (let b = x - 1; b >= 0 && this.matrix.getCellOwner(y, b) === this.activePlayer; b--) {
            x0 = b;
        }
        for (let b = x + 1; b < this.matrix.getSize() && this.matrix.getCellOwner(y, b) === this.activePlayer; b++) {
            x1 = b;
        }
        //Checks for 3, 4, and 5 line, and records in player object
        this.conditionsCheck(x1 - x0, this.activePlayer, 'dUp', this.turn.getValue(), this.matrix, new coordinates(x0, y), new coordinates(x1, y))


        //check diagonal: bottom left to top right
        x0 = x1 = x;
        y0 = y1 = y;
        for (let a = y + 1, b = x - 1; a < this.matrix.getSize() && b >= 0 && this.matrix.getCellOwner(a, b) === this.activePlayer; a++, b--) {
            x0 = b;
            y0 = a;
        }
        for (let a = y - 1, b = x + 1; a >= 0 && b < this.matrix.getSize() && this.matrix.getCellOwner(a, b) === this.activePlayer; a--, b++) {
            x1 = b;
            y1 = a;
        }
        //Checks for 3, 4, and 5 line, and records in player object
        this.conditionsCheck(x1 - x0, this.activePlayer, 'dUp', this.turn.getValue(), this.matrix, new coordinates(x0, y0), new coordinates(x1, y1))

        //check diagonal: top left to bottom right
        x0 = x1 = x;
        y0 = y1 = y;
        for (let a = y - 1, b = x - 1; a >= 0 && b >= 0 && this.matrix.getCellOwner(a, b) === this.activePlayer; a--, b--) {
            x0 = b;
            y0 = a;
        }
        for (let a = y + 1, b = x + 1; a < this.matrix.getSize() && b < this.matrix.getSize() && this.matrix.getCellOwner(a, b) === this.activePlayer; a++, b++) {
            x1 = b;
            y1 = a;
        }
        //Checks for 3, 4, and 5 line, and records in player object
        this.conditionsCheck(x1 - x0, this.activePlayer, 'dDown', this.turn.getValue(), this.matrix, new coordinates(x0, y0), new coordinates(x1, y1))

        //check vertical
        //x0 = x1 = x;//not used
        y0 = y1 = y;
        for (let a = y - 1; a >= 0 && this.matrix.getCellOwner(a, x) === this.activePlayer; a--) {
            y0 = a;
        }
        for (let a = y + 1; a < this.matrix.getSize() && this.matrix.getCellOwner(a, x) === this.activePlayer; a++) {
            y1 = a;
        }
        //Checks for 3, 4, and 5 line, and records in player object
        this.conditionsCheck(y1 - y0, this.activePlayer, 'v', this.turn.getValue(), this.matrix, new coordinates(x, y0), new coordinates(x, y1))
    }

    conditionsCheck(difference, activePlayer, direction, turn, matrix, coordinates0, coordinates1) {

        //In case game every changes.  Replace condition rules with variables.  Subtract 1 from each to account for distance that includes both points.
        // let firstCondition = 3;
        // let secondCondition = 4;
        // let winCondition = 5;

        //Three line
        if (difference === 2) {
            activePlayer.addThree(
                new threes(
                    coordinates0, coordinates1,
                    direction,
                    turn,
                    matrix,
                )
            );
        }
        //Four line
        else if (difference === 3) {
            activePlayer.addFour(
                new fours(
                    coordinates0, coordinates1,
                    direction,
                    turn,
                    matrix,
                ));
        }
        //Win condition (Five line). This accomodates overlines since the for-loop above moves as far as possible (ie will go to 6 or more).
        else if (difference === 4) {
            this.winner = activePlayer;
        }
    }

    start() {

        //game already in progress guard
        if (this.getTimer().getActive() === true) return

        //start timer
        this.getTimer().start()

        //initialize turn count
        this.turn.start()

        //set Active Player to first player
        this.activePlayer = this.players[0];

        //set passive player to second player
        this.passivePlayer = this.players[1];

        //update first player's turn display
        // this.activePlayer.updateTurnDisplay(this.turn.getValue())
    }

    reset(size) {

        //Guard: Game started, but not finished, and data loss confirmation
        if (this.winner === null && this.timerM.getActive() === true &&
            !window.confirm("Are you sure?  Current game progress will be lost.")) return false


        //clear user's view of board
        this.matrix.clearView()

        //clear matrix with new instantiation of current boardsize
        this.matrix = new matrix(
            (size === undefined) ? this.matrix.getSize() : size,
            this.view
        )

        //Guard: game not in progress.  no need to reset stats.
        if (this.timerM.getActive() === false) return true

        //Reset timer
        this.getTimer().reset()

        //current turn, can be used to track total turns so far (n-1).
        this.turn.clear()

        //reset player color display's text to nothing
        // this.activePlayer.updateTurnDisplay("")

        //winner.  indirectly indicates game completion status.
        this.winner = null

        //resets threes count, fours count, and hints
        this.players.forEach(p => {
            p.flushStats();
        })

        //provide confirmation to view that board size can be changed
        return true
    }

    clicked(i, j) {

        //j and i are flipped to better align with x as horizontal and y as vertical
        let clickedCoords = new coordinates(j, i);

        //Guard: Verify game is in progress
        if (this.turn.getValue() === null) {
            alert('Click "Start" button next to timer to begin game.');
            return;
        }

        //Guard: Verify game is not over, and clicked cell is still claimable
        if (this.winner !== null || !this.matrix.isCellClaimed(i, j)) return

        //reset hints for current player since he's already made a decision.
        //need to remove hints before 3s and 4s are removed so we know where they
        //are still.
        if (this.activePlayer.hintState) this.activePlayer.hideHints();

        //update player turn message status, and matrix index


        //Claim matrix cell.  Updates view's board.
        this.matrix.setCell(i, j, this.activePlayer, this.turn.getValue())

        //Game completion checks
        this.moveAnalyze(clickedCoords)

        if (this.winner !== null) {


            alert('Player ' + (this.activePlayer.id + 1) + ' won!');

            //Send game stats to backend for leader board table
            this.recordWin(this.winner);

            //this.winner is now used to check completion status.
            // this.setCS(1);

            this.timerM.stop()
        }
        //tie check
        else if (this.turn.getValue() === this.matrix.getSize() ** 2) {

            alert('Draw!');

            this.timerM.stop()
        }

        //increase turn count.  update view.
        this.turn.increment();


        //sifts respective player objects' 3s and 4s arrays for any changes to hints
        this.players.forEach(p => {
            p.cleanStats(clickedCoords)
        })

        //show hints for next player if it's enabled
        if (this.passivePlayer.hintState) this.passivePlayer.showHints();

        //update player displays
        this.players.forEach(p => {
            p.updateViewThrees()
            p.updateViewFours()
        })

        //update which player's turn it is
        this.switchActivePlayer();
    }

    recordWin() {
        // let httpRequest = new XMLHttpRequest();
        // if (!httpRequest) {
        //     console.log('httpRequest instance failed in recordWin()');
        //     return false;
        // }

        // httpRequest.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         //console.log(this.responseText);
        //     }
        // }
        // httpRequest.open('POST', '../php/recordGame.php');
        // httpRequest.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

        // //send game time, and turn count.  username will be taken from session variable
        // // because only logged in players will be recorded
        // let gameTime = document.getElementById('timer').innerText;
        // let turn = this.turn.getValue();

        // //0 means player 2 won, 1 means player 1 won.  It's more like a true/false for "Did player 1 win?"
        // let winner = (this.getActivePlayer()) ? 0 : 1;

        // //debug
        // //console.log(gameTime);
        // //console.log(turn);
        // //console.log(winner);
        // let postString = 'player1=' + p[0].name + '&time=' + gameTime + '&turn=' + turn;
        // postString += '&winner=' + winner + '&player2=' + p[1].name;
        // httpRequest.send(postString);

    }
}

export default playM



// //checks if a move creates a three, four or five-long segment
// moveAnalyze(clickedCoords) {

//     let firstCondition = 3;
//     let secondCondition = 4;
//     let winCondition = 5;
//     let winStatus = false;

//     let x, x0, x1, y, y0, y1;
//     x = x0 = x1 = clickedCoords.x;
//     y = y0 = y1 = clickedCoords.y;
//     // let bSize = this.matrix.getSize();

//     //check horizontal
//     for (let b = x - 1; b >= 0 && this.matrix.getCellOwner(y, b) === this.activePlayer; b--) {
//         x0 = b;
//     }
//     for (let b = x + 1; b < this.matrix.getSize() && this.matrix.getCellOwner(y, b) === this.activePlayer; b++) {
//         x1 = b;
//     }
//     //3s check
//     if (x1 - x0 === (firstCondition - 1)) {

//         this.activePlayer.addThree(
//             new threes(
//                 new coordinates(x0, y),
//                 new coordinates(x1, y),
//                 'h',
//                 this.turn,
//                 this.matrix,
//             )
//         );
//     }
//     //4s check
//     else if (x1 - x0 === secondCondition - 1) {
//         this.activePlayer.addFour(
//             new fours(
//                 new coordinates(x0, y),
//                 new coordinates(x1, y),
//                 'h',
//                 this.turn,
//                 this.matrix,
//             )
//         );
//     }
//     // 5s/Win Check.  This accomodates overlines since the for-loop above moves as far as possible (ie will go to 6 or more).
//     else if (x1 - x0 === winCondition - 1) {
//         winStatus = this.activePlayer.name;
//     }

//     //check diagonal: bottom left to top right
//     x0 = x1 = x;
//     y0 = y1 = y;
//     for (let a = y + 1, b = x - 1; a < this.matrix.getSize() && b >= 0 && this.matrix.getCellOwner(a, b) === this.activePlayer; a++, b--) {
//         x0 = b;
//         y0 = a;
//     }
//     for (let a = y - 1, b = x + 1; a >= 0 && b < this.matrix.getSize() && this.matrix.getCellOwner(a, b) === this.activePlayer; a--, b++) {
//         x1 = b;
//         y1 = a;
//     }

//     //could also check y0-y1
//     if (x1 - x0 === firstCondition - 1) {

//         this.activePlayer.addThree(
//             new threes(
//                 new coordinates(x0, y0),
//                 new coordinates(x1, y1),
//                 'dUp',
//                 this.turn,
//                 this.matrix,
//             )
//         );
//     }
//     else if (x1 - x0 === secondCondition - 1) {
//         this.activePlayer.addFour(
//             new fours(
//                 new coordinates(x0, y0),
//                 new coordinates(x1, y1),
//                 'dUp',
//                 this.turn,
//                 this.matrix,
//             )
//         );
//     }
//     else if (x1 - x0 === winCondition - 1) {
//         winStatus = this.activePlayer.name;
//     }

//     //check diagonal: top left to bottom right
//     x0 = x1 = x;
//     y0 = y1 = y;
//     for (let a = y - 1, b = x - 1; a >= 0 && b >= 0 && this.matrix.getCellOwner(a, b) === this.activePlayer; a--, b--) {
//         x0 = b;
//         y0 = a;
//     }
//     for (let a = y + 1, b = x + 1; a < this.matrix.getSize() && b < this.matrix.getSize() && this.matrix.getCellOwner(a, b) === this.activePlayer; a++, b++) {
//         x1 = b;
//         y1 = a;
//     }

//     //could also check y1-y0
//     if (x1 - x0 === firstCondition - 1) {
//         this.activePlayer.addThree(
//             new threes(
//                 new coordinates(x0, y0),
//                 new coordinates(x1, y1),
//                 'dDown',
//                 this.turn,
//                 this.matrix,
//             )
//         );
//     }
//     else if (x1 - x0 === secondCondition - 1) {
//         console.log(x0, y0, x1, y1);
//         this.activePlayer.addFour(
//             new fours(
//                 new coordinates(x0, y0),
//                 new coordinates(x1, y1),
//                 'dDown',
//                 this.turn,
//                 this.matrix,
//             )
//         );
//     }
//     else if (x1 - x0 === winCondition - 1) {
//         winStatus = this.activePlayer.name;
//     }

//     //check vertical
//     //x0 = x1 = x;//not used
//     y0 = y1 = y;
//     for (let a = y - 1; a >= 0 && this.matrix.getCellOwner(a, x) === this.activePlayer; a--) {
//         y0 = a;
//     }
//     for (let a = y + 1; a < this.matrix.getSize() && this.matrix.getCellOwner(a, x) === this.activePlayer; a++) {
//         y1 = a;
//     }
//     if (y1 - y0 === firstCondition - 1) {
//         this.activePlayer.addThree(
//             new threes(
//                 new coordinates(x, y0),
//                 new coordinates(x, y1),
//                 'v',
//                 this.turn,
//                 this.matrix,
//             )
//         );
//     }
//     else if (y1 - y0 === secondCondition - 1) {
//         this.activePlayer.addFour(
//             new fours(
//                 new coordinates(x, y0),
//                 new coordinates(x, y1),
//                 'v',
//                 this.turn,
//                 this.matrix,
//             ));
//     }
//     else if (y1 - y0 === winCondition - 1) {
//         winStatus = this.activePlayer.name;
//     }

//     return winStatus;
// }
//Play Model - Holds all classes related to game play.  (As opposed to options / settings.)

import timerM from "./timerM"
import player from "./player"
import threes from "./threes"
import fours from "./fours"
import coordinates from "./coordinates";
import matrix from "./matrix"

class playM {

    constructor(view) {

        this.view = view

        this.timerM = new timerM(view)


        this.players = [
            new player(0, view),
            new player(1, view)
        ]
        // this.players = new Array(2)
        // this.players[0] = new player(0, view)
        // this.players[1] = new player(1, view)
        //Player who makes move
        this.activePlayer = this.players[0];
        //Player who is waiting
        this.passivePlayer = this.players[1];

        //2d array to track token pieces.  createMatrix()
        //assists moveAnalyze(). 0: unplayed. 1: player1; 2: player2
        this.matrix = new matrix(15, view);


    }

    //size of board and matrix in one dimension
    // size = null

    //current turn, used to track: total turns so far (n-1),
    // whether game has started (n>0), and
    turn = null;



    //connections win condition (connections needed to win)
    cWinC = 5;

    //game completion status: 0 is incomplete, 1 is completed.
    cS = 0;



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

    //not necessary within class
    getTurn() {
        return this.turn;
    }

    //not necessary within class
    incrementTurn() {
        this.turn++;
    }

    //not necessary within class
    getCS() {
        return this.cS;
    }

    //not necesssary within class
    setCS(val) {
        this.cS = val;
    }

    // setBoardSize(size) {
    //     this.size = size
    // }
    getBoardSize() {
        return this.matrix.length;
    }


    //checks if a move creates a three, four or five-long segment
    moveAnalyze(clickedCoords) {

        let firstCondition = 3;
        let secondCondition = 4;
        let winCondition = 5;
        let winStatus = false;

        let x, x0, x1, y, y0, y1;
        x = x0 = x1 = clickedCoords.x;
        y = y0 = y1 = clickedCoords.y;
        // let bSize = this.matrix.length;

        //check horizontal
        for (let b = x - 1; b >= 0 && this.matrix.getCellOwner(y, b) === this.activePlayer; b--) {
            x0 = b;
        }
        for (let b = x + 1; b < this.matrix.length && this.matrix.getCellOwner(y, b) === this.activePlayer; b++) {
            x1 = b;
        }
        //3s check
        if (x1 - x0 === (firstCondition - 1)) {

            this.activePlayer.addThree(
                new threes(
                    new coordinates(x0, y),
                    new coordinates(x1, y),
                    'h',
                    this.turn,
                    this.matrix,
                    this.getBoardSize()
                )
            );
        }
        //4s check
        else if (x1 - x0 === secondCondition - 1) {
            this.activePlayer.addFour(
                new fours(
                    new coordinates(x0, y),
                    new coordinates(x1, y),
                    'h',
                    this.turn,
                    this.matrix,
                    this.getBoardSize()
                )
            );
        }
        // 5s/Win Check.  This accomodates overlines since the for-loop above moves as far as possible (ie will go to 6 or more).
        else if (x1 - x0 === winCondition - 1) {
            winStatus = this.activePlayer.name;
        }

        //check diagonal: bottom left to top right
        x0 = x1 = x;
        y0 = y1 = y;
        for (let a = y + 1, b = x - 1; a < this.matrix.length && b >= 0 && this.matrix.getCellOwner(a, b) === this.activePlayer; a++, b--) {
            x0 = b;
            y0 = a;
        }
        for (let a = y - 1, b = x + 1; a >= 0 && b < this.matrix.length && this.matrix.getCellOwner(a, b) === this.activePlayer; a--, b++) {
            x1 = b;
            y1 = a;
        }

        //could also check y0-y1
        if (x1 - x0 === firstCondition - 1) {

            this.activePlayer.addThree(
                new threes(
                    new coordinates(x0, y0),
                    new coordinates(x1, y1),
                    'dUp',
                    this.turn,
                    this.matrix,
                    this.getBoardSize()
                )
            );
        }
        else if (x1 - x0 === secondCondition - 1) {
            this.activePlayer.addFour(
                new fours(
                    new coordinates(x0, y0),
                    new coordinates(x1, y1),
                    'dUp',
                    this.turn,
                    this.matrix,
                    this.getBoardSize()
                )
            );
        }
        else if (x1 - x0 === winCondition - 1) {
            winStatus = this.activePlayer.name;
        }



        //check diagonal: top left to bottom right
        x0 = x1 = x;
        y0 = y1 = y;
        for (let a = y - 1, b = x - 1; a >= 0 && b >= 0 && this.matrix.getCellOwner(a, b) === this.activePlayer; a--, b--) {
            x0 = b;
            y0 = a;
        }
        for (let a = y + 1, b = x + 1; a < this.matrix.length && b < this.matrix.length && this.matrix.getCellOwner(a, b) === this.activePlayer; a++, b++) {
            x1 = b;
            y1 = a;
        }
        //could also check y1-y0
        if (x1 - x0 === firstCondition - 1) {
            this.activePlayer.addThree(
                new threes(
                    new coordinates(x0, y0),
                    new coordinates(x1, y1),
                    'dDown',
                    this.turn,
                    this.matrix,
                    this.getBoardSize()
                )
            );
        }
        else if (x1 - x0 === secondCondition - 1) {
            console.log(x0, y0, x1, y1);
            this.activePlayer.addFour(
                new fours(
                    new coordinates(x0, y0),
                    new coordinates(x1, y1),
                    'dDown',
                    this.turn,
                    this.matrix,
                    this.getBoardSize()
                )
            );
        }
        else if (x1 - x0 === winCondition - 1) {
            winStatus = this.activePlayer.name;
        }

        //check vertical
        //x0 = x1 = x;//not used
        y0 = y1 = y;
        for (let a = y - 1; a >= 0 && this.matrix.getCellOwner(a, x) === this.activePlayer; a--) {
            y0 = a;
        }
        for (let a = y + 1; a < this.matrix.length && this.matrix.getCellOwner(a, x) === this.activePlayer; a++) {
            y1 = a;
        }
        if (y1 - y0 === firstCondition - 1) {
            this.activePlayer.addThree(
                new threes(
                    new coordinates(x, y0),
                    new coordinates(x, y1),
                    'v',
                    this.turn,
                    this.matrix,
                    this.getBoardSize()
                )
            );
        }
        else if (y1 - y0 === secondCondition - 1) {
            this.activePlayer.addFour(
                new fours(
                    new coordinates(x, y0),
                    new coordinates(x, y1),
                    'v',
                    this.turn,
                    this.matrix,
                    this.getBoardSize()
                ));
        }
        else if (y1 - y0 === winCondition - 1) {
            winStatus = this.activePlayer.name;
        }

        return winStatus;
    }

    start() {

        //game already in progress guard
        if (this.getTimer().getActive() === true) return

        //start timer
        this.getTimer().start()

        //initialize turn count
        this.turn = 1

        //set Active Player to first player
        this.activePlayer = this.players[0];

        //set passive player to second player
        this.passivePlayer = this.players[1];

        //update first player's turn display
        this.activePlayer.updateTurnDisplay(this.turn)


    }

    reset(size) {

        //Guard: Game in progress && data loss confirmation
        if (this.timerM.getActive() === true &&
            !window.confirm("Are you sure?  Current game data will be lost.")) return


        this.matrix.clearView()

        //clear matrix with new instantiation of current boardsize
        this.matrix = new matrix(
            (size === undefined) ? this.matrix.getSize() : size,
            this.view
        )

        console.log(this.matrix)

        if (this.timerM.getActive() === false) return

        //Reset timer
        this.getTimer().reset()

        //current turn, can be used to track total turns so far (n-1).
        this.turn = null;

        //reset player color display's text to nothing
        this.activePlayer.updateTurnDisplay("")

        //completion status
        this.cS = 0;

        //create board class object with default size of 15.
        // this.board = new board(this.size);




        //reset hints & player stats
        /*
        document.getElementById('p1Hints').checked = false;
        document.getElementById('p2Hints').checked = false;
        p[0].threesArr = new Array();
        p[1].threesArr = new Array();
        p[0].threesCount = 0;
        p[1].threesCount = 0;
        document.getElementById('p1Threes').innerText = '';
        document.getElementById('p2Threes').innerText = '';
        */

        this.players.forEach(p => {
            p.flushStats();
        })
        // p[0].flushStats();
        // p[1].flushStats();


    }

    clicked(i, j) {

        //j and i are flipped to better align with x as horizontal and y as vertical
        let clickedCoords = new coordinates(j, i);

        //Guard: Verify game is in progress
        if (this.getTurn() === null) {
            alert('Click "Start" button next to timer to begin game.');
            return;
        }

        //Guard: Verify game is not over, and clicked cell is still claimable
        if (this.getCS() !== 0 || !this.matrix.isCellClaimed(i, j)) return


        //get td to be changed
        // let td = document.getElementById(i + '-' + j);

        //set td background to a circle.
        //td.style.borderRadius = '50% 50%';


        //reset hints for current player since he's already made a decision.
        //need to remove hints before 3s and 4s are removed so we know where they
        //are still.
        if (this.activePlayer.hintState) this.activePlayer.hideHints();

        //mark the cell as taken 
        // td.className = 'claimed';

        //check who's turn it is, set appropriately colored "Go" piece, 
        //update player turn message status, and matrix index

        //Update players turn message status
        this.passivePlayer.updateTurnDisplay(this.getTurn())
        this.activePlayer.updateTurnDisplay("")
        //Claim matrix cell
        this.matrix.setCell(i, j, this.activePlayer, this.getTurn())

        //debug
        // this.matrix.print()

        //update board view

        // if (this.getActivePlayer() == 1) {
        // 	let p1ColDisp = document.getElementById('p1ColDisp');
        // 	p1ColDisp.style.color = p[1].color;
        // 	p1ColDisp.innerText = this.getTurn() + 1;
        // 	document.getElementById('p2ColDisp').innerText = ' ';
        // 	td.style.backgroundColor = p[1].color;
        // 	td.style.color = p[0].color;//number color
        // 	td.children[0].style.backgroundColor = p[1].color;
        // 	td.children[0].style.opacity = "0";
        // 	td.children[1].style.backgroundColor = p[1].color;
        // 	td.children[1].style.opacity = "0";
        // 	this.matrix.setCell(i, j, 2, this.getTurn());
        // 	td.appendChild(document.createTextNode(this.getTurn()));
        // 	td.className = td.className + " p2Color";
        // }
        // else {
        // 	let p2ColDisp = document.getElementById('p2ColDisp')
        // 	p2ColDisp.style.color = p[0].color;
        // 	p2ColDisp.innerText = this.getTurn() + 1;
        // 	document.getElementById('p1ColDisp').innerText = ' ';
        // 	td.style.backgroundColor = p[0].color;
        // 	td.style.color = p[1].color;//number color
        // 	td.children[0].style.backgroundColor = p[0].color;
        // 	td.children[0].style.opacity = "0";
        // 	td.children[1].style.backgroundColor = p[0].color;
        // 	td.children[1].style.opacity = "0";
        // 	this.matrix.setCell(i, j, 1, this.getTurn());
        // 	td.appendChild(document.createTextNode(this.getTurn()));
        // 	td.className = td.className + " p1Color";
        // }

        //Game completion checks
        //returns true when a win is detected
        if (this.moveAnalyze(clickedCoords)) {
            alert(this.activePlayer.name + ' won!');
            this.recordWin();
            this.setCS(1);

            //use stop instead?
            clearInterval(this.timer);
        }
        //tie check
        else if (this.getTurn() === this.matrix.length ** 2) {
            //else if (turn++ == this.matrix.length ** 2) {
            alert('Draw!');
            clearInterval(this.timer);
        }

        this.incrementTurn();


        //sifts respective player objects' 3s and 4s arrays for any changes to hints
        this.players.forEach(p => {
            p.cleanStats(clickedCoords)
        })
        // p[0].cleanStats(clickedCoords);
        // p[1].cleanStats(clickedCoords);

        //show hints for next player if it's enabled
        if (this.passivePlayer.hintState) this.passivePlayer.showHints();

        //update player displays
        // document.getElementById('p1Threes').innerText = p[0].threesCount;
        // document.getElementById('p2Threes').innerText = p[1].threesCount;
        // document.getElementById('p1Fours').innerText = p[0].foursCount;
        // document.getElementById('p2Fours').innerText = p[1].foursCount;

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
        // let turn = this.getTurn();

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
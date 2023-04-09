//Model

import player from "./player"
// import board from "./Board"
import coordinates from "./coordinates";

class model {

	constructor(size) {
		console.log("model constructor", Math.random())
		//current turn, used to track: total turns so far (n-1),
		// whether game has started (n>0), and
		this.turn = 0;
		//tracks which player's turn: 0=player1, 1=player2. -1: game hasn't started yet.
		this.playerTurn = 0;
		//connections win condition (connections needed to win)
		this.cWinC = 5;
		//game completion status: 0 is incomplete, 1 is completed.
		this.cS = 0;
		//Game Timer.  used to stop displayed timer when game restarts or ends.
		//tracks whether timer has started
		this.timer = undefined;
		//create board class object with default size of 15.
		// this.board = new board(size);
		//2d array to track token pieces.  createMatrix()
		//assists moveAnalyze(). 0: unplayed. 1: player1; 2: player2
		this.matrix = new Array(size);
		for (let i = 0; i < size; i++) {
			this.matrix[i] = new Array(size);
			this.matrix[i].fill(0);
		}
		//board/matrix size. default to 15.  can be changed to 19.
		this.size = size;
	}
	getTurn() {
		return this.turn;
	}
	incrementTurn() {
		this.turn++;
	}
	getCS() {
		return this.cS;
	}
	setCS(val) {
		this.cS = val;
	}
	getMatrixValue(i, j) {
		return this.matrix[i][j];
	}
	getPlayerTurn() {
		return this.playerTurn;
	}
	switchPlayerTurn() {
		this.playerTurn = 1 - this.playerTurn;
	}
	getBoardSize() {
		return this.board.getSize();
	}
	setMatrix(i, j, val) {
		this.matrix[i][j] = val;
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
		let pMark = gameInstance.getPlayerTurn() + 1;
		let pt = gameInstance.getPlayerTurn();
		let bSize = gameInstance.getBoardSize();

		//check horizontal
		for (let b = x - 1; b >= 0 && this.matrix[y][b] == pMark; b--) {
			x0 = b;
		}
		for (let b = x + 1; b < bSize && this.matrix[y][b] == pMark; b++) {
			x1 = b;
		}
		//3s check
		if (x1 - x0 == (firstCondition - 1)) {
			p[pt].addThree(new coordinates(x0, y), new coordinates(x1, y), 'h');
		}
		//4s check
		else if (x1 - x0 == secondCondition - 1) {
			p[pt].addFour(new coordinates(x0, y), new coordinates(x1, y), 'h');
		}
		// 5s/Win Check.  This accomodates overlines since the for-loop above moves as far as possible (ie will go to 6 or more).
		else if (x1 - x0 == winCondition - 1) {
			winStatus = p[pt].name;
		}

		//check diagonal: bottom left to top right
		x0 = x1 = x;
		y0 = y1 = y;
		for (let a = y + 1, b = x - 1; a < bSize && b >= 0 && this.matrix[a][b] == pMark; a++, b--) {
			x0 = b;
			y0 = a;
		}
		for (let a = y - 1, b = x + 1; a >= 0 && b < bSize && this.matrix[a][b] == pMark; a--, b++) {
			x1 = b;
			y1 = a;
		}

		//could also check y0-y1
		if (x1 - x0 == firstCondition - 1) {
			p[pt].addThree(new coordinates(x0, y0), new coordinates(x1, y1), 'dUp');
		}
		else if (x1 - x0 == secondCondition - 1) {
			p[pt].addFour(new coordinates(x0, y0), new coordinates(x1, y1), 'dUp');
		}
		else if (x1 - x0 == winCondition - 1) {
			winStatus = p[pt].name;
		}



		//check diagonal: top left to bottom right
		x0 = x1 = x;
		y0 = y1 = y;
		for (let a = y - 1, b = x - 1; a >= 0 && b >= 0 && this.matrix[a][b] == pMark; a--, b--) {
			x0 = b;
			y0 = a;
		}
		for (let a = y + 1, b = x + 1; a < bSize && b < bSize && this.matrix[a][b] == pMark; a++, b++) {
			x1 = b;
			y1 = a;
		}
		//could also check y1-y0
		if (x1 - x0 == firstCondition - 1) {
			p[pt].addThree(new coordinates(x0, y0), new coordinates(x1, y1), 'dDown');
		}
		else if (x1 - x0 == secondCondition - 1) {
			console.log(x0, y0, x1, y1);
			p[pt].addFour(new coordinates(x0, y0), new coordinates(x1, y1), 'dDown');
		}
		else if (x1 - x0 == winCondition - 1) {
			winStatus = p[pt].name;
		}

		//check vertical
		//x0 = x1 = x;//not used
		y0 = y1 = y;
		for (let a = y - 1; a >= 0 && this.matrix[a][x] == pMark; a--) {
			y0 = a;
		}
		for (let a = y + 1; a < bSize && this.matrix[a][x] == pMark; a++) {
			y1 = a;
		}
		if (y1 - y0 == firstCondition - 1) {
			p[pt].addThree(new coordinates(x, y0), new coordinates(x, y1), 'v');
		}
		else if (y1 - y0 == secondCondition - 1) {
			p[pt].addFour(new coordinates(x, y0), new coordinates(x, y1), 'v');
		}
		else if (y1 - y0 == winCondition - 1) {
			winStatus = p[pt].name;
		}

		return winStatus;
	}

	boardSizeChange(size) {

		//if game is in progress, confirm user understands it will be reset 
		// upon board size change.
		if (this.timer != undefined) {
			let question = "Change board size to " + size + "?  "
			let warning = "All progress of current game will be lost."
			if (!window.confirm(question + warning)) {
				//put radio button back to where it was before user changed it
				let radioId = "radio" + ((size == 15) ? 19 : 15);
				document.getElementById(radioId).checked = true;
				return;
			}
			this.size = size;

			//resets the clock, board, matrix, and all game variables (except size).
			this.restart();
		}
		else {
			this.size = size;
			//remove board's table through dom
			let boardTbl = document.getElementById('board');
			boardTbl.parentNode.removeChild(boardTbl);
			//create new board
			// this.board = new board(this.size);
			//new matrix
			this.matrix = new Array(this.size);
			for (let i = 0; i < this.size; i++) {
				this.matrix[i] = new Array(this.size);
				this.matrix[i].fill(0);
			}
		}

	}
	start() {
		if (this.timer == undefined) {
			gameInstance.incrementTurn();
			let timerElement = document.getElementById('timer');
			let buttonElement = document.getElementById('startBut');
			buttonElement.value = "Restart";
			buttonElement.onclick = gameInstance.restart;

			let p1ColDisp = document.getElementById('p1ColDisp');
			p1ColDisp.style.color = p[1].color;
			p1ColDisp.innerText = gameInstance.turn;

			let start = Date.now();
			//something weird about setInterval required the specific object instead of the class (this) to hold its return value.
			gameInstance.timer = setInterval(function () {
				//milliseconds elapsed since start (stackoverflow help)
				let delta = Date.now() - start;
				//milliseconds to seconds.
				timerElement.innerText = Math.floor(delta / 1000);
			}, 200);
			gameInstance.playerTurn = 0;
		}
	}

	restart() {
		//something weird about setInterval required the specific object instead of the class (this) to hold its return value.
		clearInterval(gameInstance.timer);
		gameInstance.timer = undefined;
		document.getElementById('timer').innerText = 'Timer';
		let timeButton = document.getElementById('startBut');
		timeButton.value = "Start";
		timeButton.onclick = gameInstance.start;

		//remove old board
		//remove board's table through dom
		let board = document.getElementById('board');
		board.parentNode.removeChild(board);


		// called as separate function to access "this" capabilities.
		// "restart()" is occasionally called from the html's input button,
		// and not this class, which makes the variables undefined or random.
		gameInstance.reset();
	}

	// reset all variables to default: start state, completion state, 
	// playerTurn, turn, timer.
	reset() {
		//reset player color display's text to nothing
		//console.log(this.getPlayerTurn() == 1);
		//console.log(this.getPlayerTurn());
		if (this.getPlayerTurn() == 1) {
			document.getElementById('p2ColDisp').innerText = ' ';
		}
		else {
			document.getElementById('p1ColDisp').innerText = ' ';
		}

		this.timer = undefined;
		//current turn, can be used to track total turns so far (n-1).
		this.turn = 0;
		//tracks which player's turn: 0=player1, 1=player2. -1: game hasn't started yet.
		this.playerTurn = 0;
		//connections win condition (connections needed to win)
		this.cS = 0;
		//create board class object with default size of 15.
		// this.board = new board(this.size);
		//2d array to track token pieces.  createMatrix()
		//assists moveAnalyze(). 0: unplayed. 1: player1; 2: player2
		this.matrix = new Array(this.size);
		for (let i = 0; i < this.size; i++) {
			this.matrix[i] = new Array(this.size);
			this.matrix[i].fill(0);
		}

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
		p[0].flushStats();
		p[1].flushStats();


	}

	clicked(i, j) {

		// console.log('clicked function');
		//console.log(i, j);

		//j and i are flipped to better align with x as horizontal and y as vertical
		let clickedCoords = new coordinates(j, i);


		//Verify game is in progress
		if (this.getTurn() == 0) {
			alert('Click \"Start\" button next to timer to begin game.');
			return;
		}

		//check matrix for move clearance
		if (this.getCS() == 0 && gameInstance.getMatrixValue(i, j) == 0) {
			//get td to be changed
			let td = document.getElementById(i + '-' + j);

			//set td background to a circle.
			//td.style.borderRadius = '50% 50%';


			//reset hints for current player since he's already made a decision.
			//need to remove hints before 3s and 4s are removed so we know where they
			//are still.
			if (p[this.getPlayerTurn()].hintState) p[this.getPlayerTurn()].hideHints();

			//mark the cell as taken 
			td.className = 'claimed';

			//check who's turn it is, set appropriately colored "Go" piece, 
			//update player turn message status, and matrix index
			if (this.getPlayerTurn() == 1) {
				let p1ColDisp = document.getElementById('p1ColDisp');
				p1ColDisp.style.color = p[1].color;
				p1ColDisp.innerText = this.getTurn() + 1;
				document.getElementById('p2ColDisp').innerText = ' ';
				td.style.backgroundColor = p[1].color;
				td.style.color = p[0].color;//number color
				td.children[0].style.backgroundColor = p[1].color;
				td.children[0].style.opacity = "0";
				td.children[1].style.backgroundColor = p[1].color;
				td.children[1].style.opacity = "0";
				this.setMatrix(i, j, 2);
				td.appendChild(document.createTextNode(gameInstance.getTurn()));
				td.className = td.className + " p2Color";
			}
			else {
				let p2ColDisp = document.getElementById('p2ColDisp')
				p2ColDisp.style.color = p[0].color;
				p2ColDisp.innerText = this.getTurn() + 1;
				document.getElementById('p1ColDisp').innerText = ' ';
				td.style.backgroundColor = p[0].color;
				td.style.color = p[1].color;//number color
				td.children[0].style.backgroundColor = p[0].color;
				td.children[0].style.opacity = "0";
				td.children[1].style.backgroundColor = p[0].color;
				td.children[1].style.opacity = "0";
				this.setMatrix(i, j, 1);
				td.appendChild(document.createTextNode(this.getTurn()));
				td.className = td.className + " p1Color";
			}

			//returns true when a win is detected
			if (this.moveAnalyze(clickedCoords)) {
				alert(p[this.getPlayerTurn()].name + ' won!');
				recordWin();
				this.setCS(1);
				clearInterval(this.timer);
			}
			//tie check
			else if (this.getTurn() == this.board.getSize() ** 2) {
				//else if (turn++ == bSize ** 2) {
				alert('Draw!');
				clearInterval(this.timer);
			}
			this.incrementTurn();


			//sifts respective player objects' 3s and 4s arrays for any changes
			// to hints
			p[0].cleanStats(clickedCoords);
			p[1].cleanStats(clickedCoords);

			//show hints for next player if it's enabled
			if (p[1 - this.getPlayerTurn()].hintState) p[1 - this.getPlayerTurn()].showHints();

			//update player displays
			document.getElementById('p1Threes').innerText = p[0].threesCount;
			document.getElementById('p2Threes').innerText = p[1].threesCount;
			document.getElementById('p1Fours').innerText = p[0].foursCount;
			document.getElementById('p2Fours').innerText = p[1].foursCount;

			//update which player's turn it is
			this.switchPlayerTurn();//playerTurn = 1 - playerTurn;
		}
	}
}


//players
let p = new Array(2);
p[0] = new player(1, 'Black');
p[1] = new player(2, 'White');



//game object defined in load().
let gameInstance;



//initialize game board on body tag's load
function load() {

	gameInstance = new model(15);

	//check if user is logged in to update player 1 name.
	let httpRequest = new XMLHttpRequest();
	if (!httpRequest) {
		//console.log('httpRequest instance failed');
		return;
	}
	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//player 1 name or empty
			let sessionInfo = JSON.parse(this.responseText);
			if (sessionInfo.loggedIn) {
				p[0].updateName(sessionInfo.username);
			}
		}
	};
	httpRequest.open('GET', '../php/loggedInCheck.php');
	httpRequest.send();


}

//player color update
function pColUpdate(player, val) {
	//alert('update player ' + (player+1) + '\'s color to ' + val);
	let piecesBG;
	let piecesText;
	let textColor;
	if (player) {
		//considered the removal of color choice from selector
		//but too much work.  will just use alert instead.
		if (val == p[0].color) {
			alert('Cannot choose Player 1\'s color.');
			return;
		}
		p[1].color = val;
		piecesBG = document.getElementsByClassName('p2Color');
		piecesText = document.getElementsByClassName('p1Color');
		textColor = p[1].color;
	}
	else {
		//considered the removal of color choice from selector
		//but too much work.  will just use alert instead.
		if (val == p[1].color) {
			alert('Cannot choose Player 2\'s color.');
			return;
		}
		p[0].color = val;
		piecesBG = document.getElementsByClassName("p1Color");
		piecesText = document.getElementsByClassName('p2Color');
		textColor = p[0].color;
	}
	for (let i = 0; i < piecesBG.length; i++) {
		piecesBG[i].style.backgroundColor = val;
	}
	for (let i = 0; i < piecesText.length; i++) {
		piecesText[i].style.color = textColor;
	}
}


function recordWin() {
	let httpRequest = new XMLHttpRequest();
	if (!httpRequest) {
		console.log('httpRequest instance failed in recordWin()');
		return false;
	}

	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText);
		}
	}
	httpRequest.open('POST', '../php/recordGame.php');
	httpRequest.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

	//send game time, and turn count.  username will be taken from session variable
	// because only logged in players will be recorded
	let gameTime = document.getElementById('timer').innerText;
	let turn = gameInstance.getTurn();

	//0 means player 2 won, 1 means player 1 won.  It's more like a true/false for "Did player 1 win?"
	let winner = (gameInstance.getPlayerTurn()) ? 0 : 1;

	//debug
	//console.log(gameTime);
	//console.log(turn);
	//console.log(winner);
	let postString = 'player1=' + p[0].name + '&time=' + gameTime + '&turn=' + turn;
	postString += '&winner=' + winner + '&player2=' + p[1].name;
	httpRequest.send(postString);

}

export default model;
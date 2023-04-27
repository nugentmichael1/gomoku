//game class (model)

//Options model - changes game settings
import optionsM from "./optionsM"

//Gameplay model - Handles mechanics
import playM from "./playM"

class game {

	constructor(view) {

		this.view = view

		this.playM = new playM(view)

		this.options = new optionsM(this.playM, view)

	}

	//Used by controller to change options
	getOptions() {
		return this.options;
	}
	getPlay() {
		return this.playM
	}



	// boardSizeChange(size) {

	// 	//if game is in progress, confirm user understands it will be reset upon board size change.
	// 	if (this.timer != undefined) {
	// 		let question = "Change board size to " + size + "?  "
	// 		let warning = "All progress of current game will be lost."
	// 		if (!window.confirm(question + warning)) {
	// 			//put radio button back to where it was before user changed it
	// 			let radioId = "radio" + ((size == 15) ? 19 : 15);
	// 			document.getElementById(radioId).checked = true;
	// 			return;
	// 		}
	// 		this.size = size;

	// 		//resets the clock, board, matrix, and all game variables (except size).
	// 		this.restart();
	// 	}
	// 	else {
	// 		this.size = size;
	// 		//remove board's table through dom
	// 		let boardTbl = document.getElementById('board');
	// 		boardTbl.parentNode.removeChild(boardTbl);
	// 		//create new board
	// 		// this.board = new board(this.size);
	// 		//new matrix
	// 		this.matrix = new Array(this.size);
	// 		for (let i = 0; i < this.size; i++) {
	// 			this.matrix[i] = new Array(this.size);
	// 			this.matrix[i].fill(0);
	// 		}
	// 	}
	// }


	// restart() {
	// 	//something weird about setInterval required the specific object instead of the class (this) to hold its return value.
	// 	clearInterval(gameInstance.timer);
	// 	gameInstance.timer = undefined;
	// 	document.getElementById('timer').innerText = 'Timer';
	// 	let timeButton = document.getElementById('startBut');
	// 	timeButton.value = "Start";
	// 	timeButton.onclick = gameInstance.start;

	// 	//remove old board
	// 	//remove board's table through dom
	// 	let board = document.getElementById('board');
	// 	board.parentNode.removeChild(board);


	// 	// called as separate function to access "this" capabilities.
	// 	// "restart()" is occasionally called from the html's input button,
	// 	// and not this class, which makes the variables undefined or random.
	// 	this.reset();
	// }

	// reset all variables to default: start state, completion state, 
	// Active Player, turn, timer.

}


// //initialize game board on body tag's load
// function load() {

// 	gameInstance = new game(15);

// 	//check if user is logged in to update player 1 name.
// 	let httpRequest = new XMLHttpRequest();
// 	if (!httpRequest) {
// 		//console.log('httpRequest instance failed');
// 		return;
// 	}
// 	httpRequest.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			//player 1 name or empty
// 			let sessionInfo = JSON.parse(this.responseText);
// 			if (sessionInfo.loggedIn) {
// 				p[0].updateName(sessionInfo.username);
// 			}
// 		}
// 	};
// 	httpRequest.open('GET', '../php/loggedInCheck.php');
// 	httpRequest.send();


// }

// //player color update
// function pColUpdate(player, val) {
// 	//alert('update player ' + (player+1) + '\'s color to ' + val);
// 	let piecesBG;
// 	let piecesText;
// 	let textColor;
// 	if (player) {
// 		//considered the removal of color choice from selector
// 		//but too much work.  will just use alert instead.
// 		if (val == p[0].color) {
// 			alert('Cannot choose Player 1\'s color.');
// 			return;
// 		}
// 		p[1].color = val;
// 		piecesBG = document.getElementsByClassName('p2Color');
// 		piecesText = document.getElementsByClassName('p1Color');
// 		textColor = p[1].color;
// 	}
// 	else {
// 		//considered the removal of color choice from selector
// 		//but too much work.  will just use alert instead.
// 		if (val == p[1].color) {
// 			alert('Cannot choose Player 2\'s color.');
// 			return;
// 		}
// 		p[0].color = val;
// 		piecesBG = document.getElementsByClassName("p1Color");
// 		piecesText = document.getElementsByClassName('p2Color');
// 		textColor = p[0].color;
// 	}
// 	for (let i = 0; i < piecesBG.length; i++) {
// 		piecesBG[i].style.backgroundColor = val;
// 	}
// 	for (let i = 0; i < piecesText.length; i++) {
// 		piecesText[i].style.color = textColor;
// 	}
// }




export default game;
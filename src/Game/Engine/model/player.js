//Player class - 

class player {

	//keeps track of all 3-long segments for player
	threesArr = [];
	//keeps track of all 4-long segments
	foursArr = [];
	//keeps count of all 3-long segments;
	threesCount = 0;
	//keeps count of all 4-long segments;
	foursCount = 0;

	constructor(id, view) {
		this.id = id;//integer 0 or 1
		this.name = 'Player ' + (id + 1);
		this.view = view
	}

	getId() {
		return this.id
	}

	//view updates
	updateViewThrees() {
		this.view.getPlayer(this.id).setThrees(this.threesCount)
	}
	updateViewFours() {
		this.view.getPlayer(this.id).setFours(this.foursCount)
	}
	updateName(newName) {
		this.name = newName;
		document.getElementById('player' + this.id + 'NameDisplay').innerText = this.name;
	}

	addThree(three) {
		// let three = (new threes(c0, c1, des));
		this.threesCount++;

		//if the first possible 4th exists
		if (three.c4th0 !== undefined) {
			//make string out of coordinates to access associative array
			let key = JSON.stringify(three.c4th0);

			//check to see if vertex has already been recorded as a hint
			if (this.threesArr[key] === undefined) {
				// it it has not, update view
				this.threesArr[key] = three;
			}
			//if it has, connect this three to it
			else {
				let tmpNode = this.threesArr[key];
				while (tmpNode.next != null) {
					tmpNode = tmpNode.next;
				}
				tmpNode.next = three;
			}

		}
		//if the second possible 4th exists
		if (three.c4th1 !== undefined) {
			//make string out of coordinates to access associative array
			let key = JSON.stringify(three.c4th1);
			if (this.threesArr[key] === undefined) {
				this.threesArr[key] = three;
			}
			else {
				let tmpNode = this.threesArr[key];
				while (tmpNode.next !== null) {
					tmpNode = tmpNode.next;
				}
				tmpNode.next = three;
			}
		}
	}

	remove3s(cClicked, activePlayer) {

		//since JS uses associative arrays, the coordinates object can be stringified and used as a unique key.  could manually create strings, too.
		let cordStr = JSON.stringify(cClicked);

		//possible partner existence check
		if (this.threesArr[cordStr] !== undefined) {

			//other player's turn
			if (this !== activePlayer) {
				//Remove all threes associated with coordinate at clicked vertex.  keep threesCount the same

				//removes head of linked list, which through garbage collection will remove entire linked list (theoretically)
				delete this.threesArr[cordStr];
			}

			//this player's turn
			else {
				//remove every three turned into a four by this coordinate
				//decrement threesCount by one for every three removed.

				//head of linked list
				let threeToRemove = this.threesArr[cordStr];
				while (threeToRemove !== null) {
					//console.log(threeToRemove);
					let c4thStr =
						(cordStr !== JSON.stringify(threeToRemove.c4th0)) ?
							JSON.stringify(threeToRemove.c4th0) :
							JSON.stringify(threeToRemove.c4th1);
					//alert(c4thStr);
					let tmpNode = this.threesArr[c4thStr];
					let tmpNode2 = tmpNode;
					if (tmpNode !== undefined) {
						while (tmpNode.id !== threeToRemove.id
							&& tmpNode.next !== null) {
							tmpNode2 = tmpNode;
							tmpNode = tmpNode.next;
						}
						//target node is head
						if (tmpNode === tmpNode2) {
							if (tmpNode.next === null) {
								//target node is only node in linked list
								//delete array reference
								delete this.threesArr[c4thStr];
								//remove hint color
								//remove hints every turn in another function
							}
							else {
								//implicitly delete head through pointer reassignment
								this.threesArr[c4thStr] = tmpNode.next;
							}
						}
						else {//tmpNode is any node after head, and not null.
							tmpNode2.next = tmpNode.next;
						}
						/*
						//should be able to avoid this condition check since
						//tmpNode can never be null due to parent if-statement's condition check
						else if(tmpNode.id == threeToRemove.id){
							//implicitly delete tmpNode through pointer reassignment
							tmpNode2.next = tmpNode.next;
						}
						//third case: tmpNode is tail
						*/
					}

					//console.log('removed a three set');
					this.threesCount--;
					threeToRemove = threeToRemove.next;
				}
			}
			
			//delete array index entirely.  linked list is empty at this point.
			delete this.threesArr[cordStr];
		}
	}
	addFour(four) {

		// let four = (new fours(c0, c1, des));
		this.foursCount++;

		//fours() identifies possible 5ths.  below their positions are added to the foursArr so the 4-chain count can be removed on overlines ('6+'-chain) or victory (5-chain), as well as remove hint coordinate

		//if the first possible 5th exists
		if (four.c5th0 !== undefined) {
			//make string out of coordinates to access associative array
			let key = JSON.stringify(four.c5th0);
			if (this.foursArr[key] === undefined) {
				this.foursArr[key] = four;
			}
			else {
				let tmpNode = this.foursArr[key];
				while (tmpNode.next !== null) {
					tmpNode = tmpNode.next;
				}
				tmpNode.next = four;
			}

		}
		//if the second possible 5th exists
		if (four.c5th1 !== undefined) {
			//make string out of coordinates to access associative array
			let key = JSON.stringify(four.c5th1);
			if (this.foursArr[key] === undefined) {
				this.foursArr[key] = four;
			}
			else {
				let tmpNode = this.foursArr[key];
				while (tmpNode.next !== null) {
					tmpNode = tmpNode.next;
				}
				tmpNode.next = four;
			}
		}
		//console.log(this.foursArr);
	}
	//identify whether the clicked coordinate (cClicked) was a 5-chain hint
	// need to add overlines possibility to both.
	remove4s(cClicked, activePlayer) {

		//since JS uses associative arrays, the coordinates object can be stringified
		// and used as a unique key.  could manually create strings, too.
		let cordStr = JSON.stringify(cClicked);

		//possible partner existence check
		if (this.foursArr[cordStr] !== undefined) {

			//other player's turn
			if (this !== activePlayer) {
				//just remove single coordinate set at clicked
				//keep threesCount the same

				//removes head of linked list, which through garbage collection will
				//remove entire linked list (theoretically)
				delete this.foursArr[cordStr];
			}

			//this player's turn
			else {
				//remove every three turned into a four by this coordinate
				//decrement threesCount by one for ever three removed.

				//head of linked list
				let fourToRemove = this.foursArr[cordStr];
				while (fourToRemove !== null) {

					let c5thStr =
						(cordStr !== JSON.stringify(fourToRemove.c5th0)) ?
							JSON.stringify(fourToRemove.c5th0) :
							JSON.stringify(fourToRemove.c5th1);

					let tmpNode = this.foursArr[c5thStr];
					let tmpNode2 = tmpNode;
					if (tmpNode !== undefined) {
						while (tmpNode.id !== fourToRemove.id
							&& tmpNode.next !== null) {
							tmpNode2 = tmpNode;
							tmpNode = tmpNode.next;
						}
						//target node is head
						if (tmpNode === tmpNode2) {
							if (tmpNode.next === null) {
								//target node is only node in linked list
								//delete array reference
								delete this.foursArr[c5thStr];
								//remove hint color
								//remove hints every turn in another function
							}
							else {
								//implicitly delete head through pointer reassignment
								this.foursArr[c5thStr] = tmpNode.next;
							}
						}
						else {//tmpNode is any node after head, and not null.
							tmpNode2.next = tmpNode.next;
						}
						/*
						//should be able to avoid this condition check since
						//tmpNode can never be null due to parent if-statement's condition check
						else if(tmpNode.id == threeToRemove.id){
							//implicitly delete tmpNode through pointer reassignment
							tmpNode2.next = tmpNode.next;
						}
						//third case: tmpNode is tail
						*/
					}

					//console.log('removed a three set');
					this.foursCount--;
					fourToRemove = fourToRemove.next;
				}
			}
			//delete array index entirely.  linked list is empty at this point.
			delete this.foursArr[cordStr];
		}
	}
	cleanStats(clickedCoords, activePlayer) {
		this.remove3s(clickedCoords, activePlayer);
		this.remove4s(clickedCoords, activePlayer)
	}

	flushStats() {

		this.threesCount = 0;
		this.foursCount = 0;
		this.threesArr = [];
		this.foursArr = [];
		this.updateViewThrees()
		this.updateViewFours()
	}
}

export default player;



// hints(activePlayer) {
// 	this.hintState = 1 - this.hintState;
// 	if (activePlayer === this.id - 1) {
// 		if (this.hintState) this.showHints();
// 		else this.hideHints();
// 	}

// }

// //is called outside class, too
// showHints() {
// 	//let hintColor = (bBGColor == "var(--FSBlue)") ? "var(--FSRed)" : "var(--FSBlue)";
// 	for (let key in this.threesArr) {
// 		let c = JSON.parse(key);
// 		let td = document.getElementById(c.y + '-' + c.x);
// 		td.style.backgroundColor = this.color;
// 		td.style.opacity = '0.25';
// 	}
// 	//foursArr
// 	//console.log(this.foursArr);
// 	for (let key in this.foursArr) {
// 		let c = JSON.parse(key);
// 		let td = document.getElementById(c.y + '-' + c.x);
// 		td.style.backgroundColor = this.color;
// 		td.style.opacity = '0.25';
// 	}
// }

// //is called outside class, too
// hideHints() {
// 	for (let key in this.threesArr) {
// 		let c = JSON.parse(key);
// 		let td = document.getElementById(c.y + '-' + c.x);
// 		td.style.backgroundColor = "";
// 		td.style.opacity = '1';
// 	}

// 	//foursArr
// 	for (let key in this.foursArr) {
// 		let c = JSON.parse(key);
// 		let td = document.getElementById(c.y + '-' + c.x);
// 		td.style.backgroundColor = "";
// 		td.style.opacity = '1';
// 	}
// }
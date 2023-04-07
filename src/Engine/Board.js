
//Functions
import clicked from "./clicked"

//CSS
import "../CSS/Game/Board.css"

//Assets
import FSBulldog from "../Assets/FresnoStateBulldog.png"

import { useState } from "react"

const BoardCell = ({ i, j, clicked, className, bgColor, hoverColor }) => {

	const [hover, setHover] = useState(false)

	const stylePropBGColor = { backgroundColor: hover ? hoverColor : "inherit" };

	// console.log(stylePropBGColor);

	const stylePropDivColor = { backgroundColor: hover ? hoverColor : "#ced1d4" }

	return <td
		className={className}
		id={i + '-' + j}
		onClick={() => { clicked(i, j) }}
		key={i + '-' + j}
		style={stylePropBGColor}
		onMouseEnter={() => setHover(true)}
		onMouseLeave={() => setHover(false)}>
		<div className='vertical' style={stylePropDivColor}></div>
		<div style={stylePropDivColor} className='horizontal'></div>
	</td>
}

// create board in html with n x n dimension.  should only accept/expect n of 15 or 19.
const createBoard = (size, bgImageOn, bgColor, hoverColor) => {

	//array to hold table row tags
	const trArr = []

	//rows 0 to size-2.  last row is after.
	for (let i = 0; i < size - 1; i++) {

		//Array to hold table cell tags
		const tdArr = createBoardRow(size, i, bgColor, hoverColor);

		//append completed row
		trArr.push(
			<tr className={'row' + i} key={'row' + i}>
				{tdArr}
			</tr>
		)
	}

	//create last row
	const lastRow = createBoardRow(size, size - 1, bgColor, hoverColor);

	//append last row to tbody, but with unique className
	trArr.push(
		<tr className="rowLast" key={'row' + (size - 1)}>
			{lastRow}
		</tr>
	)

	//style property of return table
	const styleProp = {
		backgroundImage: (bgImageOn) ? `url(${FSBulldog})` : "none",
		backgroundColor: bgColor
	}

	//return table rows inside tbody and table tags
	return <table
		id="board"
		className="board"
		style={styleProp}
	>
		<tbody className={'size' + size}>
			{trArr}
		</tbody>
	</ table >;
}

const createBoardRow = (size, i, bgColor, hoverColor) => {

	//Array to hold table cell tags
	const tdArr = [];

	//add cells of each column
	for (let j = 0; j < size - 1; j++) {

		//create td element
		tdArr.push(<BoardCell i={i} j={j} clicked={clicked} className={'col' + j} key={j} bgColor={bgColor} hoverColor={hoverColor} />)
	}

	//create last column cell with different className to assist css
	tdArr.push(<BoardCell i={i} j={size - 1} clicked={clicked} className={'colLast'} bgColor={bgColor} hoverColor={hoverColor} />)


	return tdArr;
}


const Board = ({ size, bgImageOn, bgColor, hoverColor }) => {

	return createBoard(size, bgImageOn, bgColor, hoverColor);
}

// class Board {
// 	constructor(size) {
// 		//board's background color
// 		this.bGColor = 'var(--FSBlue)';
// 		//board size: n x n.
// 		this.size = size;
// 		//create the board through table html tags
// 		this.createBoard(size);
// 	}
// 	getSize() {
// 		return this.size;
// 	}

//

// 	colorChange(color) {
// 		this.bBGColor = color;
// 		document.getElementById("board").style.backgroundColor = color;
// 	}

// 	bGImgChange() {
// 		let brd = document.getElementById('board');
// 		if (brd.style.backgroundImage != '') {
// 			brd.style.backgroundImage = '';
// 		}
// 		else {
// 			document.getElementById('board').style.backgroundImage = "url('../assets/FresnoStateBulldog.png')";
// 		}
// 	}
// }

export default Board;
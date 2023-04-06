
//Dependencies
import clicked from "./clicked"

//CSS
import "../CSS/Game/Board.css"


// create board in html with n x n dimension.  should only accept/expect n of 15 or 19.
const createBoard = (size) => {

	//array to hold table row tags
	const tbody = []

	//fill table with nxn rows and columns

	//rows 0 to n-2.  last row is after.
	for (let i = 0; i < size - 1; i++) {

		//Array to hold table cell tags
		const tdArr = createBoardRow(size, i);

		//append completed row
		tbody.push(
			<tr className={'row' + i} key={'row' + i}>
				{tdArr}
			</tr>
		)
	}

	//create last row
	const lastRow = createBoardRow(size, size - 1);

	//append last row to tbody, but with unique className
	tbody.push(
		<tr className="rowLast" key={'row' + (size - 1)}>
			{lastRow}
		</tr>
	)

	console.log(tbody)
	//rename last row's class to assist css
	// const lastRow = tbody.pop();
	console.log(lastRow)
	// lastRow.props.className = "rowLast"

	return <table
		id="board"
		className="board">
		<tbody className={'size' + size}>
			{tbody}
		</tbody>
	</table>;
}

const createBoardRow = (size, i) => {

	//Array to hold table cell tags
	const tdArr = [];

	//add cells of each column
	for (let j = 0; j < size - 1; j++) {

		//create td element
		tdArr.push(<td
			className={'col' + j}
			id={i + '-' + j}
			onClick={() => { clicked(i, j) }}
			key={i + '-' + j}>
			<div className='vertical'></div>
			<div className='horizontal'></div>
		</td>)
	}

	//create last column cell with different className to assist css
	tdArr.push(<td
		className={'colLast'}
		id={i + '-' + (size - 1)}
		onClick={() => { clicked(i, (size - 1)) }}
		key={i + '-' + (size - 1)}>
		<div className='vertical'></div>
		<div className='horizontal'></div>
	</td>)

	return tdArr;
}


const Board = (size) => {
	// createBoard(15);
	return createBoard(15);
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
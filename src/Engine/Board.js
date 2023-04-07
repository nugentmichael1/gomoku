
import BoardCell from "./BoardCell"

//Functions
import clicked from "./clicked"

//CSS
import "../CSS/Game/Board.css"

//Assets
import FSBulldog from "../Assets/FresnoStateBulldog.png"


const createBoardRow = (size, i, bgColor, hoverColor, rowClassName) => {

	//Array to hold table cell tags
	const tdArr = [];

	//add cells of each column
	for (let j = 0; j < size - 1; j++) {

		//create td element
		tdArr.push(
			<BoardCell
				i={i}
				j={j}
				clicked={clicked}
				className={'col' + j}
				key={j}
				bgColor={bgColor}
				hoverColor={hoverColor}
			/>
		)
	}

	//create last column cell with different className to assist css
	tdArr.push(
		<BoardCell
			i={i}
			j={size - 1}
			clicked={clicked}
			className={'colLast'}
			key={'colLast'}
			bgColor={bgColor}
			hoverColor={hoverColor}
		/>
	)

	return (
		<tr
			className={rowClassName}
			key={'row' + i}
		>
			{tdArr}
		</tr>
	);
}

// create board in html with size x size dimension.  should only accept/expect n of 15 or 19.
const Board = ({ size, bgImageOn, bgColor, hoverColor }) => {

	//array to hold table row tags
	const trArr = []

	//rows 0 to size-2.  last row is after.
	for (let i = 0; i < size - 1; i++) {

		//Array to hold table cell tags
		trArr.push(createBoardRow(size, i, bgColor, hoverColor, 'row' + i))
	}

	//create and push last row into array
	trArr.push(createBoardRow(size, size - 1, bgColor, hoverColor, 'rowLast'))

	//style property of return table
	const stylePropObj = {
		backgroundImage: bgImageOn ? `url(${FSBulldog})` : "none",
		backgroundColor: bgColor
	}

	//return table rows inside tbody and table tags
	return (
		<table
			id="board"
			className="board"
			style={stylePropObj}>
			<tbody className={'size' + size}>
				{trArr}
			</tbody>
		</ table >
	);
}


export default Board;


//Components
import BoardRow from "./BoardRow"

//CSS
import "../CSS/Game/Board.css"

//Assets
import FSBulldog from "../Assets/FresnoStateBulldog.png"


// create board in html with size x size dimension.  should only accept/expect n of 15 or 19.
const Board = ({ size, bgImageOn, bgColor, hoverColor, clicked, gameInstance }) => {



	//array to hold table row tags
	const trArr = []

	//rows 0 to size-2.  last row is after.
	for (let i = 0; i < size - 1; i++) {

		const boardRowProps = {
			"size": size,
			"index": i,
			"bgColor": bgColor,
			"hoverColor": hoverColor,
			"rowClassName": 'row' + i,
			"onClickFx": clicked,
			"gameInstance": gameInstance
		}

		//Array to hold table cell tags
		trArr.push(<BoardRow data={boardRowProps} key={i} />)
	}

	//create and push last row into array
	const boardRowProps = {
		"size": size,
		"index": size - 1,
		"bgColor": bgColor,
		"hoverColor": hoverColor,
		"rowClassName": 'rowLast',
		"onClickFx": clicked,
		"gameInstance": gameInstance
	}
	trArr.push(<BoardRow data={boardRowProps} key={size - 1} />)
	// trArr.push(createBoardRow(size, size - 1, bgColor, hoverColor, 'rowLast', clicked, gameInstance))

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

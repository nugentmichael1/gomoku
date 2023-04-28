//Board view - React component

import { useEffect, useState } from "react"

//Components
import BoardRow from "./BoardRow"

//CSS
import "../../CSS/Game/Board.css"

//Assets
import FSBulldog from "../../Assets/FresnoStateBulldog.png"


// create board in html with size x size dimension.  should only accept/expect n of 15 or 19.
const Board = ({ playCtrl, view }) => {

	//view destructure
	const optionsV = view.getOptions()
	const playV = view.getPlay()
	const player1V = view.getPlayer(0)
	const player2V = view.getPlayer(1)


	//useState functions
	//size
	const [size, setSize] = useState(optionsV.getBoardSize().getDefault())
	//Acquire react hook useState set fx
	optionsV.getBoardSize().setUseStateFxBoard(setSize)

	//bg image toggle
	const [bgImageOn, setBgImageOn] = useState(optionsV.getBgImage().getDefaultOn())
	//Acquire react hook useState set fx
	optionsV.getBgImage().setUseStateFxBoard(setBgImageOn)

	//color: bg standard
	const [bgColor, setBgColor] = useState(optionsV.getBgColor().getDefaultStandard())
	//Acquire react hook useState set fx
	optionsV.getBgColor().setUseStateFxBoardStandard(setBgColor)

	//color: bg hover
	const [hoverColor, setHoverColor] = useState(optionsV.getBgColor().getDefaultHover())
	//Acquire react hook useState set fx
	optionsV.getBgColor().setUseStateFxBoardHover(setHoverColor)

	//player 1 color
	const [p1Color, setP1Color] = useState(player1V.getDefaultColor())
	//Acquire react hook useState set fx
	player1V.setUseStateFxColorBoard(setP1Color)

	//player 2 color
	const [p2Color, setP2Color] = useState(player2V.getDefaultColor())
	//Acquire react hook useState set fx
	player2V.setUseStateFxColorBoard(setP2Color)

	const colors = {
		hover: hoverColor,
		p1: p1Color,
		p2: p2Color
	}

	//Reference to matrix never changes
	const matrixV = playV.getMatrix()
	//matrix
	// const [matrix, setMatrix] = useState()
	// //Acquire react hook useState set fx
	// playV.setUseStateFxMatrix(setMatrix)

	// useEffect(() => {
	// 	console.log("matrix", matrix)
	// }, [matrix])

	// console.log("render")

	//array to hold table row tags
	const trArr = []

	//rows 0 to size-2.  last row is after.
	for (let i = 0; i < size - 1; i++) {

		const boardRowProps = {
			"playCtrl": playCtrl,
			"size": size,
			"index": i,
			"rowClassName": 'row' + i,
			"matrixRowV": matrixV.getRow(i),
			"colors": colors
		}

		//Array to hold table cell tags
		trArr.push(<BoardRow data={boardRowProps} key={i} />)
	}

	//create and push last row into array
	const boardRowProps = {
		"playCtrl": playCtrl,
		"size": size,
		"index": size - 1,
		"rowClassName": 'rowLast',
		"matrixRowV": matrixV.getRow(size - 1),
		"colors": colors
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

//Game Status Table

//React
import { React, useState, useEffect } from 'react';

//Model
// import model from "./model"

const start = () => {
    // console.log("start")
    // "gameInstance.start()" 
}

const boardSizeChange = (size) => {
    // "gameInstance.boardSizeChange(15)"
    // "gameInstance.boardSizeChange(19)"

    // console.log(`boardSizeChange(${size})`)
}


const GameStatusTable = ({ setbgImageOn, bgImageOn, boardBGColor, handleBoardBGColor }) => {

    const [boardSize, setBoardSize] = useState(15);

    useEffect(() => {
        boardSizeChange(boardSize)
    }, [boardSize])

    return <table className="stats">
        <tbody>
            <tr>
                <th id="timer">
                    Timer
                </th>
                <th>
                    Board Size
                </th>
                <th>
                    Board Color
                </th>
                <th>
                    Bull Dog BG
                </th>
            </tr>
            <tr>
                <td>
                    <input type="Button" value="Start" id="startBut" onClick={start} readOnly={true} />
                </td>
                <td>
                    <label htmlFor="radio15">
                        15x15
                    </label>
                    <input
                        type="radio"
                        id="radio15"
                        name="boardSize"
                        value={15}
                        onChange={(e) => setBoardSize(Number(e.target.value))}
                        checked={15 === boardSize} />
                    <label htmlFor="radio19">
                        19x19
                    </label>
                    <input
                        type="radio"
                        id="radio19"
                        name="boardSize"
                        value={19}
                        onChange={(e) => setBoardSize(Number(e.target.value))}
                        checked={19 === boardSize} />
                </td>
                <td>
                    <select onChange={(e) => handleBoardBGColor(e.target.value)} value={boardBGColor}>
                        <option value="#13284c">
                            CSU, Fresno Blue
                        </option>
                        <option value="#b1102b">
                            CSU, Fresno Red
                        </option>
                    </select>
                </td>
                <td>
                    <input type="checkbox" onChange={(e) => setbgImageOn(Boolean(1 - bgImageOn))} checked={bgImageOn} />
                </td>
            </tr>
        </tbody>
    </table >
}

export default GameStatusTable;
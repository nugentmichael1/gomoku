//Game Status Table

const GameStatusTable = ({ timer, boardSize, boardBGColor, bgImage }) => {

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th id="timer">
                        {timer.count}
                    </th>
                    <th>
                        Board Size
                    </th>
                    <th>
                        Board Color
                    </th>
                    <th>
                        Bulldog BG
                    </th>
                </tr>
                <tr>
                    <td>
                        <input type="Button" value={timer.buttonText} id="startBut" onClick={timer.buttonFx} readOnly={true} />
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
                            onChange={(e) => boardSize.changeFx(Number(e.target.value))}
                            checked={15 === boardSize.value} />
                        <label htmlFor="radio19">
                            19x19
                        </label>
                        <input
                            type="radio"
                            id="radio19"
                            name="boardSize"
                            value={19}
                            onChange={(e) => boardSize.changeFx(Number(e.target.value))}
                            checked={19 === boardSize.value} />
                    </td>
                    <td>
                        <select onChange={(e) => boardBGColor.fx(e.target.value)} value={boardBGColor.value}>
                            <option value="#13284c">
                                CSU, Fresno Blue
                            </option>
                            <option value="#b1102b">
                                CSU, Fresno Red
                            </option>
                        </select>
                    </td>
                    <td>
                        <input type="checkbox" onChange={(e) => bgImage.change(Boolean(1 - bgImage.on))} checked={bgImage.on} />
                    </td>
                </tr>
            </tbody>
        </table >
    )
}

export default GameStatusTable;
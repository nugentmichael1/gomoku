//Game Status Table


//Components
import Timer from "./Components/Timer"
import BoardSize from "./Components/BoardSize"

const GameStatusTable = ({ obj, boardBGColor, bgImage }) => {

    return (<>
        <Timer timer={obj.getTimerObj()} />
        <BoardSize boardSizeInstance={obj.getBoardSize()} />
        <table className="stats">
            <tbody>
                <tr>


                    <th>
                        Board Color
                    </th>
                    <th>
                        Bulldog BG
                    </th>
                </tr>
                <tr>

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
    </>
    )
}

export default GameStatusTable;
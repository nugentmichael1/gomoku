//Game Status Table - Provides contollers to game options


//Components
import Timer from "./Components/Timer"
import BoardSize from "./Components/BoardSize"
import BoardBgColor from "./Components/BoardBgColor"
import BgImage from "./Components/BgImage"

const GameStatusTable = ({ obj, ctrl, view }) => {

    return (<>
        <div className="gameStatus">
            <Timer timer={obj.getTimer()} play={ctrl} timerV={view.getTimer()} />
            <BoardSize boardSizeInstance={obj.getBoardSizeObj()} />
            <BoardBgColor obj={obj.getBoardBgColorObj()} />
            <BgImage />
        </div>

    </>
    )
}

export default GameStatusTable;
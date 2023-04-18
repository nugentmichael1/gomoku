//Game Status Table - Provides contollers to game options


//Components
import Timer from "./Components/Timer"
import BoardSize from "./Components/BoardSize"
import BoardBgColor from "./Components/BoardBgColor"
import BgImage from "./Components/BgImage"

const GameStatusTable = ({ obj, ctrl, view }) => {

    return (<>
        <div className="gameStatus">
            <Timer play={ctrl.getPlay()} timerV={view.getTimer()} />
            <BoardSize options={ctrl.getOptions()} view={view.getBoardSize()} />
            <BoardBgColor obj={obj.getBoardBgColorObj()} />
            <BgImage />
        </div>

    </>
    )
}

export default GameStatusTable;
//Game Status Table - Provides contollers to game options


//Components
import Timer from "./Timer"
import BoardSize from "./BoardSize"
import BoardBgColor from "./BoardBgColor"
import BgImage from "./BgImage"

const GameStatusTable = ({ ctrl, view }) => {

    const options = ctrl.getOptions()

    return (<>
        <div className="gameStatus">
            <Timer play={ctrl.getPlay()} timerV={view.getTimer()} />
            <BoardSize options={options} view={view.getBoardSize()} />
            <BoardBgColor options={options} view={view.getBgColor()} />
            <BgImage options={options} view={view.getBgImage()} />
        </div>

    </>
    )
}

export default GameStatusTable;
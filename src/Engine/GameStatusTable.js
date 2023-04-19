//Game Status Table - Provides contollers to game options


//Components
import Timer from "./Components/Timer"
import BoardSize from "./Components/BoardSize"
import BoardBgColor from "./Components/BoardBgColor"
import BgImage from "./Components/BgImage"

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
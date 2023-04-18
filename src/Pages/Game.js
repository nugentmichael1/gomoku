//Game Page

//React
import { React } from 'react'

//Components
import GameStatusTable from '../Engine/GameStatusTable'
import PlayerStatusTable from "../Engine/PlayerStatusTable"
import Board from "../Engine/Board"

//CSS
import "../CSS/Game/game.css"

//Game class (model) import
import game from "../Engine/game"

//Game controller
import controller from "../Engine/controller/controller"

//Game view (react-interface)
import view from "../Engine/view/view"


//initializations
//view - acts as a react interface
const viewInterface = new view()
//controller
const ctrl = new controller(new game(1000, viewInterface))


//Delete this later
//Game class (model) initialization
const gameInstance = new game(15, viewInterface);

function Game() {

  return (
    <div className='Game'>

      {
        <GameStatusTable ctrl={ctrl} view={viewInterface.getGameStatus()} />
      }

      {
        <PlayerStatusTable
          num={1}
        />
      }

      {
        // <Board
        //   bgImageOn={false}
        //   // bgColor={boardBGColor}
        //   // hoverColor={boardHoverColor}
        //   clicked={gameInstance.clicked}
        //   gameInstance={gameInstance}
        //   obj={gameInstance.getBoardObj()}
        // />
      }

      {
        <PlayerStatusTable
          num={2}
        />
      }

    </div>
  )
}

export default Game
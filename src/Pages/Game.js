//Game Page

//React
import { React, useState } from 'react'

//Components
import GameStatusTable from '../Game/Components/GameStatusTable'
import PlayerStatusTable from "../Game/Components/PlayerStatusTable"
import Board from "../Game/Components/Board"

//CSS
import "../CSS/Game/game.css"

//Game class (model) import
import game from "../Game/Engine/model/game"

//Game controller
import controller from "../Game/Engine/controller/controller"

//Game view (react-interface)
import view from "../Game/Engine/view/view"


//Engine initializations

//view - acts as a react interface
const viewInterface = new view()

//model - takes view as dependency injection
const model = new game(viewInterface)

//controller - takes model as dependency
const ctrl = new controller(model)

//Check if user is logged in.  Change P1 name to user's.
const user = {}

function Game() {

  //Turn
  const [turn, setTurn] = useState("")
  //Acquire useState fx
  viewInterface.getPlay().setUseStateFxTurn(setTurn)

  return (
    <div className='Game'>

      {
        <GameStatusTable ctrl={ctrl} view={viewInterface.getOptions()} />
      }

      {
        <PlayerStatusTable
          playerV={viewInterface.getPlayer(0)}
          opponentV={viewInterface.getPlayer(1)}
          optionsC={ctrl.getOptions()}
          id={0}
          user={user}
          turn={turn}
        />
      }

      {
        <Board
          playCtrl={ctrl.getPlay()}
          view={viewInterface}
          turn={turn}
        />
      }

      {
        <PlayerStatusTable
          playerV={viewInterface.getPlayer(1)}
          opponentV={viewInterface.getPlayer(0)}
          optionsC={ctrl.getOptions()}
          id={1}
          turn={turn}
        />
      }

    </div>
  )
}

export default Game
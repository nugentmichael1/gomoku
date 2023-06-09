//Game Page

//React
import { React, useEffect, useState } from 'react'

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

function Game({ user }) {

  //Turn
  const [turn, setTurn] = useState("")

  useEffect(() => {
    //load user into game model on mount and user updates
    if (user !== null) ctrl.getPlay().loadUser(user.username, 0)


  }, [user])

  useEffect(() => {
    //Acquire useState fx
    viewInterface.getPlay().setUseStateFxTurn(setTurn)
  }, [])

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
          user={null}
          turn={turn}
        />
      }

    </div>
  )
}

export default Game
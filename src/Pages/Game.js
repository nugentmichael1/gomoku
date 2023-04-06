//Game Page

//React
import { React } from 'react'

//Components
import GameStatusTable from '../Engine/GameStatusTable'
import PlayerStatusTable from "../Engine/PlayerStatusTable"
import Board from "../Engine/Board"

//CSS
import "../CSS/Game/game.css"



function Game() {
  return <div className='Game'>

    {<GameStatusTable />}

    {<PlayerStatusTable num={1} />}

    {<Board />}
    {<PlayerStatusTable num={2} />}

  </div>
}

export default Game
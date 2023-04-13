//Game Page

//React
import { React, useState } from 'react'

//Components
import GameStatusTable from '../Engine/GameStatusTable'
import PlayerStatusTable from "../Engine/PlayerStatusTable"
import Board from "../Engine/Board"

//CSS
import "../CSS/Game/game.css"

//Game class (model) import
import game from "../Engine/game"

//Game class (model) initialization
let gameInstance = new game(15);

function Game() {

  return (
    <div className='Game'>

      {
        <GameStatusTable obj={gameInstance.getGameStatusObj()} />
      }

      {
        <PlayerStatusTable
          num={1}
        />
      }

      {
        <Board
          size={gameInstance.size}
          bgImageOn={false}
          // bgColor={boardBGColor}
          // hoverColor={boardHoverColor}
          clicked={gameInstance.clicked}
          gameInstance={gameInstance}
        />
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
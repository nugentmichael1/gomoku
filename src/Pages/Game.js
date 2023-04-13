//Game Page

//React
import { React, useState } from 'react'

//Components
import GameStatusTable from '../Engine/GameStatusTable'
import PlayerStatusTable from "../Engine/PlayerStatusTable"
import Board from "../Engine/Board"

//CSS
import "../CSS/Game/game.css"

//Configurations
import boardBGColors from "../Configurations/BoardBGColors.json"

import game from "../Engine/game"

let gameInstance = new game(15);

function Game() {

  //Board BG Color
  const [boardBGColor, setBoardBGColor] = useState(boardBGColors[0])

  //Board Hover Color
  const [boardHoverColor, setBoardHoverColor] = useState(boardBGColors[1])

  const handleBoardBGColorChange = (color) => {
    setBoardBGColor(color)
    const hoverColor = (color === boardBGColors[0]) ? boardBGColors[1] : boardBGColors[0];
    setBoardHoverColor(hoverColor);
  }

  //Game Status Table: Board BG Color Prop
  const gstBoardBGColor = {
    value: boardBGColor,
    fx: handleBoardBGColorChange
  }

  //Board BG Image
  const [bgImageOn, setbgImageOn] = useState(false)

  //Game Status Table: BG Image State prop
  const gstBGImage = {
    on: bgImageOn,
    change: setbgImageOn
  }

  return (
    <div className='Game'>

      {
        <GameStatusTable
          obj={gameInstance.getGameStatusObj()}
          boardBGColor={gstBoardBGColor}
          bgImage={gstBGImage}
        />
      }

      {
        <PlayerStatusTable
          num={1}
        />
      }

      {
        <Board
          size={gameInstance.size}
          bgImageOn={bgImageOn}
          bgColor={boardBGColor}
          hoverColor={boardHoverColor}
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
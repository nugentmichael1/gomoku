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


function Game() {

  const [bgImageOn, setbgImageOn] = useState(false)

  const [boardBGColor, setBoardBGColor] = useState(boardBGColors[0])

  const [boardHoverColor, setBoardHoverColor] = useState(boardBGColors[1])

  const handleBoardBGColor = (color) => {
    setBoardBGColor(color)
    const hoverColor = (color === boardBGColors[0]) ? boardBGColors[1] : boardBGColors[0];
    setBoardHoverColor(hoverColor);
  }

  return <div className='Game'>

    {<GameStatusTable
      setbgImageOn={setbgImageOn}
      bgImageOn={bgImageOn}
      boardBGColor={boardBGColor}
      setBoardBGColor={setBoardBGColor}
      handleBoardBGColor={handleBoardBGColor}
    />}

    {<PlayerStatusTable num={1} />}

    {<Board size={15}
      bgImageOn={bgImageOn}
      bgColor={boardBGColor}
      hoverColor={boardHoverColor}
    />}

    {<PlayerStatusTable num={2} />}

  </div>
}

export default Game
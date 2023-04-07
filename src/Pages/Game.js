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

import model from "../Engine/model"


function Game() {

  //Timer
  const timerButtonFx = () => {
    console.log("Timer function")

    //Start or Reset path
    if (timerButtonText === "Start") {
      setTimerButtonText("Reset")
      setTimerCount("0")
    }
    else if (timerButtonText === "Reset") {
      setTimerButtonText("Start")
      setTimerCount("Timer")
    }
    else {
      console.log("Something went wrong in timerButtonFX")
    }
  }

  const [timerCount, setTimerCount] = useState("Timer")
  const [timerButtonText, setTimerButtonText] = useState("Start")

  //Game Status Table: Timer prop
  const gstTimer = {
    count: timerCount,
    buttonText: timerButtonText,
    buttonFx: timerButtonFx,
  }

  //Board Size
  const [boardSize, setBoardSize] = useState(15);

  //Game Status Table: Board Size prop
  const gstBoardSize = {
    value: boardSize,
    changeFx: setBoardSize
  }

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
          timer={gstTimer}
          boardSize={gstBoardSize}
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
          size={boardSize}
          bgImageOn={bgImageOn}
          bgColor={boardBGColor}
          hoverColor={boardHoverColor}
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
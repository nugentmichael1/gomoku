//Game Page

//React
import { React, useEffect, useState } from 'react'

//Components
import GameStatusTable from '../Engine/GameStatusTable'
import PlayerStatusTable from "../Engine/PlayerStatusTable"
import Board from "../Engine/Board"

//CSS
import "../CSS/Game/game.css"

//Configurations
import boardBGColors from "../Configurations/BoardBGColors.json"

import model from "../Engine/model"

let gameInstance = new model(15);

function Game() {

  //Timer
  const timerButtonFx = () => {

    //Start or Reset path
    if (timerButtonText === "Start") {

      //Increment gameInstance turn by 1
      //Update P1 Color Display to show number

      //timer button text
      setTimerButtonText("Reset")

      //snapshot current time
      const startTime = Date.now();

      //instant first update
      setTimerCount(Math.floor((Date.now() - startTime) / 1000))

      //start interval function
      setTimerInterval(setInterval(() => {

        //get elapsed time since start
        const elapsed = Math.floor((Date.now() - startTime) / 1000);

        //update timer text
        setTimerCount(elapsed);
      }, 200))
    }
    else if (timerButtonText === "Reset") {

      //timer button text
      setTimerButtonText("Start")

      //stop interval function
      clearInterval(timerInterval);

      //update timer text
      setTimerCount("Timer")
    }
  }

  const [timerCount, setTimerCount] = useState("Timer")
  const [timerButtonText, setTimerButtonText] = useState("Start")
  //used to track Interval function used in stopwatch/timer
  const [timerInterval, setTimerInterval] = useState(null)

  //Ensures interval is cleared upon component exit
  useEffect(() => {
    return () => { clearInterval(timerInterval) }
  }, [timerInterval])

  //Game Status Table: Timer prop
  const gstTimer = {
    count: timerCount,
    buttonText: timerButtonText,
    buttonFx: timerButtonFx,
  }

  //Board Size
  const [boardSize, setBoardSize] = useState(gameInstance.size);

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
import { React, useState } from 'react'

//CSS
import "../CSS/game.css"

//Game Status Table
const gameStatusTable = <table class="stats">
  <tbody>
    <tr>
      <th id="timer">Timer</th>
      <th>Board Size</th>
      <th>Board Color</th>
      <th>Bull Dog BG</th>
    </tr>
    <tr>
      <td>
        <input type="Button" value="Start" id="startBut" onClick="gameInstance.start()" />

      </td>
      <td>
        <label for="radio15">
          15x15
        </label>
        <input type="radio" id="radio15" name="boardSize" onChange="gameInstance.boardSizeChange(15)" checked />
        <label for="radio19">19x19</label>
        <input type="radio" id="radio19" name="boardSize" onChange="gameInstance.boardSizeChange(19)" />
      </td>
      <td>
        <select onchange="gameInstance.board.colorChange(value)">
          <option value="var(--FSBlue)" selected>CSU, Fresno Blue</option>
          <option value="var(--FSRed)">CSU, Fresno Red</option>
        </select></td>
      <td>
        <input type="checkbox" onClick="gameInstance.board.bGImgChange()" />
      </td>
    </tr>
  </tbody>
</table>


const PlayerStatusTable = (num) => {

  //"num" variable refers to player identity: 1 or 2; and is used for id and class properties of tags, and text.


  const pNum = 'p' + num;

  const tblID = pNum + 'StatusTbl';
  const displayText = 'Player ' + num;
  const colDispID = pNum + 'ColDisp';
  const colorClass = pNum + 'Color';
  const colSel = pNum + 'ColSel';


  const colors = ["Black",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow"]

  const colSelOptions = colors.map((color) => (
    <option value={color}>{color}</option>
  ))

  const [pColor, setPColor] = useState(colors[num - 1]);

  const pColUpdate = (e) => {

    //talk to game model logic with this player's number and new color

    //Update view
    setPColor(e.target.value);

    //debug
    // console.log(e.target.value);
  }

  const hintsID = pNum + 'Hints';
  const hintsToggle = () => {

    //use "num" variable to call player::hints()
  }

  const threesID = pNum + 'Threes';
  const foursID = pNum + 'Fours';

  return <table id={tblID}>
    <tbody>
      <tr>
        <th>{displayText}</th>
      </tr>
      <tr>
        <td id={colDispID} class={colorClass}></td>
      </tr>
      <tr>
        <td>
          <select id={colSel} name={colSel} onChange={pColUpdate} value={pColor}>
            {colSelOptions}
          </select>
        </td>
      </tr>
      <tr>
        <th>
          {/* <!--<input type="button" value="3 check" onClick="threeCheck()">--> */}
          <label htmlFor={hintsID} name={hintsID}>
            Hints
          </label>
          <input type="checkbox" onClick={hintsToggle} id={hintsID} />
        </th>
      </tr>
      <tr>
        <th>3s:</th>
      </tr>
      <tr>
        <td id={threesID}></td>
      </tr>
      <tr>
        <th>4s:</th>
      </tr>
      <tr>
        <td id={foursID}></td>
      </tr>
    </tbody>
  </table>

}

function Game() {
  return <div className='Game'>

    {gameStatusTable}

    {PlayerStatusTable(1)}

    {/* Game Board goes here */}

    {PlayerStatusTable(2)}

  </div>
}

export default Game
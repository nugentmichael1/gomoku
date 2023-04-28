//Player Status Table

//React
import { React, useState } from "react";

//Configurations
import colors from "../../Configurations/PlayerColors.json"

const PlayerStatusTable = ({ playerV, opponentV, optionsC, id, user }) => {

    //"id" variable refers to player identity: 0 or 1; and is used for id and class properties of tags, and text.

    const pNum = 'p' + (id + 1);

    const tblID = pNum + 'StatusTbl';
    const displayText = 'Player ' + (id + 1);
    const colDispID = pNum + 'ColDisp';
    const colorClass = pNum + 'Color';
    const colSel = pNum + 'ColSel';
    const hintsID = pNum + 'Hints';
    const threesID = pNum + 'Threes';
    const foursID = pNum + 'Fours';

    //Turn Text
    const [turnText, setTurnText] = useState("")
    //Acquire useState fx
    playerV.setUseStateFxTurnText(setTurnText)

    //Turn Text color (opponent's color)
    const [turnTextColor, setTurnTextColor] = useState(opponentV.getDefaultColor())
    //Acquire useState fx
    opponentV.setUseStateFxColorOpponentText(setTurnTextColor)


    //Color Options - Dynamically built with configuration file.
    const colSelOptions = colors.map((color) => (
        <option value={color} key={color}>{color}</option>
    ))

    //Player Color - circle background
    const [pColor, setPColor] = useState(playerV.getDefaultColor());
    //Acquire useState fx
    playerV.setUseStateFxColor(setPColor)

    //Hints toggle
    const [hints, setHints] = useState(false)
    //Acquire useState fx
    playerV.setUseStateFxHints(setHints)



    return <table id={tblID}>
        <tbody>
            <tr>
                <th>{displayText}</th>
            </tr>
            <tr>
                <td id={colDispID} className={colorClass} style={{ backgroundColor: pColor, color: turnTextColor }}>
                    {turnText}
                </td>
            </tr>
            <tr>
                <td>
                    <select id={colSel} name={colSel} onChange={(e) => optionsC.setPlayerColor(id, e.target.value)} value={pColor}>
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
                    <input type="checkbox" onChange={() => optionsC.setHints(id, Boolean(1 - hints))} id={hintsID} checked={hints} />
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
    </table >

}

export default PlayerStatusTable;
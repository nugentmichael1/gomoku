//Player Status Table

//React
import { React, useState } from "react";

//Configurations
import colors from "../../Configurations/PlayerColors.json"

const PlayerStatusTable = ({ playerV, opponentV, turn, optionsC, id, user }) => {

    //"id" variable refers to player identity: 0 or 1; and is used for id and class properties of tags, and text.


    //Holdover from HTML/CSS design.  Might delete later.
    const pNum = 'p' + (id + 1);
    const tblID = pNum + 'StatusTbl';
    const displayText = 'Player ' + (id + 1);
    const colDispID = pNum + 'ColDisp';
    const colorClass = pNum + 'Color';
    const colSel = pNum + 'ColSel';
    const hintsID = pNum + 'Hints';
    const threesID = pNum + 'Threes';
    const foursID = pNum + 'Fours';


    const turnText = (turn % 2 === 1 - id) ? turn : ""

    //Turn Text color (opponent's color)
    const [turnTextColor, setTurnTextColor] = useState(opponentV.getDefaultColor())
    //Acquire useState fx
    opponentV.setUseStateFxColorOpponentText(setTurnTextColor)

    //Color Select Options - Dynamically built with configuration file.
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

    //Threes Count
    const [threes, setThrees] = useState(0)
    //Acquire useState fx
    playerV.setUseStateFxThrees(setThrees)

    //Fours Count
    const [fours, setFours] = useState(0)
    //Acquire useState fx
    playerV.setUseStateFxFours(setFours)


    return <table id={tblID}>
        <tbody>
            <tr>
                {/* if no user is logged in, use "Player X", else if player is logged in, use displayName if set, if not set, use his email. */}
                <th>{(user === null) ? displayText : (user.displayName === null) ? user.email : user.displayName}</th>
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
                <td id={threesID}>
                    {threes}
                </td>
            </tr>
            <tr>
                <th>4s:</th>
            </tr>
            <tr>
                <td id={foursID}>
                    {fours}
                </td>
            </tr>
        </tbody>
    </table >

}

export default PlayerStatusTable;
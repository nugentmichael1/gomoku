//Player Status Table

//React
import { React, useState } from "react";

//Configurations
import colors from "../Configurations/PlayerColors.json"

const PlayerStatusTable = ({ num }) => {

    //"num" variable refers to player identity: 1 or 2; and is used for id and class properties of tags, and text.


    const pNum = 'p' + num;

    const tblID = pNum + 'StatusTbl';
    const displayText = 'Player ' + num;
    const colDispID = pNum + 'ColDisp';
    const colorClass = pNum + 'Color';
    const colSel = pNum + 'ColSel';

    //Dynamically build color select option tags based on configuration file of colors.
    const colSelOptions = colors.map((color) => (
        <option value={color} key={color}>{color}</option>
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
                <td id={colDispID} className={colorClass}>

                </td>
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

export default PlayerStatusTable;
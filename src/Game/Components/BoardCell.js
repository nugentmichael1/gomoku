//Table Cell of Board Component

import React, { useState } from 'react'


const BoardCell = ({ playCtrl, i, j, className, cellV, colors, hintToggle, turn }) => {

    //Boolean used to set hover color
    const [hover, setHover] = useState(false)

    //Turn-claimed text
    const [text, setText] = useState("")
    //Acquire useState Fx
    cellV.setUseStateFxText(setText)

    const [owner, setOwner] = useState(null)
    //Acquire useState Fx
    cellV.setUseStateFxOwner(setOwner)

    const [hint, setHint] = useState([false, false])
    //Acquire useState Fx
    cellV.setUseStateFxHints(setHint)

    //3 cases
    //1: no owner.  owner===null.  cellStyle = {backgroundColor: hover ? colors.hover : "inherit"}; divStyle = {backgroundColor:hover ? colors.hover:"#ced1d4"}
    //2: player 1 is owner. owner===0.  cellStyle = {backgroundColor: colors.p1, color: colors.p2}; divStyle = {display:"none"}
    //3: player 2 is owner. owner===1.  cellStyle = {backgroundColor: colors.p2, color: colors.p1}; divStyle = {display:"none"}

    let cellStyle, divStyle;
    if (owner === null) {
        if (turn % 2 === 1 && hintToggle[0] === true && hint[0] === true) {
            // player 1
            // mark cell with player 1's color, but at reduced opacity
            cellStyle = { backgroundColor: colors.p1, opacity: .25 }
            divStyle = { display: "none" }
        }
        else if (turn % 2 === 0 && hintToggle[1] === true && hint[1] === true) {
            // player 2
            // mark cell with player 2's color, but at reduced opacity
            cellStyle = { backgroundColor: colors.p2, opacity: .25 }
            divStyle = { display: "none" }
        }
        else {
            // mark cell like normal
            cellStyle = { backgroundColor: hover ? colors.hover : "inherit" };
            divStyle = { backgroundColor: hover ? colors.hover : "#ced1d4" }
        }
    }
    else if (owner === 0) {
        cellStyle = { backgroundColor: colors.p1, color: colors.p2 };
        divStyle = { display: "none" };
    }
    else if (owner === 1) {
        cellStyle = { backgroundColor: colors.p2, color: colors.p1 };
        divStyle = { display: "none" };
    }
    else console.log(`owner not properly set for cell ${i}, ${j}`)

    return (
        <td
            className={className}
            id={i + '-' + j}
            onClick={() => playCtrl.claimVertex(i, j)}
            key={i + '-' + j}
            style={cellStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {text}
            <div
                className='vertical'
                style={divStyle}>
            </div>
            <div
                style={divStyle}
                className='horizontal'>
            </div>
        </td >
    )
}

export default BoardCell
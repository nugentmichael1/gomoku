//Table Cell of Board Component

import React, { useState } from 'react'


const BoardCell = ({ playCtrl, i, j, className, cellV, colors }) => {

    //Boolean used to set hover color
    const [hover, setHover] = useState(false)

    // //Background color for when claimed by player
    // const [color, setColor] = useState(null)
    // //Acquire useState fx
    // cellV.setUseStateFxColor(setColor)

    //Turn-claimed text
    const [text, setText] = useState("")
    //Acquire useState Fx
    cellV.setUseStateFxText(setText)

    // const [textColor, setTextColor] = useState(null)
    // //Acquire useState Fx
    // cellV.setUseStateFxTextColor(setTextColor)

    const [owner, setOwner] = useState(null)
    //Acquire useState Fx
    cellV.setUseStateFxOwner(setOwner)

    //3 cases
    //1: no owner.  owner===null.  cellStyle = {backgroundColor: hover ? colors.hover : "inherit"}; divStyle = {backgroundColor:hover ? colors.hover:"#ced1d4"}
    //2: player 1 is owner. owner===0.  cellStyle = {backgroundColor: colors.p1, color: colors.p2}; divStyle = {display:"none"}
    //3: player 2 is owner. owner===1.  cellStyle = {backgroundColor: colors.p2, color: colors.p1}; divStyle = {display:"none"}

    let cellStyle, divStyle;
    if (owner === null) {
        cellStyle = { backgroundColor: hover ? colors.hover : "inherit" };
        divStyle = { backgroundColor: hover ? colors.hover : "#ced1d4" }
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

    //Set table cell to hover color or inherit color.
    // const cellStyle = { backgroundColor: (color !== null) ? color : hover ? colors.hover : "inherit" };
    // cellStyle.color = textColor

    //Set div lines (cross) to hidden, or hover color or grey.
    // const divStyle = (color !== null) ? { display: "none" } : { backgroundColor: hover ? colors.hover : "#ced1d4" }



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
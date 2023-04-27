//Table Cell of Board Component

import React, { useState } from 'react'


const BoardCell = ({ playCtrl, i, j, className, hoverColor, cellV }) => {

    //Boolean used to set hover color
    const [hover, setHover] = useState(false)

    //Background color for when claimed by player
    const [color, setColor] = useState(null)
    //Acquire useState fx
    cellV.setUseStateFxColor(setColor)

    //Set table cell to hover color or inherit color.
    const styleBGColor = { backgroundColor: (color !== null) ? color : hover ? hoverColor : "inherit" };

    //Set div lines (cross) to hidden, or hover color or grey.
    const styleDivColor = (color !== null) ? { display: "none" } : { backgroundColor: hover ? hoverColor : "#ced1d4" }

    //Turn-claimed text
    const [text, setText] = useState("")
    //Acquire useState Fx
    cellV.setUseStateFxText(setText)

    return (
        <td
            className={className}
            id={i + '-' + j}
            onClick={() => playCtrl.claimVertex(i, j)}
            key={i + '-' + j}
            style={styleBGColor}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {text}
            <div
                className='vertical'
                style={styleDivColor}>
            </div>
            <div
                style={styleDivColor}
                className='horizontal'>
            </div>
        </td >
    )
}

export default BoardCell
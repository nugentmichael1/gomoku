//Table Cell of Board Component

import React, { useState } from 'react'


const BoardCell = ({ playCtrl, i, j, className, hoverColor, cellV }) => {

    const [hover, setHover] = useState(false)

    const [color, setColor] = useState(null)
    //Acquire useState fx
    cellV.setUseStateFxColor(setColor)

    //Set table cell to hover color or inherit color.
    const styleBGColor = { backgroundColor: (color !== null) ? color : hover ? hoverColor : "inherit" };

    //Set div lines (cross) to hover color or grey.
    const styleDivColor = { backgroundColor: (color !== null) ? color : hover ? hoverColor : "#ced1d4" }

    const [text, setText] = useState("")


    const buildTd = () => {

        return <td
            className={className}
            id={i + '-' + j}
            onClick={playCtrl.claimVertex(i, j)}
            key={i + '-' + j}
            style={styleBGColor}

        >
        </td>
    }


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
        </td>
    )
}

export default BoardCell
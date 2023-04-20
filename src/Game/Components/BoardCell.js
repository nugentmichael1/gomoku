//Table Cell of Board Component

import React, { useState } from 'react'


const BoardCell = ({ playCtrl, i, j, className, hoverColor }) => {

    const [hover, setHover] = useState(false)

    //Set table cell to hover color or inherit color.
    const stylePropBGColor = { backgroundColor: hover ? hoverColor : "inherit" };

    //Set div lines (cross) to hover color or grey.
    const stylePropDivColor = { backgroundColor: hover ? hoverColor : "#ced1d4" }

    return (
        <td
            className={className}
            id={i + '-' + j}
            onClick={() => playCtrl.claimVertex(i, j)}
            key={i + '-' + j}
            style={stylePropBGColor}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <div
                className='vertical'
                style={stylePropDivColor}>
            </div>
            <div
                style={stylePropDivColor}
                className='horizontal'>
            </div>
        </td>
    )
}

export default BoardCell
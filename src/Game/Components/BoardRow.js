
import React from 'react'

//Components
import BoardCell from "./BoardCell"

function BoardRow(props) {

    const { playCtrl, size, index, hoverColor, rowClassName, matrixRowV } = props.data;

    //Array to hold table cell tags
    const tdArr = [];

    //add cells of each column
    for (let j = 0; j < size - 1; j++) {

        //create td element
        tdArr.push(
            <BoardCell
                playCtrl={playCtrl}
                i={index}
                j={j}
                className={'col' + j}
                key={j}
                hoverColor={hoverColor}
                cellV={matrixRowV.getCellV(j)}
            />
        )
    }

    //create last column cell with different className to assist css
    tdArr.push(
        <BoardCell
            playCtrl={playCtrl}
            i={index}
            j={size - 1}
            className={'colLast'}
            key={'colLast'}
            hoverColor={hoverColor}
            cellV={matrixRowV.getCellV(size - 1)}
        />
    )

    return (
        <tr
            className={rowClassName}
            key={'row' + index}
        >
            {tdArr}
        </tr>
    );
}

export default BoardRow
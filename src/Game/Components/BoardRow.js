
import React from 'react'

//Components
import BoardCell from "./BoardCell"

function BoardRow(props) {

    const { playCtrl, size, index, rowClassName, matrixRowV, colors, hintsToggle, turn } = props.data;

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
                cellV={matrixRowV.getCellV(j)}
                colors={colors}
                hintToggle={hintsToggle}
                turn={turn}
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
            cellV={matrixRowV.getCellV(size - 1)}
            colors={colors}
            hintToggle={hintsToggle}
            turn={turn}
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
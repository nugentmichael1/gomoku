
import React from 'react'

//Components
import BoardCell from "./BoardCell"

function BoardRow(props) {

    const { size, index, bgColor, hoverColor, rowClassName, onClickFx, gameInstance } = props.data;

    //Array to hold table cell tags
    const tdArr = [];

    //add cells of each column
    for (let j = 0; j < size - 1; j++) {

        //create td element
        tdArr.push(
            <BoardCell
                i={index}
                j={j}
                clicked={onClickFx}
                className={'col' + j}
                key={j}
                bgColor={bgColor}
                hoverColor={hoverColor}
                gameInstance={gameInstance}
            />
        )
    }

    //create last column cell with different className to assist css
    tdArr.push(
        <BoardCell
            i={index}
            j={size - 1}
            clicked={onClickFx}
            className={'colLast'}
            key={'colLast'}
            bgColor={bgColor}
            hoverColor={hoverColor}
            gameInstance={gameInstance}
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
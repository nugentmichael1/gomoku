

import React, { useState } from 'react'

function BoardSize({ boardSizeInstance }) {

    //Board Size
    const [value, setValue] = useState(boardSizeInstance.size);

    const handleChange = (size) => {
        if (boardSizeInstance.change(size)) {
            setValue(size)
        }
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Board Size
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="radio15">
                                15x15
                            </label>
                            <input
                                type="radio"
                                id="radio15"
                                name="boardSize"
                                value={15}
                                onChange={(e) => handleChange(Number(e.target.value))}
                                checked={15 === value} />
                            <label htmlFor="radio19">
                                19x19
                            </label>
                            <input
                                type="radio"
                                id="radio19"
                                name="boardSize"
                                value={19}
                                onChange={(e) => handleChange(Number(e.target.value))}
                                checked={19 === value} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>)
}

export default BoardSize
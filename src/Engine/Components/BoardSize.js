

import React, { useState } from 'react'

function BoardSize({ options, view }) {

    //useState hook
    const [value, setValue] = useState(view.getDefault());

    //acquire react hook useState setter function
    view.setUseStateFxRadio(setValue)

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
                                onChange={(e) => options.setBoardSize(Number(e.target.value))}
                                checked={15 === value} />
                            <label htmlFor="radio19">
                                19x19
                            </label>
                            <input
                                type="radio"
                                id="radio19"
                                name="boardSize"
                                value={19}
                                onChange={(e) => options.setBoardSize(Number(e.target.value))}
                                checked={19 === value} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>)
}

export default BoardSize
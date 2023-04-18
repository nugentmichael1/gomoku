import React, { useState } from 'react'

const buildColorOptions = (colorChoices) => {

    const options = []

    colorChoices.forEach((choice) => {
        options.push(
            <option value={choice.hexCode} key={choice.name}>{choice.name}</option>
        )
    })

    return options
}

function BoardBgColor({ options, view }) {

    //Board Background Color
    const [standard, setStandard] = useState(view.getDefault())

    //Acquire react hook setState function
    view.setUseStateFunctionSetStandard(setStandard)

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Board Color
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <select onChange={(e) => options.setBgColor(e.target.value)} value={standard}>
                                {buildColorOptions(view.getChoices())}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BoardBgColor
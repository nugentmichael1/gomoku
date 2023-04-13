import React, { useState } from 'react'

const buildOptions = (colorChoices) => {

    const options = []

    colorChoices.forEach((choice) => {
        options.push(
            <option value={choice.hexCode} key={choice.name}>{choice.name}</option>
        )
    })

    return options
}

function BoardBgColor({ obj }) {

    //Board Background Color
    const [standard, setStandard] = useState(obj.getStandard().getHexCode())

    const handleChange = (color) => {

        if (obj.change(color)) {

            setStandard(obj.getStandard().getHexCode())
        }

    }

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
                            <select onChange={(e) => handleChange(e.target.value)} value={standard}>
                                {buildOptions(obj.getColorChoices())}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BoardBgColor
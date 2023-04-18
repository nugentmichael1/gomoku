import React, { useState } from 'react'

function BgImage({ options, view }) {

    const [bgImageOn, setBgImageOn] = useState(view.getDefaultOn())

    view.setUseStateFxOn(setBgImageOn)

    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        Bulldog BG
                    </th>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" onChange={() => options.setBgImageOn(Boolean(1 - bgImageOn))} checked={bgImageOn} />
                    </td>
                </tr>
            </tbody>
        </table >
    )
}

export default BgImage
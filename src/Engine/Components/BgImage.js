import React, { useState } from 'react'

function BgImage({ bgImage }) {

    const [bgImageOn, setbgImageOn] = useState(false)

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
                        <input type="checkbox" onChange={(e) => setbgImageOn(Boolean(1 - bgImage.on))} checked={bgImageOn} />
                    </td>
                </tr>
            </tbody>
        </table >
    )
}

export default BgImage
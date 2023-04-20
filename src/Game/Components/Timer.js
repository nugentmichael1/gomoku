//Timer - Component of Game Status Table

import { useState, useEffect } from "react";


function Timer({ play, timerV }) {

    //useState Hook - Counter Text
    const [timerCount, setTimerText] = useState("Timer")

    //useState Hook - Button Text
    const [timerButtonText, setTimerButtonText] = useState("Start")

    //onClick Fx
    const timerController = () => {

        //Start or Reset path
        if (timerButtonText === "Start") play.start()
        else if (timerButtonText === "Reset") play.reset()
    }

    //Enable view-interface to control react state
    timerV.setUseStateFxCounter(setTimerText)
    timerV.setUseStateFxButtonText(setTimerButtonText)

    //Ensures interval function is cleared upon component dismount
    useEffect(() => {
        return () => { play.stop() }

    }, [play])

    return (
        <table>
            <tbody>
                <tr>
                    <th id="timer">
                        {timerCount}
                    </th>
                </tr>
                <tr>
                    <td>
                        <input type="Button" value={timerButtonText} id="startBut" onClick={timerController} readOnly={true} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Timer
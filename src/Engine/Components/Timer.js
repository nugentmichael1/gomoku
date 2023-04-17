//Timer - Component of Game Status Table

import { useState, useEffect } from "react";


function Timer({ timer, play, timerV }) {


    //Timer
    const [timerCount, setTimerText] = useState("Timer")
    const [timerButtonText, setTimerButtonText] = useState("Start")
    const timerController = () => {

        //Start or Reset path
        if (timerButtonText === "Start") {

            if (play.start()) {
                //timer button text
                setTimerButtonText("Reset")
            }
        }
        else if (timerButtonText === "Reset") {

            if (play.reset()) {
                //timer button text
                setTimerButtonText("Start")
            }
        }
    }

    //Enable view-interface to control react state
    timerV.setUseStateFxCounter(setTimerText)

    //Ensures interval function is cleared upon component dismount
    useEffect(() => {
        // return () => { clearInterval(play.getIntervalId()) }
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
//Timer - Component of Game Status Table

import { useState, useEffect } from "react";


function Timer({ timer }) {

    //Timer
    const [timerCount, setTimerText] = useState("Timer")
    const [timerButtonText, setTimerButtonText] = useState("Start")
    const timerController = () => {

        //Start or Reset path
        if (timerButtonText === "Start") {

            if (timer.start(setTimerText)) {
                //timer button text
                setTimerButtonText("Reset")
            }
        }
        else if (timerButtonText === "Reset") {

            if (timer.reset(setTimerText)) {
                //timer button text
                setTimerButtonText("Start")
            }
        }
    }
    //Ensures interval function is cleared upon component dismount
    useEffect(() => {
        return () => { clearInterval(timer.getIntervalId()) }
    }, [])


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

import { useState, useEffect } from "react";


import validateUsername from "../../AuxilaryFunctions/ValidateUsername"



function RegisterUsername({ username, setUsername }) {


    const [validUsername, setValidUsername] = useState(false)


    useEffect(() => {

        const valid = validateUsername
        setValidUsername(valid)

    }, [username])

    const message = (validUsername === true) ? "Username is acceptable." : "Please choose another username."

    return (
        <div id="registerUsername">
            <h2>
                RegisterUsername
            </h2>
            <label htmlFor="registerUsernameInput">
                Username:
            </label>
            <input id="registerUsernameInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <p>{message}</p>
        </div>
    )
}

export default RegisterUsername;
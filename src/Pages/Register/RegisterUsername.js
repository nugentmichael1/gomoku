
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


//View Decision
    // const view =
    //     (user !== null && user.displayName !== null) ?
    //         //Logged-in view
    //         < p > Logged in as: {user.displayName}.</p>
    //         :
    //         (user !== null && user.displayName === null) ?
    //             //Register Username view
    //             <RegisterUsername username={username} setUsername={setUsername} />
    //             :
    //             //Logged-out view 
    //             registrationForm
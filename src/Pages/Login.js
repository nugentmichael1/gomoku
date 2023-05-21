//Login

//React
import { useState } from "react"

//CSS
import "../CSS/login.css"

//Navigation
import { Link } from "react-router-dom";

import firebaseSignInWithUsername from "../FirebaseAuth/signInWithUsername"

import LoggedInView from "../Components/LoggedInView";

const LogInForm = () => {

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const [message, setMessage] = useState("")

    const logIn = async () => {

        const result = await firebaseSignInWithUsername(username, password)

        setMessage(result)

    }

    return <div>
        < form id='logInForm' >
            {/* <fieldset>
            // <legend>Traditional</legend> */}
            <ul>
                <li>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="credentials" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </li>
                <li>
                    <label htmlFor="password">Password:</label>
                    <input type='password' name="credentials" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </li>
                <li>
                    <input type="button" value="Log In" onClick={logIn} />
                </li>
            </ul>
            {/* </fieldset> */}
        </form >
        <p className="loginResponse">{message}</p>
    </div>
}

const heading = <h1>Log-In</h1>

const Login = ({ user }) => {


    //View Decision
    if (user === null) {
        // logInView (currently logged-out)
        return <>
            {heading}
            {/* <FirebaseAuthUI /> */}
            <LogInForm />
            <p className="loginRegisterSwitchP">No account? <Link to={"/Register"}>Register here.</Link></p>
        </>
    }

    else {
        // logOutView (currently logged-in)
        return <>
            {heading}
            <LoggedInView displayName={user.displayName} />
        </>
    }

};

export default Login;
//Login

//React
import { useState } from "react"

//CSS
import "../CSS/login.css"

//Navigation
import { Link } from "react-router-dom";

//Axios - http requests
import http from "../http-common"

const verifyUserCredentials = async (username, password) => {

    const result = await http.get("userLogin", {
        params:
        {
            username: username,
            password: password
        }
    })
        .then((res) => {

            // console.log(res)

            return res.data
        })
        .catch((error) => {
            console.error(error)
            return null
        })

    // console.log(data)

    return result
}

// queries backend to: 
// (1) verify username and password combination are correct, 
// (2) acquire user's statistics like games won and personal settings
// (3) acquire JWT to securely record game wins
const logIn = async (username, password, setUser) => {

    if (await verifyUserCredentials(username, password)) setUser(username)

    // console.log(result)


    //set session storage variables
    //store JWT

    //debug
    // console.log("username:", username, "password:", password)
}

const LogInForm = ({ setUser }) => {

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    return < form id='logInForm' >
        <fieldset>
            <legend>Credentials</legend>
            <ul>
                <li>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </li>
                <li>
                    <label htmlFor="password">Password:</label>
                    <input type='password' name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </li>
                <li>
                    <input type="button" value="Log In" onClick={() => logIn(username, password, setUser)} />
                </li>
                {/*  Debug
            <input type='button' value='Log in as random user to demo'
                onclick='logInRandDebug()'>
        */}
            </ul>
            No account? <Link to={"/Register"}>Register here.</Link>
        </fieldset>
    </form >
}

const heading = <h1>Log-In</h1>

const Login = ({ user, setUser }) => {

    if (user === null) {
        // logInView (currently logged-out)
        return <>
            {heading}
            <LogInForm setUser={setUser} />
        </>
    }

    else {
        // logOutView (currently logged-in)
        return <>
            {heading}
            <p>You are logged-in, {user}</p>
            <input
                type='button'
                value="Log Out"
                onClick={() => setUser(null)}
                id='logOutButton'
            />
        </>
    }

};

export default Login;
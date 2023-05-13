//Login

//React
import { useState } from "react"

//JWT
import { decodeToken } from 'react-jwt'

//CSS
import "../CSS/login.css"

//Navigation
import { Link } from "react-router-dom";

//Axios - http requests
import http from "../http-common"

// queries backend to: 
// (1) verify username and password combination are correct, 
// (2) acquire user's statistics like games won and personal settings
// (3) acquire JWT to securely record game wins
const loginRequest = async (username, password) => {

    const result = await http.post("userLogin",
        {
            username: username,
            password: password
        }
    )
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            console.error(error)
            return null
        })

    return result
}


const logIn = async (username, password, setUser) => {

    const result = await loginRequest(username, password)

    //Guard: Failure to validate credentials on backend
    if (!result.jwt) {
        //case 1: user provided invalid credentials

        //case 2: server error

        return
    }

    //decode and destructure jwt
    const { games } = decodeToken(result.jwt)

    //set state of user for entire app
    setUser({ "username": username, "games": games })

    //store jwt in session storage variable
    sessionStorage.setItem("userJWT", result.jwt)
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
            <p id="loggedInMessage">User {user.username} is logged-in.</p>
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
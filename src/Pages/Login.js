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

//My wrapper for firebase auth ui
import FirebaseAuthUI from "../FirebaseAuthUI";

import firebase from 'firebase/compat/app'

// queries backend to: 
// (1) verify username and password combination are correct, 
// (2) acquire user's statistics like games won and personal settings
// (3) acquire JWT to securely record game wins
// const loginRequest = async (username, password) => {

//     const result = await http.post("userLogin",
//         {
//             username: username,
//             password: password
//         }
//     )
//         .then((res) => {
//             return res.data
//         })
//         .catch((error) => {
//             console.error("error in loginRequest()", error)
//             return { "message": "Failed to reach backend." }
//         })

//     return result
// }



const LogInForm = ({ }) => {

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const [message, setMessage] = useState("")

    //function to query backend, set state of user, and set session storage of jwt
    // const logInWithAxios = async () => {

    //     const result = await loginRequest(username, password)

    //     //Guard: Failure to validate credentials on backend
    //     if (!result.jwt) {

    //         //case 1: user provided invalid credentials
    //         //case 2: server error
    //         setMessage(result.message)

    //         return
    //     }

    //     //decode and destructure jwt
    //     const { games } = decodeToken(result.jwt)

    //     //set state of user for entire app
    //     setUser({ "username": username, "games": games })

    //     //store jwt in session storage variable
    //     sessionStorage.setItem("jwt", result.jwt)
    // }

    const firebaseAuth = async () => {

        const result = await firebase.auth().signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                return userCredential
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
                setMessage(errorMessage)
                return null
            })

        return result
    }

    return <div>
        < form id='logInForm' >
            {/* <fieldset>
            // <legend>Traditional</legend> */}
            <ul>
                <li>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </li>
                <li>
                    <label htmlFor="password">Password:</label>
                    <input type='password' name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </li>
                <li>
                    <input type="button" value="Log In" onClick={firebaseAuth} />
                </li>
            </ul>
            {/* </fieldset> */}
        </form >
        <p className="loginResponse">{message}</p>
    </div>
}

const heading = <h1>Log-In</h1>

const Login = ({ user, setUser, setJWT }) => {

    const logOut = () => {
        firebase.auth().signOut()
            .then(() => {
                //success
                // setUser(null);

            })
            .catch((error) => {
                console.error(error)
            })

        // setJWT(null);
        // sessionStorage.setItem("jwt", null)
    }

    //View Decision
    if (user === null) {
        // logInView (currently logged-out)
        return <>
            {heading}
            <FirebaseAuthUI />
            <LogInForm setUser={setUser} />
            <p className="loginRegisterSwitchP">No account? <Link to={"/Register"}>Register here.</Link></p>
        </>
    }

    else {
        // logOutView (currently logged-in)
        return <>
            {heading}
            <p id="loggedInMessage">Logged in as: {user.email}</p>
            {/* {console.log(user.displayName)} */}
            <input
                type='button'
                value="Log Out"
                onClick={logOut}
                id='logOutButton'
            />
        </>
    }

};

export default Login;
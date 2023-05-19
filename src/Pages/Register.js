//Register


//React
import { useState } from "react";

//Axios
import http from "../http-common"

//CSS
import "../CSS/register.css"

import firebase from 'firebase/compat/app'

import RegisterUsername from "./Register/RegisterUsername";



const firebaseSignUp = async (email, password, setMessage) => {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user
            return user
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(errorCode, errorMessage)
            setMessage(errorMessage)
            return null
        })

    return result
}

const heading = <h1>Register</h1>

const Register = ({ user, setUser, setJWT }) => {

    //Form values
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("")

    const sendRegistration = async () => {

        const formValues = {
            "email": email,
            "username": username,
            "password": password
        }

        // const result = await postNewRegistration(formValues);
        const result = await firebaseSignUp(email, password, setMessage)

        //Guard: registration failure
        if (result === null) {

            // setMessage(result.message)

            return
        }

        //if successful
        // setUser({ "user": username, "games": [] });
        // setJWT(result.jwt)
        // sessionStorage.setItem("jwt", result.jwt)
    }

    const registrationForm = <form>
        <fieldset>
            <fieldset>
                <legend>Credentials</legend>
                <ul>
                    {/* <li>
                        <label htmlFor="uname">
                            User Name:
                        </label>
                        <input
                            type="text"
                            placeholder="GomokuGuy37"
                            id="username"
                            name='username'
                            value={username}
                            onChange={
                                (e) => setUsername(e.target.value)
                            }
                        />
                    </li> */}
                    <li>
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            }
                        />
                    </li>
                    <li>
                        <label htmlFor="pass">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="pass"
                            name='password'
                            value={password}
                            onChange={
                                (e) => setPassword(e.target.value)
                            }
                        />
                    </li>
                </ul>
            </fieldset>
            <input
                onClick={sendRegistration}
                type="button"
                value="Register"
            />
            <p>{message}</p>
        </fieldset>
    </form>

    //View Decision
    const view =
        (user !== null && user.displayName !== null) ?
            //Logged-in view
            < p > Logged in as: {user.displayName}.</p>
            :
            (user !== null && user.displayName === null) ?
                //Register Username view
                <RegisterUsername username={username} setUsername={setUsername} />
                :
                //Logged-out view 
                registrationForm

    //render
    return <div className="register">
        {heading}
        {view}
    </div>
};

export default Register;
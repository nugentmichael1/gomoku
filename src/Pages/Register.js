//Register


//React
import { useState } from "react";

//CSS
import "../CSS/register.css"

//Ensure username is unique to database, and has length of at least 1
import validateUsername from "../AuxilaryFunctions/ValidateUsername"

//Store user info in firestore database
import createUserInFirestore from "../Firestore/createUser"

//Firebase Authentication - my custom function to modify their api
import firebaseSignUpWithUsername from "../FirebaseAuth/signUpWithUsername";

import LoggedInView from "../Components/LoggedInView";


const passwordsMatchCheck = (pass1, pass2) => {
    // console.log((pass1 === pass2))
    // console.log(typeof (pass1), typeof (pass2))
    return (pass1 === pass2)
}

const Register = ({ user }) => {

    //Form values
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [message, setMessage] = useState("")


    const registerUser = async () => {

        //Guard: verify passwords match
        if (!passwordsMatchCheck(password, password2)) {
            setMessage("Passwords do not match")
            return;
        }

        //Guard: Duplicate username
        if (! await validateUsername(username)) {
            setMessage("Username is taken already.")
            return;
        }

        //append @nugentMichael.com domain to username, and treat as email for sake of Firebase's auth service.
        const fakeEmail = username + "@NugentMichael.com"

        //Register user through Firebase's auth service.
        const result = await firebaseSignUpWithUsername(fakeEmail, password)

        setMessage(result.message)

        //create user profile if Firebase auth service is successful
        if (result.error === false)
            createUserInFirestore({
                fName: fName,
                lName: lName,
                email: email,
                username: username.toLowerCase(),
                displayName: username,
                won_games: 0,
                time_played: 0,
                games_played: 0
            })
    }

    const registrationForm = <form>
        <fieldset>
            <fieldset>
                <legend>
                    Contact (Optional)
                </legend>
                <ul>
                    <li>
                        <label htmlFor="fName">
                            First Name:
                        </label>
                        <input type="text" id="fName" name="contact" value={fName} onChange={(e) => setFName(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="lName">
                            Last Name:
                        </label>
                        <input type="text" id="lName" name="contact" value={lName} onChange={(e) => setLName(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="contact"
                            value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            }
                        />
                    </li>
                </ul>
            </fieldset>
            <fieldset>
                <legend>Credentials</legend>
                <ul>

                    <li>
                        <label htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            // placeholder="GomokuGuy37"
                            id="username"
                            name='username'
                            value={username}
                            onChange={
                                (e) => setUsername(e.target.value)
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
                    <li>
                        <label htmlFor="pass2">
                            Password (again):
                        </label>
                        <input type="password" id="pass2" name="credentials" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                    </li>
                </ul>
            </fieldset>
            <input
                onClick={registerUser}
                type="button"
                value="Register"
            />
            <p>{message}</p>
        </fieldset>
    </form>

    //View Decision
    const view = (user !== null) ?
        //Logged-in view
        <LoggedInView displayName={user.displayName} />
        :
        registrationForm



    //render
    return <div className="register">
        <h1>Register</h1>
        {view}
    </div>
};

export default Register;
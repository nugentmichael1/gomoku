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

        //Guard: Duplicate username
        if (!validateUsername(username)) {
            setMessage("Username is taken already.")
            return;
        }

        //append @nugentMichael.com domain to username, and treat as email for sake of Firebase's auth service.
        const fakeEmail = username + "@NugentMichael.com"

        //Register user through Firebase's auth service.
        const user = await firebaseSignUpWithUsername(fakeEmail, password, setMessage)

        //create user profile if Firebase auth service is successful
        if (user !== null)
            createUserInFirestore({
                fName: fName,
                lName: lName,
                email: email,
                username: username,
                won_games: 0,
                time_played: 0,
                games_played: 0
            })


        // if (user !== null) {

        //     const displayNameStr = (fName !== "" && lName !== "") ? fName + " " + lName : undefined

        //     const emailStr = (email !== "") ? email : undefined

        //     //Using photoURL to hold email because we use original email to hold username, now, to accomodate Firebase email sign-up/log-in
        //     user.updateProfile({
        //         displayName: displayNameStr,
        //         photoURL: emailStr
        //     })
        // }

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
        <LoggedInView username={user} />
        :
        registrationForm



    //render
    return <div className="register">
        <h1>Register</h1>
        {view}
    </div>
};

export default Register;



// //Axios
// import http from "../http-common"

 // const sendRegistration = async () => {

    //     const formValues = {
    //         "email": email,
    //         "username": username,
    //         "password": password
    //     }

    //     // const result = await postNewRegistration(formValues);
    //     // const result = await firebaseSignUp(email, password, setMessage)

    //     //Guard: registration failure
    //     if (result === null) {

    //         // setMessage(result.message)

    //         return
    //     }

    //     //if successful
    //     // setUser({ "user": username, "games": [] });
    //     // setJWT(result.jwt)
    //     // sessionStorage.setItem("jwt", result.jwt)
    // }
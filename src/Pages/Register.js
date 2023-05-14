//Register


//React
import { useState } from "react";

//Axios
import http from "../http-common"

//CSS
import "../CSS/register.css"

const postNewRegistration = async (formValues) => {

    //use axios to trigger backend registration route
    const result = await http.post("/userRegister", formValues)

        .then(res => {

            //debug
            // console.log(res.data)

            return res.data
        })

        .catch(error => {
            console.log("error in postNewRegistration():", error)
            return error
        })

    return result
}

const heading = <h1>Register</h1>

const Register = ({ user, setUser, setJWT }) => {

    //Form values
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("")

    const sendRegistration = async () => {

        const formValues = {
            "fName": fName,
            "lName": lName,
            "email": email,
            "username": username,
            "password": password
        }

        const result = await postNewRegistration(formValues);

        //Guard: registration failure
        if (!result.jwt) {

            setMessage(result.message)

            return
        }

        //if successful
        setUser({ "username": username, "games": [] });
        setJWT(result.jwt)
        sessionStorage.setItem("jwt", result.jwt)
    }

    const registrationForm = <form>
        <fieldset>
            <fieldset>
                <legend>Contact</legend>
                <ul>
                    <li>
                        <label htmlFor="fname">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            value={fName}
                            onChange={
                                (e) => setFName(e.target.value)
                            }
                        />
                    </li>
                    <li>
                        <label htmlFor="lname">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            value={lName}
                            onChange={
                                (e) => setLName(e.target.value)
                            }
                        />
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email (Optional):
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
                </ul>
            </fieldset>
            <fieldset>
                <legend>Credentials</legend>
                <ul>
                    <li>
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
        (user !== null) ?
            //Logged-in view
            <p>You are logged in as {user.username}.</p>
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
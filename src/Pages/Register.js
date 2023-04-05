//Register


//React
import { useState } from "react";

//CSS
import "../CSS/register.css"


//Check for logged-in status
//Present appropriate content

const sendRegistrationHelper = (formValues) => {

    //use axios to communicate with backend
    console.log(formValues)
}

const Register = () => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const formValuesDefault = {
    //     fname: "",
    //     lName: "",
    //     email: "",
    //     username: "",
    //     password: ""
    // }

    // const [formValues, setFormValues] = useState(formValuesDefault)

    const sendRegistration = () => {

        //debug
        console.log("sendRegistration()")

        const formValues = {
            "fname": fName,
            "lName": lName,
            "email": email,
            "username": username,
            "password": password
        }

        sendRegistrationHelper(formValues);
    }


    return <div className="register">
        <h1>Register</h1>
        <form>
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
                                User Namer:
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
            </fieldset>
        </form>
    </div >
};

export default Register;
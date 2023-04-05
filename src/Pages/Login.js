//Login

//React
import { useState, useEffect } from "react"

//CSS
import "../CSS/login.css"

//Navigation
import { Link } from "react-router-dom";


//Check logged-in status
const checkLoggedInStatus = () => {

    const token = sessionStorage.getItem("token");

    //debug
    // console.log(token)

    if (token !== null) {
        //Inform user he is already logged in, and provide option to log-out.

        //debug
        console.log("Logged in")
        return true;
    }
    else {
        //Provide form to log-in.

        //debug
        console.log("Logged out")
        return false;
    }
}

const logIn = () => {

    //set session storage variables
    //store JWT
}

const logOut = () => {

    //clear session storage
}

const logInForm = <form id='logInForm'>
    <fieldset>
        <legend>Credentials</legend>
        <ul>
            <li>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" />
            </li>
            <li>
                <label htmlFor="password">Password:</label>
                <input type='password' name="password" id="password" />
            </li>
            <li>
                <input type="button" value="Log In" onClick={logIn()} />
            </li>
            {/*  Debug
            <input type='button' value='Log in as random user to demo'
                onclick='logInRandDebug()'>
        */}
        </ul>
        No account? <Link to={"/Register"}>Register here.</Link>
    </fieldset>
</form>

const logOutContent = <input type='button'
    value="Log Out"
    onClick={logOut()}
    id='logOutButton' />

const Login = () => {

    const [content, setContent] = useState(logInForm);

    useEffect(() => {
        if (checkLoggedInStatus()) {
            setContent(logOutContent);
        }
    }, [])

    return <>
        <h1>Log-in</h1>
        {content}
        <p id='loggedInMessage'></p>
    </>
};

export default Login;
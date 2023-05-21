//Axios instance

import axios from 'axios'

const client = axios.create({
    baseURL: (process.env.NODE_ENV === 'development') ? "http://127.0.0.1:5001/gomoku-77118/us-central1/" : "https://us-central1-gomoku-77118.cloudfunctions.net/"
})

export default client;


//Login page function

//JWT
// import { decodeToken } from 'react-jwt'

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


    // //Axios
    //registration
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
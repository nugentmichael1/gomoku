//Modification to firebase's auth api to use username instead of email as id

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "../FirebaseConfig"

firebase.auth().useEmulator("http://localhost:9099")

const signInWithUsername = async (username, password) => {

    //append @nugentmichael.com to username
    const fakeEmail = username + "@NugentMichael.com"

    const result = await firebase.auth().signInWithEmailAndPassword(fakeEmail, password)
        .then((userCredential) => {
            return "Successfully logged in."
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
            return errorMessage
        })

    return result
}

export default signInWithUsername;
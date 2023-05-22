
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "../FirebaseConfig"

//Mis-use Firebase's auth service to implement username instead of email for user sign-up
const firebaseSignUpWithUsername = async (username, password, setMessage) => {
    const result = await firebase.auth().createUserWithEmailAndPassword(username, password)
        .then(() => {

            return { error: false, message: "Successfully logged in." }
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(errorCode, errorMessage)
            return { error: true, message: errorMessage }
        })

    // if (result !== null) {
    //     result.updateProfile({
    //         displayName: username
    //     })
    //         .then(() => {
    //             console.log(result.displayName)
    //             return true;
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }

    return result
}

export default firebaseSignUpWithUsername;

import firebase from 'firebase/compat/app'


//Mis-use Firebase's auth service to implement username instead of email for user sign-up
const firebaseSignUpWithUsername = async (username, password, setMessage) => {
    const result = await firebase.auth().createUserWithEmailAndPassword(username, password)
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

import firebase from 'firebase/compat/app'

import "../FirebaseConfig"

const logOut = () => {
    firebase.auth().signOut()
        .then(() => {
            //success
            // setUser(null);

        })
        .catch((error) => {
            console.error(error)
        })

    // setJWT(null);
    // sessionStorage.setItem("jwt", null)
}

export default logOut;
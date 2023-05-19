
import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

//initializes firebase app
import firebaseConfig from "../FirebaseConfig"


const db = firebase.firestore();

if (window.location.hostname === "localhost") {
    db.useEmulator("localhost", 8080)
}

const validateUsername = async (username) => {

    //guard: empty string
    // console.log(username.length)
    if (username.length === 0) return false

    //convert username to all lowercase

    const usersRef = db.collection("Users")

    const unique = await usersRef.where("username", "==", username).get()
        .then((querySnapshot) => {

            //debug
            // console.log("querySnapshot")

            if (querySnapshot.size === 1) {

                //debug
                console.log(querySnapshot.size)

                return false;
            }

            //debug
            // console.log("querySnapshot.size===0")
            return true
        })
        .catch((error) => {
            console.error(error)
            return null
        })

    console.log(unique)

    return unique
}

export default validateUsername;
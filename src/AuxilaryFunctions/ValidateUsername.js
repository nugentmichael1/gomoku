
import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

//initializes firebase app
import "../FirebaseConfig"


const db = firebase.firestore();

if (window.location.hostname === "localhost") {
    db.useEmulator("localhost", 8080)
}

const validateUsername = async (username) => {

    //guard: empty string
    // console.log(username.length)
    if (username.length === 0) return false

    //convert username to all lowercase
    const usernameLowerCase = username.toLowerCase()
    // console.log(usernameLowerCase)

    const usersRef = db.collection("Users")

    // console.log("username===usernameLowerCase", username === usernameLowerCase)

    const unique = await usersRef.where("username", "==", usernameLowerCase).get()
        .then((querySnapshot) => {

            //debug
            // console.log("querySnapshot")
            // querySnapshot.forEach((doc) => {
            //     console.log(doc.id, "=>", doc.data())
            // })

            if (querySnapshot.size >= 1) {

                //debug
                console.log(querySnapshot.size)

                return false;
            }

            //debug
            console.log("querySnapshot.size===0")
            return true
        })
        .catch((error) => {
            console.error(error)
            return null
        })

    console.log(unique)

    //debug
    // const result = await usersRef.get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id, "=>", doc.data())
    //         })
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     })

    return unique
}

export default validateUsername;

import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import "../FirebaseConfig"

const db = firebase.firestore()

const getUserDisplayName = async (username) => {

    const userQuery = db.collection("Users").where("username", "==", username)

    const displayName = await userQuery.get()
        .then((querySnapshot) => {
            if (querySnapshot.size === 1) {
                return querySnapshot.docs[0].data().displayName
            }
            else return false
        })
        .catch((error) => {
            console.error("Error in getUserDisplayName():", error)
            return null
        })

    return displayName;
}

export default getUserDisplayName;


import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

//initialize firebase app
import "../FirebaseConfig"

const db = firebase.firestore()

const createUser = async (data) => {
    console.log("test")

    await db.collection("Users").add(data)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document:", error);
        })
}


export default createUser;

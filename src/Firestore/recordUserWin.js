//update user record of users database collection:
// increments games played and games won each by 1
// increments time played by time argument

import firebase from "firebase/compat/app";

import "firebase/compat/firestore"

import "../FirebaseConfig"

const db = firebase.firestore()

const recordUserWin = async (username, time) => {

    //Query to find document by username
    const query = db.collection("Users").where("username", "==", username)

    //Get reference to user's document in collection
    const userDocId = await query.get()
        .then((querySnapshot) => {

            return querySnapshot.docs[0].id
        })
        .catch((error) => {
            console.error("Error getting documents in 'recordUserWin()':", error)
        })

    //Use document id to create reference
    const userRef = db.collection("Users").doc(userDocId)

    //use reference to update document
    userRef.update({
        won_games: firebase.firestore.FieldValue.increment(1),
        time_played: firebase.firestore.FieldValue.increment(time),
        games_played: firebase.firestore.FieldValue.increment(1)
    })
        .then(() => {
            console.log("Document updated for 'recordUserWin'.")
        })
        .catch((error) => {
            console.error("Error in 'recordUserWin():", error)
        })
}

export default recordUserWin;


import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import "../FirebaseConfig"

const db = firebase.firestore()

const getUserGames = async (username) => {

    //Firebase does not support "or" queries with Web version 8.  We will instead do two separate searches and combine them manually.

    const collectionRef = db.collection("Games")

    //Search 1: User is listed as Player 1 in game record
    const gamesP1 = await getUserGamesOrHelper(collectionRef, username, "player1")

    //Search 2: User is listed as Player 2 in game record
    const gamesP2 = await getUserGamesOrHelper(collectionRef, username, "player2")

    //Guard: One of the queries failed
    if (gamesP1 === undefined || gamesP2 === undefined) return null

    // debug
    // console.log(gamesP1, gamesP2)

    return [...gamesP1, ...gamesP2]

}

const getUserGamesOrHelper = async (collectionRef, username, field) => {

    const query = collectionRef.where(field, "==", username)

    const games = await query.get()
        .then((querySnapshot) => {
            return querySnapshot.docs.map((doc) => {
                return doc.data()
            })
        })
        .catch((error) => {
            console.error("Error in getUserGames() for", field, "search.", error)
        })

    return games
}



export default getUserGames;
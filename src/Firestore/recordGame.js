//add record to games database collection with all fields:
// time_length, turn_count, date_time, won bool
//winner is a number or bool to represent player 1 or 2 (but expressed as 0 or 1).  always 0 for now because player 2 isn't playable.

import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import "../FirebaseConfig"

const db = firebase.firestore()

const recordGame = async (time, turns, player1, player2, winner) => {

    console.log("recordGame()")

    const gamesRef = db.collection("Games")

    gamesRef.add({
        time_length: time,
        turn_count: turns,
        player1: player1,
        player2: player2,
        winner: winner,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then((docRef) => {
            console.log(`'recordGame() successfully created document ${docRef.id}.`)
        })
        .catch((error) => {
            console.error("Error in 'recordGame()':", error)
        })
}

export default recordGame;
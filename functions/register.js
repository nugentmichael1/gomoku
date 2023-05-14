//main module
const functions = require("firebase-functions");

//CORS
const cors = require('cors')({ origin: true });

//Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin')

//JWT
const jwtUtility = require('./jwtUtility')

//check username against database for uniqueness
const checkUsernameUniqueness = async (username) => {

    //create query
    const query = admin.firestore().collection("Users").where("username", "==", username)
    //run query
    const result = await query.get()
        .then(querySnapshot => {

            //any size more than 0 means username is not unique
            if (querySnapshot.size > 0) return false

            return true
        })
        .catch(error => {
            console.error(error)
            return error
        })

    return result
}

const register = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {

        //get parameters from request body
        const { fName, lName, email, username, password } = req.body

        //Guard: Username already exists in database
        if (!await checkUsernameUniqueness(username)) {

            // notify client with 200 code and reason for operation failure
            res.status(200).send({ "message": "Username already exists." })

            return
        }


        // if unique

        //hash password

        // create new user document in firebase Users collection
        await admin.firestore().collection("Users").add({
            first_name: fName,
            last_name: lName,
            email: email,
            username: username,
            password: password,
            games_won: 0,
            games_played: 0,
            time_played: 0
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id)
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                res.status(500).send({ "message": "Server error", "error": error })
                return
            })


        // create jwt
        const jwt = jwtUtility.createJWT(username, null)

        // return jwt to client
        res.status(200).send({ "jwt": jwt, "message": "Success" })

    })
})

exports.ctrl = register

//main module
const functions = require("firebase-functions");

//CORS
const cors = require('cors')({ origin: true });

//Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin')

//JWT
const jwt = require('jsonwebtoken')

//Firebase is initialized on main exports page (index.js)

const createJWT = (username, games) => {

    const payload = { "username": username, "games": games }

    const secret = "gomokuJWTSecret"

    const token = jwt.sign(payload, secret)

    return token
}

//validate username and password
const verifyUserCredentials = async (username, password) => {

    //query Users collection of firestore database with restraints of provided username and password
    const query = admin.firestore().collection("Users").where("username", "==", username).where("password", "==", password);

    //if username and password combination exists, set to true, else false
    const result = await query.get()
        .then((querySnapshot) => {

            //no username and password combination found
            if (querySnapshot.size !== 1) return false

            //found username and password combination
            return true
        })
        .catch(error => {
            //failure to query database
            console.log("Error:", error)
            return error
        })

    return result
}

const login = functions.https.onRequest(
    (req, res) => {
        cors(req, res, async () => {

            // console.log(req)

            //Verify username and password combination are present in database
            const verificationResult = await verifyUserCredentials(req.body.username, req.body.password)

            //Guard: verification failure
            if (verificationResult !== true) {
                if (verificationResult === false) res.status(200).send({ "message": "Username and password combination not found." })
                else res.status(500).send({ "message": "Server error.", "error": error })
                return
            }

            //use username to access games collection and find all games user has played
            const games = null;

            //Guard: games acquisition failed


            //create jwt
            const jwt = createJWT(req.body.username, games)


            //Guard: JWT creation failed


            res.status(200).send({ "jwt": jwt, "message": "Success" })
        })
    }
)

exports.ctrl = login
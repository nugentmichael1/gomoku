//Record Game

//main module
const functions = require("firebase-functions");

//CORS
const cors = require('cors')({ origin: true });

//Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin')

const jwtUtility = require('./jwtUtility')

const recordGame = functions.https.onRequest((res, req) => {
    cors(req, res, () => {
        /* I think I moved away from serverless functions and this feature is in the firestore folder of the frontend, now. */
    })
})

exports.ctrl = recordGame
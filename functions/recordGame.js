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

    })
})

exports.ctrl = recordGame
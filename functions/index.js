//Firebase functions - main file

//main module
const functions = require("firebase-functions");

//CORS
const cors = require('cors')({ origin: true });

//Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin')


//firestore initialization
admin.initializeApp();


exports.helloWorld = functions.https.onRequest(
    (req, res) => {
        cors(req, res, () => {
            functions.logger.info("Hello logs!", { structuredData: true });
            res.status(200).send("Hello from Firebase!");
        })
    });

//user routes
exports.userLogin = functions.https.onRequest(
    (req, res) => {
        cors(req, res, async () => {

            // console.log(req.query)

            const query = admin.firestore().collection("Users").where("username", "==", req.query.username).where("password", "==", req.query.password);

            // console.log(query)

            const results = await query.get()
                .then((querySnapshot) => {
                    if (querySnapshot.size !== 1) return false

                    // console.log(querySnapshot.docs[0].data())

                    //use username to access games collection and find all games user has played

                    return true
                })
                .catch(error => {
                    console.log("Error:", error)
                    return false
                })

            // .docs.map(doc => doc.data())

            console.log(results)

            res.status(200).send(results)
        })
    }
)

//route to download leaderboard data

//hash user passwords for registration route.  include a password update feature.

// exports.helloWorld = functions.https.onRequest(
//     (req, res) => {
//         functions.logger.info("Hello logs!", { structuredData: true });
//         response.send("Hello from Firebase!");

//     });
//Firebase functions - main export file



//Firebase Admin SDK to initialize firestore
const admin = require('firebase-admin')

//firestore initialization
admin.initializeApp();

//Login controller
// const login = require('./login')

//Register controller
// const register = require('./register')

//Record Game controller
const recordGame = require('./recordGame')

// ----------- Routes -------------

//user routes
// exports.userLogin = login.ctrl

// exports.userRegister = register.ctrl

exports.recordGame = recordGame.ctrl


//route to download leaderboard data

//hash user passwords for registration route.  include a password update feature.

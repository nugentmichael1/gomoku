//Gomoku

//React
import { useState, useEffect } from "react"

//JWT
// import { isExpired, decodeToken } from 'react-jwt'

//Components
import Nav from "./Components/Nav"

//User Authentication
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


//Pages
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Game from "./Pages/Game"
import Leaderboard from "./Pages/Leaderboard"
import Help from "./Pages/Help"
import Contact from "./Pages/Contact"

//Navigation
import { Route, Routes } from "react-router-dom";

//CSS
import "./CSS/CSUF_Style.css"

import getUserDisplayName from "./Firestore/getUserDisplayName"

//app check
// import 'firebase/compat/app-check'
// if (window.location.hostname === "localhost") {
//   window.self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
// }
// const appCheck = firebase.appCheck();
// appCheck.activate("6Lf4DismAAAAALTsj8aGl5sQRUqdXmWPTy7RhmKE", true)

function App() {

  //user state, used by Login, Register (want to combine those 2 one day), Game, and Leaderboard.
  const [user, setUser] = useState(null)

  //Observer of authentication service.  Is called when user is logged in or logs out.
  firebase.auth().onAuthStateChanged(async (firebaseAuthUser) => {
    if (firebaseAuthUser) {

      //guard: user already set
      if (user !== null) return

      //get username from Firebase's auth "email" field/property
      const username = firebaseAuthUser.email.split('@')[0]

      setUser({ username: username })
    }
    else {
      setUser(null)
    }
  })

  //Set user's displayName: a case-sensitive version of username
  useEffect(() => {
    const updateViewsUserDisplayName = async (username) => {

      const displayName = await getUserDisplayName(username)

      const userCopy = { ...user }
      userCopy.displayName = displayName

      setUser(userCopy)
    }

    if (user !== null && user.displayName === undefined) updateViewsUserDisplayName(user.username)

  }, [user])

  return (
    <>
      <Routes>
        <Route path='/' element={""} />
        <Route path='/:page' element={<Nav />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login user={user} />} />
        <Route path='/Register' element={<Register user={user} />} />
        <Route path='/Game' element={<Game user={user} />} />
        <Route path='/Leaderboard' element={<Leaderboard user={user} />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;




  //check session storage for existence of JWT.
  // const [jwt, setJWT] = useState(sessionStorage.getItem("jwt"))

  //If no user is set, and non-expired JSON web token (JWT) exists in session storage, use JWT payload to set user.
  // if (user === null && jwt !== null && !isExpired(jwt)) setUser(decodeToken(jwt))

  //Mainly for Leaderboard to not redownload data, but also used by Game to update data on game completions.
  // const [leaderboardData, setLeaderboardData] = useState([])
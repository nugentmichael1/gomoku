//Gomoku

//React
import { useState } from "react"

//JWT
import { isExpired, decodeToken } from 'react-jwt'

//Components
import Nav from "./Components/Nav"

import firebase from 'firebase/compat/app'

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

function App() {

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    }
  })

  //user state, used by Login, Register (want to combine those 2 one day), Game, and Leaderboard.
  const [user, setUser] = useState(null)

  //check session storage for existence of JWT.
  const [jwt, setJWT] = useState(sessionStorage.getItem("jwt"))

  //If no user is set, and non-expired JSON web token (JWT) exists in session storage, use JWT payload to set user.
  if (user === null && jwt !== null && !isExpired(jwt)) setUser(decodeToken(jwt))

  //Mainly for Leaderboard to not redownload data, but also used by Game to update data on game completions.
  const [leaderboardData, setLeaderboardData] = useState([])


  return (
    <>
      <Routes>
        <Route path='/' element={""} />
        <Route path='/:page' element={<Nav />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login user={user} setUser={setUser} setJWT={setJWT} />} />
        <Route path='/Register' element={<Register user={user} setUser={setUser} setJWT={setJWT} />} />
        <Route path='/Game' element={<Game user={user} updateLeaderboard={setLeaderboardData} />} />
        <Route path='/Leaderboard' element={<Leaderboard user={user} bestPlayersData={leaderboardData} />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

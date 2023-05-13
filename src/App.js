//Gomoku

//React
import { useState } from "react"

//JWT
import { useJwt } from 'react-jwt'

//Components
import Nav from "./Components/Nav"

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


//check session storage for existence of JWT.
const jwt = sessionStorage.getItem("jwt")


function App() {

  const [user, setUser] = useState(null)

  const { decodedToken, isExpired } = useJwt(jwt)

  //If true, set user to it.
  if (user === null && decodedToken !== null && !isExpired) {
    setUser(decodedToken)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />} />
        {/* <Route path='/' /> */}
        <Route path='/:page' element={<Nav />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Home' element={<Home />} /> */}
        <Route path='/Login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/Register' element={<Register user={user} setUser={setUser} />} />
        <Route path='/Game' element={<Game user={user} />} />
        <Route path='/Leaderboard' element={<Leaderboard user={user} />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

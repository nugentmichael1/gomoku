//Gomoku

//Style
import './App.css';

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

function App() {
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
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Game' element={<Game />} />
        <Route path='/Leaderboard' element={<Leaderboard />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>    </>
  );
}

export default App;

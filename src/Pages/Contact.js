
//React
import React from 'react'

//Assets
import Headshot from "../Assets/Headshot.jpg"

//CSS
import "../CSS/contact.css"


function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div id='contactGrid'>
        <h2>Michael Nugent</h2>
        <img src={Headshot} height="300px" widht="300px" id="profilePic" alt="Headshot" />
        <ul>
          <li>
            B.S. Computer Science
          </li>
          <li>
            California State University, Fresno
          </li>
          <li>
            August, 2022
          </li>
          <li>
            <a href="mailto:nugentmichael@live.com">
              Email me
            </a>
          </li>
        </ul>
      </div>
      <footer>
        <ul>
          <li>
            Fall 2021
          </li>
          <li>
            Professor H. Cecotti
          </li>
          <li>
            CSCI130 - Web Programming
          </li>
          <li>
            <a href="https://csm.fresnostate.edu/csci/index.html">
              CSU, Fresno - Computer Science
            </a>
          </li>
        </ul>

      </footer>
    </div>

  )
}

export default Contact
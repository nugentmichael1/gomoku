
//React
import React from 'react'

//Assets
import Headshot from "../Assets/Headshot.jpg"

//CSS
import "../CSS/contact.css"


function Contact() {
  return (
    <body className='contact'>
      <h1>Contact</h1>
      <table>
        <tr>
          <td colspan="2">
            <h2>Michael Nugent</h2>
          </td>
        </tr>
        <tr>
          <td>
            <img src={Headshot} height="300px" widht="300px" id="profilePic" alt="Headshot" />
          </td>
          <td>
            <ul>
              <li>
                B.S. Computer Science
              </li>
              <li>
                California State University, Fresno
              </li>
              <li>
                <a href="mailto:nugentmichael@live.com">
                  Email me
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </table>

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
    </body>

  )
}

export default Contact
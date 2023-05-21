import React from 'react'

//check session storage for leaderboard data
//if false, download from backend

function Leaderboard({ user }) {

  //use user object to fill in user table

  return (<>
    <h1>Leaderboard</h1>
    <ul>

      <li>
        <p>
          Please pardon my mess while this project's codebase undergoes a translation from LAMP to MERN. (April 27, 2023)
        </p>
      </li>
      <li>
        <p>Just need to implement backend capabilities. (May 12, 2023)</p>
      </li>
    </ul>
  </>
  )
}

export default Leaderboard
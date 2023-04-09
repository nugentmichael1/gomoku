import React from 'react'

function Help() {
  return (
    <div className='Help'>
      <h1>Help</h1>
      <ul>
        <li>
          <h2>Rules</h2>
          <p>
            Players alternate turns placing a stone of their color on an empty intersection (using the mouse). Black
            plays first. The winner is the first player to form an unbroken chain of five stones horizontally,
            vertically,
            or diagonally. Placing so that a line of more than five stones of the same color is created is called an
            "overline," and does not result
            in a win.
          </p>
        </li>
        <li>
          <h2>Hints</h2>
          <p>
            Mark the checkbox next to the header "Hints" to be shown possible moves that make
            4s and 5s.  These will only show on your turn.
          </p>
        </li>
        <li>
          <h2>Records</h2>
          <p>Log in to an account before a game in order to have the game statistics --
            number of turns and time taken -- tracked.  Use the register page to
            create an account.
          </p>
        </li>
        <li>
          <h2>Leaderboard</h2>
          <p>Use the Leaderboard page to view the best players: sorted by games won_games,
            total time played, and total games played.  Click on the appropriate heading
            to change sort criteria or direction.</p>
        </li>
      </ul>
    </div>
  )
}

export default Help
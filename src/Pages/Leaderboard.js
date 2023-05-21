import React, { useState, useEffect } from "react"

import getLeaders from "../Firestore/getLeaders"

//css
import "../CSS/leaderboard.css"

//check session storage for leaderboard data
//if false, download from backend

const timePlayedConverter = (seconds) => {

  //transform to minutes
  const minutes = seconds / 60

  const secondsCopy = seconds % 60

  console.log(minutes, secondsCopy)
}


const buildLeadersTable = (data) => {

  if (data === null) return

  const tbody = []

  data.forEach(({ username, won_games, time_played, games_played }) => {

    const tr = []

    //username
    tr.push(<td key={"username"}>{username}</td>)

    //won_games
    tr.push(<td key={"won_games"}>{won_games}</td>)

    //time_played
    tr.push(<td key={"time_played"}>{time_played}</td>)

    timePlayedConverter(time_played)

    //games_played
    tr.push(<td key={"games_played"}>{games_played}</td>)

    tbody.push(<tr key={username}>{tr}</tr>)
  })

  return <tbody>{tbody}</tbody>
}

function Leaderboard({ user }) {

  //use user object to fill in user table

  const [leadersTableBody, setLeadersTableBody] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const leaders = await getLeaders("won_games", "desc")
      setLeadersTableBody(buildLeadersTable(leaders))

      return leaders
    }
    fetchData()
  }, [])

  return (<div id="leaderboard">
    <h1>Leaderboard</h1>
    <table id="leaders">
      <thead>
        <tr>
          <th>User</th>
          <th>Games Won</th>
          <th>Total Time Played</th>
          <th>Total Games Played</th>
        </tr>
      </thead>
      {leadersTableBody}
    </table>
  </div>
  )
}

export default Leaderboard
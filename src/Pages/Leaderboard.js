import React, { useState, useEffect } from "react"

//css
import "../CSS/leaderboard.css"

import getLeaders from "../Firestore/getLeaders"
import getUserGames from "../Firestore/getUserGames"

class timePlayedConverter {
  seconds = null
  minutes = null
  hours = null
  days = null
  years = null

  constructor(seconds) {


    //transform to minutes
    this.minutes = Math.floor(seconds / 60)

    this.seconds = seconds % 60

    //Guard: Time Played is less than a minute
    if (this.minutes === 0) return

    //Get hours played
    this.hours = Math.floor(this.minutes / 60)

    this.minutes %= 60

    //Guard: Time Played is less than an hour
    if (this.hours === 0) return

    //Get days played
    this.days = Math.floor(this.hours / 24)

    this.hours %= 24

    //Guard: Time Played is less than a day
    if (this.days === 0) return

    //Get years played
    this.years = Math.floor(this.days / 365)

    this.days %= 365
  }
  string() {
    console.log(this.seconds)

    let str = ""

    if (this.years !== null) str += (this.years + " years, ")
    if (this.days !== null) str += (this.days + " days, ")
    if (this.hours !== null) str += (this.hours + " hours, ")
    if (this.minutes !== null) str += (this.minutes + " minutes, ")
    if (this.seconds !== null) str += (this.seconds + " seconds")

    return str
  }
}


const buildLeadersTable = (data) => {

  //Guard
  if (data === null) return

  const caption = <caption>
    Leaders
  </caption>

  const thead = <thead>
    <tr>
      <th>User</th>
      <th>Games Won</th>
      <th>Total Time Played</th>
      <th>Total Games Played</th>
    </tr>
  </thead>


  const trs = []

  data.forEach(({ displayName, won_games, time_played, games_played }) => {

    const tr = []

    //username
    tr.push(<td key={"displayName"}>{displayName}</td>)

    //won_games
    tr.push(<td key={"won_games"}>{won_games}</td>)

    //time_played
    const timePlayedStr = new timePlayedConverter(time_played).string()
    tr.push(<td key={"time_played"}>{timePlayedStr}</td>)

    //games_played
    tr.push(<td key={"games_played"}>{games_played}</td>)

    trs.push(<tr key={displayName}>{tr}</tr>)
  })

  const tbody = <tbody>{trs}</tbody>

  return < table id="leaders" >
    {caption}
    {thead}
    {tbody}
  </table >

}

const buildUserGamesTable = (games, username) => {

  const caption = <caption>
    User Games
  </caption>

  const thead = <thead>
    <tr>
      <th>Opponent</th>
      <th>Outcome</th>
      <th>Time Length</th>
      <th>Turns</th>
      <th>Date & Time</th>
    </tr>
  </thead>

  const trs = []

  //debug
  // console.log(games)

  games.forEach(({ winner, player1, player2, time_length, turn_count, timestamp }, index) => {

    const tds = []

    const opponent = (player1 === username) ? player2 : player1
    tds.push(<td key={"opponent"}>{opponent}</td>)

    const outcome = (winner === 0 && player1 === username) ? "Win" : "Loss"
    tds.push(<td key={"outcome"}>{outcome}</td>)

    tds.push(<td key={"time_length"}>{time_length}</td>)

    tds.push(<td key={"turn_count"}>{turn_count}</td>)

    const date = timestamp.toDate()
    tds.push(<td key={"timestamp"}>{date.toLocaleString()}</td>)

    trs.push(<tr key={index}>{tds}</tr>)
  })

  const tbody = <tbody>{trs}</tbody>

  return <table id="userGamesTable">
    {caption}
    {thead}
    {tbody}
  </table>
}

function Leaderboard({ user }) {

  // useEffect(() => {
  //   const getLeadersDataWrapper = async () => {

  //     const leaders = await getLeaders("won_games", "desc")

  //     setLeadersTableBody(buildLeadersTable(leaders))
  //   }
  // }, [])

  const [leadersTableBody, setLeadersTableBody] = useState(null)

  const [userGamesTable, setUserGamesTable] = useState(null)

  useEffect(() => {
    const setLeadersTableBodyWrapper = async () => {

      const leaders = await getLeaders("won_games", "desc")

      setLeadersTableBody(buildLeadersTable(leaders))
    }
    setLeadersTableBodyWrapper()

  }, [])

  // useEffect(() => {

  //   //Guard: user data is unavailable
  //   if (user === null || user.games === undefined) return

  //   const table = buildUserGamesTable(user.games, user.username)

  //   setUserGamesTable(table)

  // }, [user])

  //use user object to fill in user table
  useEffect(() => {
    const setUserGamesTableWrapper = async (username) => {

      const games = await getUserGames(username)

      const table = buildUserGamesTable(games, username)

      setUserGamesTable(table)

    }
    if (user !== null) setUserGamesTableWrapper(user.username)
  }, [user])

  return (<div id="leaderboard">
    <h1>Leaderboard</h1>
    {leadersTableBody}
    {userGamesTable}
  </div>
  )
}

export default Leaderboard
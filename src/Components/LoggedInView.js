import React from 'react'

import LogOutButton from "./LogOutButton";

function LoggedInView({ username }) {
    return (
        <div>
            <p id="loggedInMessage">Logged in as: {username}</p>
            <LogOutButton />
        </div>
    )
}

export default LoggedInView
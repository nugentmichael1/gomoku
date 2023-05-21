import React from 'react'

import LogOutButton from "./LogOutButton";

function LoggedInView({ displayName }) {
    return (
        <div>
            <p id="loggedInMessage">Logged in as: {displayName}</p>
            <LogOutButton />
        </div>
    )
}

export default LoggedInView
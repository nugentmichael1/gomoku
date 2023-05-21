
import React from 'react'

import logOut from '../FirebaseAuth/logOut'

function LogOutButton() {
    return (
        <div>
            <input
                type='button'
                value="Log Out"
                onClick={logOut}
                id='logOutButton'
            />
        </div>
    )
}

export default LogOutButton

import React, { useEffect } from 'react'


//firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

//firebase ui
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

//Firebase app is initialized app configuration settings in this file
import '../FirebaseConfig'

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessURL: '/Login',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        }
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ]
};

const auth = firebase.auth();

auth.useEmulator("http://localhost:9099")

//Initialize firebase authorization ui
const ui = new firebaseui.auth.AuthUI(auth);


function FirebaseAuthUI() {

    useEffect(() => {
        //render firebase authorization ui with provided (above) configurations
        ui.start('#firebaseui-auth-container', uiConfig)
    }, [])

    return (
        // <div id='firebaseuiAuthUI'>
        // <fieldset>
        // {/* <legend>OAuth</legend> */ }
        < div id='firebaseui-auth-container' ></div >
        // </fieldset>
        // </div>
    )
}

export default FirebaseAuthUI;

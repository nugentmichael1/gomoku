

import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import "../FirebaseConfig"

const db = firebase.firestore()

const getLeaders = async (field, direction) => {

    const usersRef = db.collection("Users")

    //direction: "desc" or "ascend" or null?
    const leadersQuery = usersRef.orderBy(field, direction).limit(10)

    const leadersResult = await leadersQuery.get()
        .then((querySnapshot) => {
            const leadersArr = querySnapshot.docs.map((doc) => {
                return doc.data()
            })

            return leadersArr
        })
        .catch((error) => {
            console.error("Error in getLeaders():", error)
            return null
        })

    //debug
    // console.log(leadersResult)

    return leadersResult

}

export default getLeaders;
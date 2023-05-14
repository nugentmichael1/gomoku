//JSON Web Token - utility function

const jwt = require('jsonwebtoken')

const createJWT = (username, games) => {

    const payload = { "username": username, "games": games }

    const secret = "gomokuJWTSecret"

    const expiration = 60 * 600

    const token = jwt.sign(payload, secret, { expiresIn: expiration })

    jwt.verify(token, "gomokuJWTSecret", (err, decoded) => {
        if (err) {
            console.log("jwt verification err")
        }
        else {
            console.log("Token verified successfully")
        }
    })

    return token
}

exports.createJWT = createJWT
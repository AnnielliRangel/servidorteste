import jwt from "jsonwebtoken";

function generateToken(user){

    const {_id, name, role} = user

    const signature = process.env.TOKEN_SIGN_SECRET

    const expiration = "12h"

    return jwt.sign({_id, email, role}, signature, {expiresIn: expiration})
}

export default generateToken
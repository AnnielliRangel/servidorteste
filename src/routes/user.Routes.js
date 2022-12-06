import { Express } from "express";
import TaskModel from "../model/task.model";
import UserModel from "../model/user.model";
import bcrypt from "bcrypt";
import generateToken from "../config/jwt.config.js"


const userRoute = express.Router()
const saltRounds = 10

//SIGNUP

userRoute.post("/sign-up", async(req, res)=>{
    try {

        const { password} = req.body

        if (!password || !password.match( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!])[0-9a-zA-Z$*&@#!]{8,}$/)){
            return res.status(400).json({msg: "A senha não possui os requisitos minimos de seguranca" })

        }

        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await UserModel.create({...req.body, passwordHash: hashedPassword} )

        delete newUser._doc.passwordHash

        return res.status(201).json(newUser)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
        
    }
})




export default userRoute;
"use server"

import User  from "../db/models/user.model"
import { connectToDatabase } from "../db/mongoose"

export const CreateUser =async(user : CreateUserParams) =>{
     connectToDatabase()
try{
 const newUser = await User.create(user)
 return JSON.parse(JSON.stringify(newUser));
}
catch(err :any) {
    console.log(err)
}

}
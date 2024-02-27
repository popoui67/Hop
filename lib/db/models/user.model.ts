import {Schema} from "mongoose"
const ImageSchema = new Schema({
    clerkId :{type :String , required :true , unique :true} ,
    email: {type :String , required :true , unique :true},
    username :{type :String , required :true , unique :true},
    photo :{type :String , required :true , unique :true},
    firstName :{type :String , required :true , unique :true} ,
    lastName :{type :String , required :true , unique :true} ,
    planId :{type :Number ,default :1} ,
    creditBalance:{type :Number ,default :1} ,
})
const User =models?.User || model("User" ,ImageSchema)
export default User
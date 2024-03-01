import { CreateUser } from "@/lib/action/user.action"

export default async function  Profile () {
    const user = await CreateUser({email :"zezezezez@sdsds", username:"sdsds",firstName:"sdsdsds"})
    return(
        <></>
    )
}
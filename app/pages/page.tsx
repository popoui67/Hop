import { GetUsers } from "@/lib/action"

  const Page = async() =>{

   const  data  = await GetUsers()
   console.log(data)
    return(
        <>////////</>
    )
}
export default Page
/*
import { TransformationForm } from "@/app/components/shared/TransfomationForm";
import { Header } from "@/app/components/shared/header";
import { transformationTypes } from "@/lib/constants";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUsersbyId } from "@/lib/action/user.action";
*/
export default async function AddTransformation ({params :{type}} :SearchParamProps) {
    /*
    const Transformation = transformationTypes[type]
    const {userId} = auth()
   if(!userId) redirect("/sign-in")
    const user = getUsersbyId(userId)

    return(
        <>
           <Header 
        title={Transformation.title}
        subTitle={Transformation.subTitle}
        />
        <TransformationFormS
        action="Add"
        userId={user._id}
        type={Transformation.type as  TransformationTypeKey}
        />
        </>
      
    )
    */
  
   return(
    <></>
   )
}


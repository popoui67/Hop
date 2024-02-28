import { TransformationForm } from "@/app/components/shared/TransfomationForm";
import { Header } from "@/app/components/shared/header";
import { transformationTypes } from "@/lib/constants";

export default function AddTransformation({params :{type}} :SearchParamProps) {
    const Transformation = transformationTypes[type]
    
    
    return(
        <>
           <Header 
        title={Transformation.title}
        subTitle={Transformation.subTitle}
        />
        <TransformationForm/>
        </>
      
    )
}
"use client"

import { useEffect, useState } from "react"

const Home =() =>{
const [elements , setElement] =useState<number>(0)
const [numbertodisp, setNumbertodisp] =useState<number>(0)
const [numbertodisp2, setNumbertodisp2] =useState<number>(0)
const [resault , setResault] =useState<number>(0)
const [eq , setEq] =useState(false)
  const HandleSubmit =(number :number ) =>{
if(number){
  setNumbertodisp(number)
  if(numbertodisp){
    setNumbertodisp(numbertodisp)
    setNumbertodisp2(number)
  }
}
  }
  const HandOpperation =(oper : string)=>{
let r:number=0
    if(oper =="/"){
  console.log(true,numbertodisp)
r=numbertodisp/numbertodisp2
setElement(r)
}
else if(oper == "*"){
  setElement( (numbertodisp*numbertodisp2))}
else if(oper == "-"){
  setElement( (numbertodisp-numbertodisp2))}
else if(oper == "+"){
  setElement( (numbertodisp+numbertodisp2))}
else if(oper === "."){
  if(oper.includes(".")) return 
}
  else {
  alert("not exist")
}


  }
  const handleEq =()=>{
    setResault(elements)
  }
  const handleClear =()=>{
    setElement(0)
    setNumbertodisp(0)
    setNumbertodisp2(0)
    setEq(false)
    setResault(0)
  }
 
  return(
    <>
     <div className="flex flex-col justify-center gap-3 items-center ">
     <div className=" flex flex-row  gap-2 ml-2 flex-wrap"> 
<div  className=" flex flex-row w-[130px] h-[90px] bg-slate-500  text-center items-center justify-center rounded-md"> {resault}</div>
<div  className=" flex flex-row w-[70px] h-[90px] bg-slate-500  text-center items-center justify-center rounded-md">{numbertodisp2} </div>
<div  className=" flex flex-row w-[70px] h-[90px] bg-slate-500  text-center items-center justify-center rounded-md"> {numbertodisp} </div>
</div>
<div className=" flex flex-row  gap-2 ml-2 flex-wrap"> 
<div onClick={() => HandleSubmit(9)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 9</div>
<div onClick={() => HandleSubmit(8)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 8</div>
<div onClick={() => HandleSubmit(7)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 7</div>
</div>
<div className=" flex flex-row  gap-2 ml-2 flex-wrap"> 
<div onClick={() => HandleSubmit(6)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 6</div>
<div onClick={() => HandleSubmit(5)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 5</div>
<div onClick={() => HandleSubmit(4)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 4</div>
</div>
<div  className=" flex flex-row  gap-2 ml-2 flex-wrap"> 
<div onClick={() => HandleSubmit(3)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 3</div>
<div onClick={() => HandleSubmit(2)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 2</div>
<div onClick={() => HandleSubmit(1)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 1</div>
</div>
<div  className=" flex flex-row  gap-2 ml-2 flex-wrap"> 
<div onClick={() =>HandleSubmit(0)} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> 0</div>
<div onClick={() =>HandOpperation(".")} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md"> .</div>
<div onClick={() =>HandOpperation("/")} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md">/</div>
</div>
<div  className=" flex flex-row  gap-2 ml-2 flex-wrap"> 
<div onClick={() =>HandOpperation("-")} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md">-</div>
<div onClick={() =>HandOpperation("+")} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md">+</div>
<div onClick={() =>HandOpperation("*")} className=" flex flex-row w-[90px] h-[90px] bg-slate-600  text-center items-center justify-center rounded-md">*</div>
</div>

<div  className=" flex flex-row  gap-2 ml-2 flex-wrap"> 
<div onClick={() =>handleEq()} className=" flex flex-row w-[140px] h-[90px] bg-slate-500  text-center items-center justify-center rounded-md"> =</div>
<div onClick={() =>handleClear()} className=" flex flex-row w-[140px] h-[90px] bg-slate-500  text-center items-center justify-center rounded-md"> clear</div>
</div>
  </div>
    
    </>

  )
}
export default Home

/*
import { CreateUsers } from "@/lib/action";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Page from "./pages/page";

export default function Home() {
let r= [373 ,45,90,67 ,55 ,9]
let r0=[]
for (let i = 0; i<r.length ; i++) {
for(let j=r.length ; j< r.length ; j--){
  if(r[i] > r[j]) {
r0[i] = r[j]
  }
  else if(r[i] < r[j]){
    r0[j]=r[i]
  }
}
}

console.log(r)


  const [data , setData] =useState({
    name :"" , email:""
  })
const HandleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
  e.preventDefault()
  try{
await CreateUsers(data)
  }
  catch(err) {
    console.log(err)
  }
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 <form onSubmit={HandleSubmit}>
<input name="name" onChange={(e)=>setData({...data , name:e.target.value})} type="text"/>
<input name="email" onChange={(e)=>setData({...data , email:e.target.value})} type="text"/>
<button type="submit">submit</button>
 </form>
 <Page/>
    </main>
  );
}


interface dataT {
  id:number
type :string
name:string
Brand:string
price:number
}
 const  Home =() =>{
  const [id , setId] =useState<number | any>(0)
  const [data , setData] =useState({
    id:id,
    type :"",
    name :"",
    Brand :"",
    price:0

  })
  const [dataToshow , setDataT]=useState<dataT[]>([]) 
const [mode , setMode] =useState("create")
const [idTo  , setIdTo] =useState(0)
const [data2 , setdata2]= useState<dataT>({})
  const HandleSub =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(data.Brand!== "" && data.name!== "" && data.type!=="" && data.price !==0 ) {
      setDataT([...dataToshow , data])
      setId((pre :number) => pre++)
      localStorage.setItem("Data" , JSON.stringify(dataToshow))
      setData({
         id:id,
        type :"",
        name :"",
        Brand :"",
        price:0})
      alert("Add New  itm")
    }
  }
  const HandDel =(id:Number)=>{
const newitm :dataT[] = dataToshow.filter((itm) => itm.id != id)
setDataT(newitm)
  }
const HandUpdate=()=>{
const itm :dataT[] = dataToshow.filter((itm) => itm.id == idTo)
for(let i=0 ; i<itm.length ; i++){
  if(data.Brand!== itm[i].Brand  ||  data.name!== itm[i].name || data.type!==itm[i].type && data.price !==itm[i].price ) {
    setId((pre :number) => pre++)
    setDataT([...itm , data2])
    localStorage.setItem("Data" , JSON.stringify(dataToshow))
 alert("Updated  itm")
 setMode("create")
}
}
  }
  const stars =(id :number) =>{
    setIdTo(id) 
     setMode("update")
     const newitm :dataT[] = dataToshow.filter((itm) => itm.id == id)
     console.log(newitm)
     if(newitm.length> 0) {
      newitm.map((itm :dataT) =>{
setdata2(itm)
      })
     }
  }

return(
  <div className=" flex mt-2 ml-2 flex-col  ">
    <p className=" text-center text-[35px]">Enter details</p>
    {
      mode == "create" ? (
        <div className="  justify-center p-2 m-2  mt-2 flex flex-row flex-wrap ml-3 items-center">
<form onSubmit={HandleSub} >
<input type="text" placeholder="type" value={data.type}  onChange={(e:ChangeEvent<HTMLInputElement>)=> setData({...data , type:e.target.value})} />
<input type="text" placeholder="name" value={data.name} onChange={(e:ChangeEvent<HTMLInputElement>)=> setData({...data , name:e.target.value})} />
<input type="text" placeholder="Brand" value={data.Brand} onChange={(e:ChangeEvent<HTMLInputElement>)=> setData({...data , Brand:e.target.value})} />
<input type="number" placeholder="Price" value={data.price} onChange={(e:ChangeEvent<HTMLInputElement>)=> setData({...data ,price :Number(e.target.value)})} />
<button type="submit">Submit</button>
</form>
</div>
      ):(
      
 <div  className=" mt-2 flex flex-row flex-wrap ml-3 items-center">
 <input type="text" placeholder="type" value={data2?.type}  onChange={(e:ChangeEvent<HTMLInputElement>)=> setdata2({...data2 , type:e.target.value})} />
  <input type="text" placeholder="name" value={data2?.name} onChange={(e:ChangeEvent<HTMLInputElement>)=> setdata2({...data2 , name:e.target.value})} />
    <input type="text" placeholder="Brand" value={data2?.Brand} onChange={(e:ChangeEvent<HTMLInputElement>)=> setdata2({...data2 , Brand:e.target.value})} />
    <input type="number" placeholder="Price" value={data2?.price} onChange={(e:ChangeEvent<HTMLInputElement>)=> setdata2({...data2 ,price :Number(e.target.value)})} />
     <button onClick={() => HandUpdate()}>Submit</button>
            </div>
      )
    }
<div className=" mt-2 lex flex-col items-center text-center">
{dataToshow.length !=0 ? (
<div className=" flex flex-col items-center text-center ">
{dataToshow.map((itm) =>(
  <div className="mt-2 flex flex-row flex-wrap ml-3 items-center">
<p>{itm.type}</p>
<p>{itm.Brand}</p>
<p>{itm.name}</p>
<p>{itm.price}</p>
<div>
<button onClick={()=> HandDel(itm.id)}>Delete</button>
<button onClick={()=>stars(itm.id) }>Update</button>
</div>
  </div>
))}


</div>
):(
  <p className=" text-center text-[35px]">There is Now Data</p>
)}

</div>
  </div>
)


}
export default Home
*/


/*
function bubbleSort(arr :number[]) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap elements
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  return arr;
}

// Example usage:
let array = [5, 2, 8, 1, 4];
console.log("Original Array:", array);
console.log("Sorted Array:", bubbleSort(array.slice())); // Use slice() to avoid modifying the original array
*/
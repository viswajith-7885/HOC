import { useState } from "react"


function UpdatedComponent(Originalcomponent) {
    function Newcomponent(){
        const[inc,setinc]=useState(20)
        const IncrementHandle =()=>{
            setinc(inc*10)
        }
        
    const RefreshHandle =()=>{
        setinc(20)
    }
        return <Originalcomponent IncrementHandle={IncrementHandle} inc={inc} RefreshHandle={RefreshHandle}/>
    }
  return Newcomponent
  
}

export default UpdatedComponent
import  { useEffect, useState } from 'react'

function Userlist() {
    const [user,setuser]=useState([])
    const [input,setinput]=useState("")
    useEffect(()=>{
        const fechUser =async()=>{
            const res = await fetch("https://dummyjson.com/users")
            const json = await res.json()
            setuser(json.users)
           console.log(json)
        }
        fechUser()
    },[])
    console.log(user,"heyy")
   
 

    //simple search functionality
    let filterusers = user.filter(({firstName})=>{
        return firstName.toLowerCase().includes(input.toLowerCase());
    }).map((e)=>{
        return(
        <div key={e.id}>
        <h3>{e.firstName}</h3>
       
        </div>
    )})
  return (
    <div>
    <input type='text' value={input} onChange={(e)=>setinput(e.target.value)}/>
    <div>{filterusers}</div>
    </div>
  )
}

export default Userlist
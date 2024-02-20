import UpdatedComponent from "./HOC"



function Person1({inc,IncrementHandle,RefreshHandle}) {
    

  return (
    <div>
    <h1>Person1</h1>
    <p>Total amount ${inc}</p>
    <button onClick={IncrementHandle}>Increment</button>
    <button onClick={RefreshHandle}>Refresh</button>
   
    
    </div>
  )
}

export default UpdatedComponent (Person1);
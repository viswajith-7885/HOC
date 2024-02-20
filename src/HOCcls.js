// const HOC = (Wrapedcomponent,entity)=>{
//     return class extends React.Component {
//         state={
//             data:[],
//             term:'',
//         };
//         componentDidMount(){
//             const fechData =async()=>{
//                 const res = await fetch(`https://dummyjson.com/${entity}`)
//                 const json = await res.json()
//                 this.setState({...this.state,data:json})
              
//             }
//             fechData()
//         }
//         render(){
//             let{term,data}= this.state;
//             let filterData =data.filter((d)=>{
//                 if(entity==="user"){
//                     const {firstName}=d
//                     return firstName.toLowerCase().includes(term.toLowerCase());
//                 }
//                 if(entity==='todo'){
//                     const{title}=d
//                     return title.toLowerCase().includes(term.toLowerCase());
//                 }
//             })
//             return(
//                 <div>
//                 <h2>{entity}</h2>
//                 <input type='text' value={term} onChange={(e)=>this.setState({...this.state,term:e.target.value})}/>
//                 <Wrapedcomponent data={filterData}></Wrapedcomponent>
//                 </div>
//             )

//         }
//     }
// }
// export default HOC;
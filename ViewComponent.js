import React,{Component} from 'react';
const ViewComponent=(props)=>
{
  return(
    <div>
   {
     Object.keys(props.details).map(key=>{
       return <li>{props.details[key]}
       </li>
     })
   } 
    </div>
  )
}
export default ViewComponent;
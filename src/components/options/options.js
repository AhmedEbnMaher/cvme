import React from "react";
import './options.scss'
const Options=()=>{
return(
    <div className="options">
       <ul>
           <li className='posts active'>Posts </li> 
           <li className="job">Jobs</li> 
           <li className="employee" >Employees</li> 
           <li className="about">About</li>   
       
        </ul>
    </div>
);

}
export default Options
import React from "react";
import {BsHouseDoor,BsBag,BsBell,BsCheck2Square,BsGear} from "react-icons/bs";
import {BiChart} from 'react-icons/bi'
import './manage.scss'
const ManagePage=()=>{
return(
    <div className="left-section">
       <span className="left-section-title">Manage Page</span>
       <ul>
           <li className='active'><p className="list-icon"><BsHouseDoor style={{fontSize:'20px'}}/></p> <span className="ml-2">Home</span></li> 
           <li ><p className="list-icon"><BsBag style={{fontSize:'20px'}} /></p><span className="ml-2" >Company Jobs</span></li> 
           <li ><p className="list-icon"><BiChart style={{fontSize:'20px'}}/></p><span className="ml-2" >Page Analytics</span></li> 
           <li ><p className="list-icon"><BsBell style={{fontSize:'20px'}}/></p><span className="ml-2" >Page Notifications</span></li>   
           <li ><p className="list-icon"><BsCheck2Square style={{fontSize:'20px'}}/></p><span className="ml-2" >Verification</span></li> 
           <li ><p className="list-icon"><BsGear style={{fontSize:'20px'}}/></p><span className="ml-2" >Page Settings</span></li>  
        </ul>
    </div>
);

}
export default ManagePage
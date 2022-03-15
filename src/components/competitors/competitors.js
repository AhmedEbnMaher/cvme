import React from "react";
import mainprofile from '../../assets/images/mainprofile.png'
import profile2 from '../../assets/images/profile2.png'
import profile3 from '../../assets/images/profile3.png'
import {FaRegPlusSquare} from 'react-icons/fa'
import './competitors.scss'
const Competitors=()=>{
return(
    <div>
        <div className="titles mb-4">
        <h1 className="competitors-title">Look at your competitors</h1>
        <span className="competitors-part-title">Companies that related to your industry</span>
        </div>
    <div className="part-competitors ">
    <div className="col-8 d-flex ml-0 pl-0">
    <img src={mainprofile} width='40px' height='40px' className='profile-image' alt='profile' />
    <div className="top">
    <h4 className="page-name">SpaceX</h4>
    <span className="post-publisher">Aerospace, Comunic...</span>
    </div>
    </div>
    <button><FaRegPlusSquare style={{fontSize:'15px'}}/> <span>Follow</span></button>
    </div>
    <div className="part-competitors">
    <div className="col-8 d-flex ml-0 pl-0">
    <img src={profile2} width='40px' height='40px' className='profile-image' alt='profile' />
    <div className="top">
    <h4 className="page-name">Airbnb</h4>
    <span className="post-publisher">Travel, Technology</span>
    </div>
    </div>
    <button><FaRegPlusSquare style={{fontSize:'15px'}}/> <span>Follow</span></button>
    </div>
    <div className="part-competitors">
    <div className="col-8 d-flex ml-0 pl-0">
    <img src={profile3} width='40px' height='40px' className='profile-image' alt='profile' />
    <div className="top">
    <h4 className="page-name">Dribbblee</h4>
    <span className="post-publisher">Design, Technology</span>
    </div>
    </div>
    <button><FaRegPlusSquare style={{fontSize:'15px'}}/> <span>Follow</span></button>
    </div>
    <div className="text-center mt-2"><span className="view-all">View All Competitors</span></div>
    
    </div>
);

}
export default Competitors
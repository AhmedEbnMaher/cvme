import React from 'react'
import { Container } from 'reactstrap'
import { BsSearch ,BsHouseDoor,BsPeople,BsBagDash,BsEnvelope,BsBell,BsChevronDown} from "react-icons/bs";
import profile from'../../assets/images/profile.png'
import Logo from'../../assets/images/Logo.png'
import './header.scss'
const Header = props => {
 
  return (
<div className='header-content'>
  <Container  >
      <div className='d-flex mini-container'>
       <div className='logo'>
      <img src={Logo} width='98px' height='36px' alt='Logo' />
       </div>

       <div className="d-flex app-search">
         <span className='search-icon'><BsSearch/></span>
          <input
            type="text"
            className="my-input"
            placeholder="Search CVme"
           />
          </div>
        <div className='main-menu'>
        <ul>
           <li className='list1 active'> <BsHouseDoor /><span className='list-element ml-1'>Home</span></li> 
           <li className='list2'><BsPeople/><span className='list-element ml-1'>Network</span></li> 
           <li className='list3'><BsBagDash/><span className='list-element ml-1'>Jobs</span></li> 
           <li className='list4'><BsEnvelope/><span className='list-element ml-1'>Inbox</span></li>   
        </ul>
        </div>
        <div className='notifications'>
        <p className='notification-icon'> <BsBell/></p> 
        </div>
        <div className='profile'>
        <img src={profile} width='28px' height='28px' alt='profile' />
        <span className='ml-2'><BsChevronDown className='icon-drop'/></span>
        </div>
      </div>
  </Container>
</div>
  )
}

export default Header

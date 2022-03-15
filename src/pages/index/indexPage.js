import React from 'react'
import { Container } from 'reactstrap'
import cover from '../../assets/images/cover.png'
import mainprofile from '../../assets/images/mainprofile.png'
import ManagePage from '../../components/managepage/manage.js'
import Options from '../../components/options/options.js'
import PostsEditor from '../../components/postseditor/posteditor'
import TimeLine from '../../components/time-line/timeline'
import Competitors from '../../components/competitors/competitors'
import { FaRegEdit } from "react-icons/fa";
import './indexPage.scss'

const IndexPage = props => {
 
  return (

<div className='main-content'>
<Container className='main-content'>
  <div className='cover-part'>
  <div className='inner-cover'>
  <div>
<img src={cover} width='100%' height='160px' alt='profile' />
<span className='edit-icon-bg'><FaRegEdit className='edit-icon' /></span>
<img src={mainprofile} width='104px' height='104px' className='profile-image' alt='profile' />
  </div>
  <div className='cover-information d-flex'>
  <span className='user-name'>SpaceX</span>
  <button className='btn view-button'>View as member</button>
  <button className='btn share-button'>Share</button>
  <div className='user-inf-container'>
    <p className='user-informaion'>Aerospace, Communication</p>
    <p className='user-informaion'>London, UK • 51.3K Followers • 112 Employees</p>
  </div>
  </div>
  </div>
  </div>
  <div className='page-body'>
   <div className='manage-page'>
   <ManagePage/>
   </div>
   <div className='time-line-options'>
     <div className='profile-options'>
     <Options/>
     </div>
    <div className='posts-editor'>
    <PostsEditor/>
    </div>
     <TimeLine/>
   </div>
   <div className='competitors'>
     <Competitors/>
   </div>
  </div>
</Container>
</div>
  )
}

export default IndexPage

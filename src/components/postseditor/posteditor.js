import React from "react";
import mainprofile from '../../assets/images/mainprofile.png'
import {FaImage,FaRegCaretSquareRight} from 'react-icons/fa'
import './posteditor.scss'
const PostsEditor=()=>{
return(
    <div className="editor">
     <div className="editor-search">
     <img src={mainprofile} width='40px' height='40px' className='profile-image' alt='profile' />
     <input type='text' placeholder="Write a new post.." className="post-input" />
     </div>
     <div className="file-img">
     <div>
       <FaImage/> <span className="ml-1">Image</span>
     </div>
     <div className="ml-5">
     <FaRegCaretSquareRight/> <span className="ml-1">Video</span>
     </div>
     </div>
    </div>
);

}
export default PostsEditor
import React from "react";
import {FaRegThumbsUp} from 'react-icons/fa'
import {BiCommentDots,BiComment,BiUpload} from 'react-icons/bi'
import './timeline.scss'
const Posts=[{pageName:'SpaceX',publisher:'Mohamed Osman',edited:true,time:'24 mins ago',image:'mainprofile',
             postContent:'People don’t use a product because of the great design; Great design helps them use the product!',
             likes:110,comments:16},
             {pageName:'SpaceX',publisher:'Amed Maher',edited:false,time:'2 hrs ago',image:'mainprofile',
             postContent:'It’s through mistakes that you actually can grow. You have to get bad in order to get good. Color does not add a pleasant quality to design - it reinforces it.No design works unless it embodies ideas that are held common by the people for whom the object is intended.',
             likes:110,comments:16,bodyImage:'bodyImage'},
             {pageName:'SpaceX',publisher:'Mohamed Osman',edited:true,time:'24 mins ago',image:'mainprofile',
             postContent:'People don’t use a product because of the great design; Great design helps them use the product!',
             likes:110,comments:16},
             {pageName:'SpaceX',publisher:'Mohamed Osman',edited:false,time:'24 mins ago',image:'mainprofile',
             postContent:'It’s through mistakes that you actually can grow. You have to get bad in order to get good. Color does not add a pleasant quality to design - it reinforces it. No design works unless it embodies ideas that are held common by the people for whom the object is intended.',
             likes:110,comments:16,bodyImage:'bodyImage'}
            ]

const TimeLine=()=>{
return(
   <>
  {Posts.map((post,idx)=>(
      <div key={idx}>
    <div className="timline-content">
        <div className="post-top-part">
     <img src={require(`../../assets/images/${post.image}.png`)} width='40px' height='40px' className='profile-image' alt='profile' />
     <div className="top col-9">
     <h4 className="page-name">{post.pageName}</h4>
     <span className="post-publisher">Published by {post.publisher}{post.edited===true?` (Edited)`:''}</span>
     </div>
     <span className="time">{post.time}</span>
     </div>
     <div className="post-main-content">
      <p className="post-content">{post.postContent}</p>
      {post.bodyImage?<img src={require(`../../assets/images/${post.bodyImage}.png`)} width='408px' height='226px'  alt='profile' />:''}
     </div>
     <div className="likes-comments">
    <FaRegThumbsUp/> <span className="likes">{post.likes} Likes</span> <BiCommentDots/> <span className="comments">{post.comments} Comments</span>
     </div>
     <div className="post-bottom-part">
     <div><FaRegThumbsUp style={{color:'#656575',fontSize:'20px',cursor:'pointer'}}/><span className="social-icons">Like</span></div> 
     <div><BiComment style={{color:'#656575',fontSize:'20px',cursor:'pointer'}}/><span className="social-icons">Comment</span></div>
      <div><BiUpload style={{color:'#656575',fontSize:'20px',cursor:'pointer'}}/> <span className="social-icons">Share</span></div>
     </div>
    </div>
    </div>
  ))}
   </>
);

}
export default TimeLine
import React, { useState } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData'

export default function Post({post}) {


  const [like,setLike] =useState(post.like)
  const [isliked,setIsLiked] =useState(false)

  const likeHandler = () =>{
    setLike(isliked ? like-1 : like+1 )
    setIsLiked(!isliked)
  }
  
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="https://purneauniversity.org/wp-content/uploads/2022/12/JC-.png" className='postProfileImg' alt="" />
                <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                 <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className='postImg' src="https://i2-prod.mirror.co.uk/incoming/article21811848.ece/ALTERNATES/s615/0_18296664-high_res-killing-eve-s2.jpg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/like.png?raw=true" onClick={likeHandler} alt="" />
                <img className='likeIcon' src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/heart.png?raw=true" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like} people liked</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

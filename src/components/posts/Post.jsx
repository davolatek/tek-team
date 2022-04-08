import React from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className="posts">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/7.jpg" alt="" className="postProfileImg" />
                    <span className="postUserName">David Olaotan</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className='more' />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! it's my first post:)</span>
                <img src="/assets/person/1.png" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="" className="likeIcon" />
                    <img src="/assets/heart.png" alt="" className="likeIcon" />
                    <span className="likeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

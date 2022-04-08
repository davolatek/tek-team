import React from 'react'
import Post from '../posts/Post'
import Share from '../share/Share'
import './feed.css'

export default function Feed() {
  return (
    <div className='feeds'>
      <div className="feed-wrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

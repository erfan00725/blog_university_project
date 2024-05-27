import React from 'react'
import PostReadInfoShare from './PostReadInfoShare'
import postImg from '../../assets/images/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png'

const PostCard = () => {
  return (
    <div className='w-[940px] main-border px-24 py-14 flex flex-col'>
        <PostReadInfoShare />
        <h2 className='text-4xl font-bold tracking-wide'>Do Not Leave Tokyo Before Eating This Ramen</h2>
        <p className='font-semibold mt-5'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
        <img src={postImg} alt="" />
    </div>
  )
}

export default PostCard
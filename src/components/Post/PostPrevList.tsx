import React from 'react'
import PostPrev from './PostPrev'
import { PostPrevProps } from '../../types/propsTypes'
import classNames from 'classnames'


const displayPrevs = ()=>{
    for(let index = 0; index < 6; index++){
        return  
    }

}

const PostPrevList = ({isBig = false}: PostPrevProps) => {
  return (
    <div className={classNames("flex flex-col max-w-[1000px]", {"lg:!flex-row flex-wrap justify-center": isBig})}>
        <PostPrev isBig={isBig}/>
        <PostPrev isBig={isBig}/>
        <PostPrev isBig={isBig}/>
        <PostPrev isBig={isBig}/>
        <PostPrev isBig={isBig}/>
        <PostPrev isBig={isBig}/>
    </div>
  )
}

export default PostPrevList
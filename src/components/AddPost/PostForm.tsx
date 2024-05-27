import React from 'react'
import Input from '../common/Input'

const PostForm = () => {
  return (
    <div>
        
        <form
        className="flex flex-col items-center mt-10 min-w-[800px]"
        action="post"
      >
        <div className="flex flex-row mb-10 w-full">
          <Input className="mr-7 flex-1 w-full" title="First Name" />
          <Input title="Last Name" className="flex-1 w-full" />
        </div>
        <Input title="Email" className="mb-10 flex-1 w-full" required />
        <Input title="Massge" className="h-20 flex-1 w-full" type="textarea" />
        <button type="submit" className="btn my-16 w-64">
          Submit
        </button>
    </form>
        </div>
  )
}

export default PostForm
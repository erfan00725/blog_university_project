import React from "react";
import Input from "../../common/Input";

const PostForm = () => {
  return (
    <div>
      <form
        className="flex flex-col items-center mt-10 min-w-[800px]"
        action="post"
      >
        <Input className="w-full" title="Title" />
        <Input
          title="Short Discreption"
          className="w-full"
          inputClassName="!h-15"
          type="textarea"
        />
        <Input
          title="Post Image"
          className="w-full mt-7 border-b-0"
          inputClassName="h-auto leading-normal mt-5"
          type="file"
          accept="image/*"
        />
        <Input
          title="Description"
          className="w-full"
          inputClassName="!h-40"
          type="textarea"
        />
        {/* <input className="w-full " type="file" src="" alt="" /> */}
        <button type="submit" className="btn my-16 w-64">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;

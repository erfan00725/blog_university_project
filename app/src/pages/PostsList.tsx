import React from "react";
import PostPrevList from "../components/Post/PostPrevList";

const PostsList = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <PostPrevList perPage={12} isBig />
    </div>
  );
};

export default PostsList;

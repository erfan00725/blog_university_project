import React from "react";
import PostPrevSmall from "./PostPrevSmall";

const RecentPostsList = () => {
  return (
    <div className="flex flex-col w-full mb-5">
      <div className="w-full flex flex-row justify-between my-5 ">
        <span className="font-light text-lg">Recent Posts</span>
        <span className="font-light text-hover">See All</span>
      </div>
      <div className="flex flex-row">
        <PostPrevSmall />
        <PostPrevSmall />
        <PostPrevSmall />
      </div>
    </div>
  );
};

export default RecentPostsList;

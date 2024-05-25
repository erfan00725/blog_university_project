import React from "react";
import PostPrev from "../common/PostPrev";

const MainLeft = () => {
  return (
    <div className="flex-2 flex flex-col justify-start items-center border-main-color border-r pb-20">
      <div className="flex flex-col justify-start items-start">
        <h3 className="section-title">TRAIN OF THOUGHT</h3>
        <div className="flex flex-col">
          <PostPrev />
          <PostPrev />
          <PostPrev />
          <PostPrev />
          <PostPrev />
          <PostPrev />
        </div>
      </div>
      <button className="btn w-40 mt-12 leading-9">More Posts</button>
    </div>
  );
};

export default MainLeft;

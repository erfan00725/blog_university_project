import React from "react";
import img from "../../assets/images/post1.webp";
import PostReadInfo from "./PostReadInfo";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostPrev = () => {
  return (
    <div className="main-border flex flex-row mb-8 last-of-type:mb-0">
      <a href="">
        <img className="w-64 h-80" src={img} alt="" />
      </a>
      <div className="flex flex-col h-full w-80 px-7 pt-6 items-start">
        <PostReadInfo />
        <a href="" className="post-prev-text">
          <h3 className="post-title">
            Do Not Leave Tokyo Before Eating This Ramen
          </h3>
          <p className="post-prev-description">
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to con...
          </p>
        </a>
        <div className="flex flex-row justify-between border-t border-border-secondery-color w-full pt-4 pb-5">
          <div className="flex flex-row items-center font-light text-sm">
            <span>0 views</span>
            <span className="ml-3">0 comments</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="font-light text-sm mr-1">12 </span>
            <FontAwesomeIcon color="red" icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPrev;

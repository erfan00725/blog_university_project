import React from "react";
import image from "../../assets/images/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png";
import { Link } from "react-router-dom";

const PostPrevSmall = () => {
  return (
    <Link
      to={"/posts/1"}
      className="flex flex-col w-[288px] justify-start items-center post-prev-text main-border h-[265px] flex-1 mr-8 last-of-type:mr-0"
    >
      <img src={image} alt="image" className="" />
      <span className="flex-1 w-full inline-block p-5 font-semibold text-wrap">
        Amsterdam 101: Redefining The French Fries
      </span>
    </Link>
  );
};

export default PostPrevSmall;

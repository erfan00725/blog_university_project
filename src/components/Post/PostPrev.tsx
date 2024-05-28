import React, { useState } from "react";
import img from "../../assets/images/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png";
import PostReadInfo from "./PostReadInfo";
import {
  faEllipsisVertical,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostPrevProps } from "../../types/propsTypes";
import classNames from "classnames";
import PostReadInfoShare from "./PostReadInfoShare";
import { Link } from "react-router-dom";

const PostPrev = ({ isBig = false }: PostPrevProps) => {
  return (
    <div
      className={classNames("main-border flex flex-row mb-8", {
        "flex-col max-w-[400px] lg:w-1/2  lg:ml-5 odd:ml-0": isBig,
        "last-of-type:mb-0": !isBig,
      })}
    >
      <Link to="/posts/1">
        <img
          className={classNames("w-64 h-80 object-cover", {
            "w-full h-auto": isBig,
          })}
          src={img}
          alt=""
        />
      </Link>
      <div
        className={classNames(
          "flex flex-col h-full w-80 px-7 pt-6 items-start",
          { "w-full": isBig }
        )}
      >
        {isBig ? <PostReadInfoShare /> : <PostReadInfo />}
        <Link
          to="/posts/1"
          className={classNames("post-prev-text", { "pb-10": isBig })}
        >
          <h3 className="post-title">
            Do Not Leave Tokyo Before Eating This Ramen
          </h3>
          <p className="post-prev-description">
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to con...
          </p>
        </Link>
        <div
          className={classNames(
            "flex flex-row justify-between border-t border-border-secondery-color w-full pt-4 pb-5",
            { hidden: isBig }
          )}
        >
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

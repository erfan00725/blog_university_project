import React, { useState } from "react";
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
import { postType } from "../../types/fetchResponseTypes";

const PostPrev = ({
  isBig = false,
  id,
  description,
  title,
  image_path: img,
  likes = 0,
}: PostPrevProps & postType) => {
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
          <h3 className="post-title">{title}</h3>
          <p className="post-prev-description">{description}</p>
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
            <span className="font-light text-sm mr-1">{likes} </span>
            <FontAwesomeIcon color="red" icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPrev;

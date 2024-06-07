import React, { useState } from "react";
import PostReadInfo from "./PostReadInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faShare } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { PostReadInfoProps } from "../../types/propsTypes";

const PostReadInfoShare = ({ created_at }: PostReadInfoProps) => {
  const [optionMenu, setOptionMenu] = useState(false);

  return (
    <div className="flex flex-row w-full">
      <PostReadInfo created_at={created_at} />
      <div className={classNames("relative h-full")}>
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => setOptionMenu((prev) => !prev)}
          icon={faEllipsisVertical}
        />
        <div
          className={classNames(
            "w-[175px] h-[40px] font-light text-sm bg-alt-color flex-row cursor-pointer pl-6 justify-start items-center shadow-md shadow-slate-300 absolute right-full hidden",
            { "!flex": optionMenu }
          )}
        >
          <FontAwesomeIcon icon={faShare} />
          <span className="ml-4">Share Post</span>
        </div>
      </div>
    </div>
  );
};

export default PostReadInfoShare;

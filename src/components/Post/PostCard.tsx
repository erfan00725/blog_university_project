import React from "react";
import PostReadInfoShare from "./PostReadInfoShare";
import postImg from "../../assets/images/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { postType } from "../../types/fetchResponseTypes";

const PostCard = ({
  description,
  id,
  title,
  body,
  image_path,
  likes = 0,
}: postType) => {
  return (
    <div className="w-[940px] main-border px-24 py-14 flex flex-col">
      <PostReadInfoShare />
      <h2 className="text-4xl font-bold tracking-wide">{title}</h2>
      <p className="font-semibold mt-5">{description}</p>
      <img src={postImg} className="w-full h-auto my-10" alt="" />
      <div className="flex flex-col items-start pb-12 border-b border-border-secondery-color">
        <p
          className="whitespace-pre text-wrap text-lg w-full text-start text-main-color"
          dangerouslySetInnerHTML={{ __html: body || "" }}
        />
      </div>
      <div className="flex flex-row justify-between w-full py-5 px-1">
        <div className="text-lg">
          <button className="mr-7">
            <FontAwesomeIcon className="btnIcon" icon={faXTwitter} />
          </button>
          <button className="mr-7">
            <FontAwesomeIcon className="btnIcon" icon={faInstagram} />
          </button>
          <button>
            <FontAwesomeIcon className="btnIcon" icon={faLink} />
          </button>
        </div>

        <div className="flex flex-row items-center justify-center">
          <a
            href=""
            className="text-base font-light text-main-color transition-colors duration-150 hover:text-secondery-color"
          >
            Travel
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

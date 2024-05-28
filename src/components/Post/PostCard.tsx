import React from "react";
import PostReadInfoShare from "./PostReadInfoShare";
import postImg from "../../assets/images/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const PostCard = () => {
  return (
    <div className="w-[940px] main-border px-24 py-14 flex flex-col">
      <PostReadInfoShare />
      <h2 className="text-4xl font-bold tracking-wide">
        Do Not Leave Tokyo Before Eating This Ramen
      </h2>
      <p className="font-semibold mt-5">
        Create a blog post subtitle that summarizes your post in a few short,
        punchy sentences and entices your audience to continue reading.
      </p>
      <img src={postImg} className="w-full h-auto my-10" alt="" />
      <div className="flex flex-col items-start pb-12 border-b border-border-secondery-color">
        <p className="whitespace-pre text-wrap text-lg w-full text-start text-main-color">
          Welcome to your blog post. Use this space to connect with your readers
          and potential customers in a way that’s current and interesting. Think
          of it as an ongoing conversation where you can share updates about
          business, trends, news, and more.{"\n\n"}
          <span className="font-normal text-2xl text italic border-l-2 border-secondery-color block pl-5">
            “Welcome to your blog post. Use this space to connect with your
            readers and potential customers in a way that’s current and
            interesting. Think of it as an ongoing conversation where you can
            share updates about business, trends, news, and more.”
          </span>
          {"\n"}
          You’ll be posting loads of engaging content, so be sure to keep your
          blog organized with Categories that also allow visitors to explore
          more of what interests them.
          {"\n"}
          <h3 className="font-semibold text-2xl py-7">
            Create Relevant Content
          </h3>
          Writing a blog is a great way to position yourself as an authority in
          your field and captivate your readers’ attention. Do you want to
          improve your site’s SEO ranking? Consider topics that focus on
          relevant keywords and relate back to your website or business. You can
          also add hashtags (#vacation #dream #summer) throughout your posts to
          reach more people, and help visitors search for relevant content.
          {"\n\n"}
          Blogging gives your site a voice, so let your business’ personality
          shine through. Choose a great image to feature in your post or add a
          video for extra engagement. Are you ready to get started? Simply
          create a new post now.
        </p>
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
